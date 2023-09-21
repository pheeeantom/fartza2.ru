const { Op } = require('sequelize');
const { request } = require('express');
const { Users } = require('../db/sequelize');
const { Subscriptions } = require('../db/sequelize');
const { Favorites } = require('../db/sequelize');
const { Goods } = require('../db/sequelize');
const req = require('express/lib/request');
const DB = require('../lib/db2');

const pageSize = 4;

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
    Subscriptions.create({ from_id: request.user.id, userId: request.params["id"] }).then(result => {
        response.status(200).send("ok");
    }).catch(err => {
        response.status(500).send({error: err.message});
    });
};

exports.unsubscribe = (request, response, next) => {
    Subscriptions.destroy({where: {[Op.and]: [{ from_id: request.user.id, userId: request.params["id"] }]}}).then(result => {
        response.status(200).send("ok");
    }).catch(err => {
        response.status(500).send({error: err.message});
    });
};

exports.subscriptions = (request, response, next) => {
    Subscriptions.findAll({where: { from_id: request.user.id }, include: [Users]}).then(result => {
        /*if (result.length == 0) {
            response.status(404).send({error: 'Подписок у вошедшего пользователя нет!'});
            return;
        }*/
        response.json( { 'subscriptions': [[result]] } );
    }).catch(err => {
        response.status(500).send({error: err});
    });
};

exports.addToFavorites = (request, response, next) => {
    Favorites.create({ userId: request.user.id, goodId: request.params["id"] }).then(result => {
        response.status(200).send("ok");
    }).catch(err => {
        response.status(500).send({error: err.message});
    });
};

exports.removeFromFavorites = (request, response, next) => {
    Favorites.destroy({where: {[Op.and]: [{ userId: request.user.id, goodId: request.params["id"] }]}}).then(result => {
        response.status(200).send("ok");
    }).catch(err => {
        response.status(500).send({error: err.message});
    });
};

exports.favorites = (request, response, next) => {
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
};

exports.isFavorite = (request, response, next) => {
    Favorites.findAll({where: {[Op.and]: [{ userId: request.user.id, goodId: request.params["id"] }]}}).then(result => {
        if (result.length == 0) {
            response.json( { 'isFavorite': false } );
            return;
        }
        response.json( { 'isFavorite': true } );
    }).catch(err => {
        response.status(500).send({error: err});
    });
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
                conn.query("UPDATE users SET password_hash='" + password_hash + "', salt='" + salt + "' WHERE id='" + request.params["id"] + "';",
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
        request.files?.photo.mv('public/avatars/' + request.user.nickname + '.' + request.files.photo.name.split('.').pop());
        //console.log(salt);
        //console.log(password_hash);
        Users.update({
                name: request.body.name,
                surname: request.body.surname,
                avatar: request.files ? request.user.nickname + '.' + request.files.photo.name.split('.').pop() : undefined,
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
    }
    else {
        response.status(401).send({error: "Not authorized"});
    }
};

/*exports.update = (request, response, login, next) => {
    Users.update({ lastName: "Doe" }, {
        where: {
            lastName: null,
        },
    });
};*/