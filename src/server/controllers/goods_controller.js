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
    if (request.query.sort) {
        Goods.findAndCountAll({
            where: {
                [Op.and]: [{
                    name: {
                        [Op.like]: '%' + request.query.word + '%'
                    },
                    status: 'active'
                }]
            },
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
    if (request.query.sort) {
        Goods.findAndCountAll({
            where: {
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
            },
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
    Goods.findByPk(request.params["id"]).then(result => {
        if (result.count == 0) {
            response.status(404).send({error: 'Ничего не найдено!'});
            return;
        }
        response.json( { 'goods': [[result]] } );
    }).catch(err => {
        response.status(500).send({error: err});
    });
};
