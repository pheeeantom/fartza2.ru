const { Op } = require('sequelize');
const { Goods } = require('../db/sequelize');
const { Users } = require('../db/sequelize');
const sequelize = require('sequelize');

const pageSize = 4;

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
            order: lat && lng ? [sequelize.fn('isnull', sequelize.col('distance')),
                [!request.query.sort || request.query.sort == 'new' || request.query.sort == 'subscriptions' ? 'id'
                    : request.query.sort == 'distance' ? 'distance'
                    : 'views', request.query.sort == 'distance' ? 'ASC' : 'DESC']]
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
            if (result.length == 0) {
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
            order: lat && lng ? [sequelize.fn('isnull', sequelize.col('distance')),
                [!request.query.sort || request.query.sort == 'new' ? 'id' : request.query.sort == 'distance' ? 'distance'
                    : 'views', request.query.sort == 'distance' ? 'ASC' : 'DESC']]
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
        where: sequelize.literal(`userId = (select id from users where nickname='${request.params["nick"]}')`),
        attributes: attr
    }).then(result => {
        if (result.count == 0) {
            response.status(404).send({error: 'Данный пользователь не публиковал товаров'});
            return;
        }
        response.json( { 'goods': [result] } );
    }).catch(err => {
        response.status(500).send({error: err});
    });
};
