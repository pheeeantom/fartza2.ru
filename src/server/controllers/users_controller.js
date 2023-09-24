const { Op } = require('sequelize');
const { request } = require('express');
const { Users } = require('../db/sequelize');
const { Subscriptions } = require('../db/sequelize');
const { Favorites } = require('../db/sequelize');
const { Goods } = require('../db/sequelize');
const req = require('express/lib/request');
const DB = require('../lib/db2');

const multer = require('multer');
const path = require('path');

const pageSize = 4;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../../public/avatars/'))
    },
    filename: function (req, file, cb) {
        cb(null, req.user.nickname + file.originalname.match(/\..*$/)[0])
    }
});

const multi_upload = multer({
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
}).single("photo")

exports.getSingle = (request, response, login, next) => {
    Users.findOne({where: {nickname: request.params["nick"]}}).then(result => {
        if (result.length == 0) {
            response.status(404).send({error: 'Ничего не найдено!'});
            return;
        }
        response.json( { login, 'user': [[result]] } );
    }).catch(err => {
        response.status(500).send({error: err});
    });
};

exports.subscribe = (request, response, next) => {
    if (request.user) {
        Subscriptions.create({ from_id: request.user.id, userId: request.params["id"] }).then(result => {
            response.status(200).send("ok");
        }).catch(err => {
            response.status(500).send({error: err.message});
        });
    }
    else {
        response.status(401).send({error: "Not authorized"});
    }
};
    

exports.unsubscribe = (request, response, next) => {
    if (request.user) {
        Subscriptions.destroy({where: {[Op.and]: [{ from_id: request.user.id, userId: request.params["id"] }]}}).then(result => {
            response.status(200).send("ok");
        }).catch(err => {
            response.status(500).send({error: err.message});
        });
    }
    else {
        response.status(401).send({error: "Not authorized"});
    }
};

exports.subscriptions = (request, response, next) => {
    if (request.user) {
        Subscriptions.findAll({where: { from_id: request.user.id }, include: [Users]}).then(result => {
            /*if (result.length == 0) {
                response.status(404).send({error: 'Подписок у вошедшего пользователя нет!'});
                return;
            }*/
            response.json( { 'subscriptions': [[result]] } );
        }).catch(err => {
            response.status(500).send({error: err});
        });
    }
    else {
        response.status(401).send({error: "Not authorized"});
    }
};

exports.addToFavorites = (request, response, next) => {
    if (request.user) {
        Favorites.create({ userId: request.user.id, goodId: request.params["id"] }).then(result => {
            response.status(200).send("ok");
        }).catch(err => {
            response.status(500).send({error: err.message});
        });
    }
    else {
        response.status(401).send({error: "Not authorized"});
    }
};

exports.removeFromFavorites = (request, response, next) => {
    if (request.user) {
        Favorites.destroy({where: {[Op.and]: [{ userId: request.user.id, goodId: request.params["id"] }]}}).then(result => {
            response.status(200).send("ok");
        }).catch(err => {
            response.status(500).send({error: err.message});
        });
    }
    else {
        response.status(401).send({error: "Not authorized"});
    }
};

exports.favorites = (request, response, next) => {
    if (request.user) {
        Favorites.findAndCountAll({where: { userId: request.user.id }, limit: pageSize,
            offset: Number(request.query.since * pageSize), include: [Users, Goods]}).then(result => {
            /*if (result.length == 0) {
                response.status(404).send({error: 'Подписок у вошедшего пользователя нет!'});
                return;
            }*/
            response.json( { 'favorites': [[result]] } );
        }).catch(err => {
            response.status(500).send({error: err});
        });
    }
    else {
        response.status(401).send({error: "Not authorized"});
    }
};

exports.isFavorite = (request, response, next) => {
    if (request.user) {
        Favorites.findAll({where: {[Op.and]: [{ userId: request.user.id, goodId: request.params["id"] }]}}).then(result => {
            if (result.length == 0) {
                response.json( { 'isFavorite': false } );
                return;
            }
            response.json( { 'isFavorite': true } );
        }).catch(err => {
            response.status(500).send({error: err});
        });
    }
    else {
        response.status(401).send({error: "Not authorized"});
    }
};

exports.edit = (request, response, next) => {
    //console.log(request.body.birthday === "" ? 1 : 0);
    if (request.user.id == request.params["id"]) {
        let salt;
        let password_hash;
        if (request.body.pass) {
            if (request.body.pass.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}$/)) {
                var result           = '';
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for ( var i = 0; i < 20; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                salt = result;
                password_hash = require('crypto').createHash('sha256').update(request.body.pass + salt).digest("hex");
                let conn = DB.createConn();
                conn.query("UPDATE users SET password_hash=?, salt=? WHERE id=?;",
                    [password_hash, salt, request.params["id"]],
                    (err, results, fields) => {
                        if (err) {
                            console.log(err);
                        }
                    });
            }
            else {
                response.status(422).send({error: "Not valid password"});
                return;
            }
        }
        /*let valid = true;
        if (request.files.photo.name.split('.').pop() === 'png' ||
            request.files.photo.name.split('.').pop() === 'jpg' ||
            request.files.photo.name.split('.').pop() === 'jpeg') {
            request.files?.photo.mv('public/avatars/' + request.user.nickname + '.' + request.files.photo.name.split('.').pop());
        }
        else {
            valid = false;
        }*/
        //console.log(salt);
        //console.log(password_hash);
        multi_upload(request, response, function (err) {
            if (err instanceof multer.MulterError) {
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
            }
            Users.update({
                    name: request.body.name,
                    surname: request.body.surname,
                    avatar: request.file && request.file.filename ? request.file.filename : undefined,//request.files && valid ? request.user.nickname + '.' + request.files.photo.name.split('.').pop() : undefined,
                    about: request.body.about,
                    city: request.body.city,
                    birthday: request.body.birthday === "" ? undefined : request.body.birthday,
                    //salt,
                    //password_hash
                }, {
                where: {
                    id: request.params["id"]
                },
            }).then(result => {
                response.status(200).redirect("/user/" + request.user.nickname);//.send("ok");
            }).catch(err => {
                response.status(500).send({error: err.message});
            });
        });
    }
    else {
        response.status(401).send({error: "Not authorized"});
    }
};

exports.currentUser = (request, response, next) => {
    if (request.user) {
        Users.findOne({ where: {id: request.user.id} }).then(result => {
            response.status(200).send({user: result});
        }).catch(err => {
            response.status(500).send({error: err.message});
        });
    }
    else {
        response.status(401).send({error: 'Not authorized'});
    }
};

/*exports.update = (request, response, login, next) => {
    Users.update({ lastName: "Doe" }, {
        where: {
            lastName: null,
        },
    });
};*/