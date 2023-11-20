const { Op } = require('sequelize');
const { Goods } = require('../db/sequelize');
const { Users } = require('../db/sequelize');
const sequelize = require('sequelize');
const multer = require('multer');
const path = require('path');
const DB = require('../lib/db2');
const { request } = require('http');
//var forms = multer();
//app.use(forms.array()); 

const sharp = require('sharp');
const fs = require('fs');

const pageSize = require('../../config').pageSize;

function genSalt() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 20; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const storage = multer.memoryStorage(/*{
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../../public/goods_photos/'))
    },
    filename: function (req, file, cb) {
        cb(null, genSalt() + '-' + Date.now() + file.originalname.match(/\..*$/)[0])
    }
}*/);

exports.multi_upload = multer({
    storage,
    limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            const err = new Error('Only .png, .jpg and .jpeg format allowed!')
            err.name = 'ExtensionError'
            return cb(err);
        }
    },
}).array('images', 3)

exports.getPage = (request, response, next) => {
    var lat = parseFloat(request.query.lat);
    var lng = parseFloat(request.query.lon);
    var attr = ['id', 'name', 'price', 'description', 'photos', 'created_at', 'views', 'status', 'latitude', 'longitude', 'userId'];
    var location = sequelize.literal(`ST_GeomFromText('POINT(${lng} ${lat})')`);
    var distance = sequelize.fn('ST_Distance_Sphere', sequelize.fn('Point', sequelize.col('longitude'), 
        sequelize.col('latitude')), location);
    if (lat && lng)
        attr.push([distance,'distance']);
    let where;
    if (request.query.sort != 'subscriptions') {
        where = {
            [Op.and]: [{
                name: {
                    [Op.like]: '%' + request.query.word + '%'
                },
                status: 'active'
            }]
        }
    }
    else {
        where = {
            [Op.and]: [{
                name: {
                    [Op.like]: '%' + request.query.word + '%'
                },
                status: 'active',
                id: {
                    [Op.in]: sequelize.literal(`(
                        SELECT id
                        FROM goods
                        WHERE
                            goods.userId IN (
                                SELECT userId
                                FROM subscriptions
                                WHERE
                                    subscriptions.from_id = ${request.user.id}
                            )
                    )`)
                }
            }]
        }
    }
    if (request.query.sort) {
        Goods.findAndCountAll({
            where,
            order: lat && lng && request.query.sort == 'distance' ? [sequelize.fn('isnull', sequelize.col('distance')),
                ['distance', 'ASC']]
                : [[!request.query.sort || request.query.sort == 'new' || request.query.sort == 'subscriptions' ? 'id'
                    : 'views', 'DESC']],
            limit: pageSize,
            offset: Number(request.query.since * pageSize),
            attributes: attr,
            /*include: [{
                model: models.users
            }]*/
            include: [Users],
            //attributes: ['id', 'name', 'price', 'description', 'photos', 'created_at', 'views', 'status', 'latitude', 'longitude', 'userId', [sequelize.fn('COUNT', sequelize.col('goods.id')), 'amount']],
            //model: Goods, as: 'SubGoods'
            /*attributes: {
                include: [
                    [
                        // Note the wrapping parentheses in the call below!
                        sequelize.literal(`(
                            SELECT nickname
                            FROM users AS users
                            WHERE
                                users.id = goods.id
                        )`),
                        'nickname'
                    ]
                ]
            }*/
        }).then(result => {
            if (result.count == 0) {
                response.status(404).send({error: 'Ничего не найдено!'});
                return;
            }
            response.json( { 'goods': [result] } );
        }).catch(err => {
            response.status(500).send({error: err});
        });
    }
};

exports.getPageCats = (request, response, next) => {
    var lat = parseFloat(request.query.lat);
    var lng = parseFloat(request.query.lon);
    var attr = ['id', 'name', 'price', 'description', 'photos', 'created_at', 'views', 'status', 'latitude', 'longitude', 'userId'];
    var location = sequelize.literal(`ST_GeomFromText('POINT(${lng} ${lat})')`);
    var distance = sequelize.fn('ST_Distance_Sphere', sequelize.fn('Point', sequelize.col('longitude'), 
        sequelize.col('latitude')), location);
    if (lat && lng)
        attr.push([distance,'distance']);
    if (request.query.sort != 'subscriptions') {
        where = {
            [Op.and]: [{
                name: {
                    [Op.like]: '%' + request.query.word + '%'
                },
                status: 'active',
                id: {
                    [Op.in]: sequelize.literal(`(
                        SELECT goods_id
                        FROM categories
                        WHERE
                            categories.type_id = ${request.query.category}
                    )`)
                }
            }]
        }
    }
    else {
        where = {
            [Op.and]: [{
                name: {
                    [Op.like]: '%' + request.query.word + '%'
                },
                status: 'active',
                id: {
                    [Op.in]: sequelize.literal(`(
                        SELECT id
                        FROM goods
                        WHERE
                            goods.userId IN (
                                SELECT userId
                                FROM subscriptions
                                WHERE
                                    subscriptions.from_id = ${request.user.id}
                            )
                     INTERSECT 
                        SELECT goods_id
                        FROM categories
                        WHERE
                            categories.type_id = ${request.query.category}
                    )`)
                }
            }]
        }
    }
    if (request.query.sort) {
        Goods.findAndCountAll({
            where,
            /*order: lat && lng ? [sequelize.fn('isnull', sequelize.col('distance')),
                [!request.query.sort || request.query.sort == 'new' ? 'id' : request.query.sort == 'distance' ? 'distance'
                    : 'views', request.query.sort == 'distance' ? 'ASC' : 'DESC']]
                : [[!request.query.sort || request.query.sort == 'new' ? 'id'
                    : 'views', 'DESC']],*/
            /*order: lat && lng ? [
                [!request.query.sort || request.query.sort == 'new' ? 'id' : request.query.sort == 'distance' ? sequelize.fn('isnull', sequelize.col('distance'))
                    : 'views', request.query.sort == 'distance' ? 'ASC' : 'DESC']]
                : [[!request.query.sort || request.query.sort == 'new' ? 'id'
                    : 'views', 'DESC']],*/
            order: lat && lng && request.query.sort == 'distance' ? [sequelize.fn('isnull', sequelize.col('distance')),
                ['distance', 'ASC']]
                : [[!request.query.sort || request.query.sort == 'new' ? 'id'
                    : 'views', 'DESC']],
            limit: pageSize,
            offset: Number(request.query.since * pageSize),
            attributes: attr,
            /*include: [{
                model: models.users
            }]*/
            include: [Users],
            //attributes: ['id', 'name', 'price', 'description', 'photos', 'created_at', 'views', 'status', 'latitude', 'longitude', 'userId', [sequelize.fn('COUNT', sequelize.col('goods.id')), 'amount']],
            //model: Goods, as: 'SubGoods'
            /*attributes: {
                include: [
                    [
                        // Note the wrapping parentheses in the call below!
                        sequelize.literal(`(
                            SELECT nickname
                            FROM users AS users
                            WHERE
                                users.id = goods.id
                        )`),
                        'nickname'
                    ]
                ]
            }*/
        }).then(result => {
            if (result.count == 0) {
                response.status(404).send({error: 'Ничего не найдено!'});
                return;
            }
            response.json( { 'goods': [result] } );
        }).catch(err => {
            response.status(500).send({error: err});
        });
    }
};

exports.getSingle = (request, response, next) => {
    var lat = parseFloat(request.query.lat);
    var lng = parseFloat(request.query.lon);
    var attr = ['id', 'name', 'price', 'description', 'photos', 'created_at', 'views', 'status', 'latitude', 'longitude', 'userId'];
    var location = sequelize.literal(`ST_GeomFromText('POINT(${lng} ${lat})')`);
    var distance = sequelize.fn('ST_Distance_Sphere', sequelize.fn('Point', sequelize.col('longitude'), 
        sequelize.col('latitude')), location);
    if (lat && lng)
        attr.push([distance,'distance']);
    Goods.findByPk(request.params["id"], {attributes: attr, include: [Users]}).then(result => {
        if (result.count == 0) {
            response.status(404).send({error: 'Ничего не найдено!'});
            return;
        }
        let login;
        if (request.user) {
            login = true;
        }
        else {
            login = false;
        }
        response.json( { login, 'goods': [[result]] } );
    }).catch(err => {
        response.status(500).send({error: err});
    });
};

exports.getByNick = (request, response, next) => {
    //if (request.user.nickname === request.params["nick"]) {
        var lat = parseFloat(request.query.lat);
        var lng = parseFloat(request.query.lon);
        var attr = ['id', 'name', 'price', 'description', 'photos', 'created_at', 'views', 'status', 'latitude', 'longitude', 'userId'];
        var location = sequelize.literal(`ST_GeomFromText('POINT(${lng} ${lat})')`);
        var distance = sequelize.fn('ST_Distance_Sphere', sequelize.fn('Point', sequelize.col('longitude'), 
            sequelize.col('latitude')), location);
        if (lat && lng)
            attr.push([distance,'distance']);
        Goods.findAndCountAll({
            order: [['id', 'DESC']],
            limit: pageSize / 2,
            offset: Number(request.query.since * (pageSize / 2)),
            where: sequelize.literal(`status='active' and userId = (select id from users where nickname='${request.params["nick"]}')`),
            attributes: attr
        }).then(result => {
            if (result.count == 0) {
                response.status(404).send({error: 'Данный пользователь не публиковал товаров'});
                return;
            }
            response.json( { 'goods': [result], 'authorized': request.user?.nickname === request.params["nick"] } );
        }).catch(err => {
            console.log(err);
            response.status(500).send({error: err});
        });
    /*}
    else {
        response.status(401).send({error: "Not authorized"});
    }*/
};

exports.create = async (request, response, next) => {
    if (request.user) {
        /*if (request.body.images.length === 0) {
            response.status(422).send();
            return;
        }
        for (let i = 0; i < request.body.images.length; i++) {
            if (request.files.images[i].name.split('.').pop() !== 'png' &&
                request.files.images[i].name.split('.').pop() !== 'jpg' &&
                request.files.images[i].name.split('.').pop() !== 'jpeg') {
                response.status(422).send();
                return;
            }
        }*/
        //multi_upload(request, response, function (err) {
            /*if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
                response.status(500).send({ error: { message: `Multer uploading error: ${err.message}` } }).end();
                return;
            } else if (err) {
                // An unknown error occurred when uploading.
                if (err.name == 'ExtensionError') {
                    response.status(413).send({ error: { message: err.message } }).end();
                } else {
                    response.status(500).send({ error: { message: `unknown uploading error: ${err.message}` } }).end();
                }
                return;
            }*/

            //request.files.forEach(image => sharp(image.path).jpeg({quality: 80}).toFile(image.path, (err, info) => {response.status(500).send({err, info})}));
    
            // Everything went fine.
            // show file `req.files`
            // show body `req.body`
            //res.status(200).end('Your files uploaded.');
            let paths = request.files.length ? request.files.map(image => request.user.nickname + '/' + genSalt() + '-' + Date.now() + '.jpg') : ['empty.png'];
            Goods.create({
                name: request.body.name.slice(0,64),
                description: request.body.description.slice(0,128),
                price: request.body.price === "" ? undefined : request.body.price.replace(/\s+/g, '').replace(',', '.'),
                latitude: request.body.latitude !== "" ? request.body.latitude : undefined,
                longitude: request.body.longitude !== "" ? request.body.longitude : undefined,
                userId: request.user.id,
                photos: paths
            }).then(result => {
                /*for (let i = 0; i < request.body.images.length; i++) {
                    request.files.images[i].mv('public/avatars/' + request.user.nickname + '/' + result.id + '/' + i + '.' + request.files.images[i].name.split('.').pop());
                }*/
                /*Goods.update({
                    
                }, {
                    where: {
                        id: result.id
                    }
                });*/
                let conn = DB.createConn();
                conn.query("INSERT INTO categories(type_id, goods_id) VALUES (?, ?);",
                    [request.body.cat, result.id],
                    (err, results, fields) => {
                        if (err) {
                            console.log(err);
                        }
                    });
                response.status(200).redirect("/goods/" + result.id);
            }).catch(err => {
                response.status(500).send({error: err.message});
            });

            console.log(request.file);
            //console.log(request.file.originalname.match(/\..*$/)[0]);
            //const path = `${'./public/goods_photos/' + request.user.nickname + '.jpg'}`;

            console.log(1);
            // toFile() method stores the image on disk
            if (request.files.length) {
                fs.mkdir(path.join(__dirname, '../../../public/goods_photos/' + request.user.nickname), (err) => { 
                    if (err) { 
                        return console.error(err); 
                    } 
                    console.log('Directory created successfully!'); 
                });
                await paths.forEach((path, index) => sharp(request.files[index].buffer).resize(300,300).jpeg({quality: 50}).toFile('./public/goods_photos/' + path));
            }
            //next();

            console.log(2);
        //});
    }
    else {
        response.status(401).send({error: "Not authorized"});
    }
};

exports.mark = (request, response, next) => {
    multi_upload(request, response, function (err) {
        console.log(request.body);
        Goods.findByPk(request.params["id"]).then(result => {
            if (result.count === 0) {
                response.status(404).send({error: 'Товара с таким id не существует!'});
                return;
            }
            if (request.user.id === result.userId) {
                let conn = DB.createConn();
                //console.log(request.body);
                //console.log("UPDATE goods SET status='" + request.body.status + "' WHERE id=" + request.params["id"] + ";");
                conn.query("UPDATE goods SET status=? WHERE id=?;",
                    [request.body.status, request.params["id"]],
                    (err, results, fields) => {
                        if (err) {
                            console.log(err);
                        }
                    });
            }
            else {
                response.status(401).send({error: "Not authorized!"});
                return;
            }
            console.log(request.body);
            response.status(200).redirect("/user/" + request.user.nickname);//.send("ok");
        }).catch(err => {
            response.status(500).send({error: err});
        });
    });
};