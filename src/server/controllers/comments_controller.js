const { Comments, Users } = require("../db/sequelize");
const multer = require('multer');


const pageSize = 2;

var upload = multer({ dest: null }).single(null);

exports.get = (request, response, next) => {
    Comments.findAndCountAll({
        where: {
            goodId: request.params["id"]
        },
        order: [['id', 'DESC']],
        limit: pageSize,
        offset: Number(request.query.since * pageSize),
        include: [Users],
    }).then(result => {
        if (result.count == 0) {
            response.status(404).send({error: 'Комментариев пока нет...'});
            return;
        }
        response.json( { 'comments': [result] } );
    }).catch(err => {
        response.status(500).send({error: err});
    });
};

exports.post = (request, response, next) => {
    upload(request, response, function (err) {
        if (request.user) {
            Comments.create({userId: request.user.id, goodId: request.params["id"], text: request.body.text}).then(result => {
                response.status(200).redirect("/goods/" + request.params["id"]);
            }).catch(err => {
                response.status(500).send({error: err.message});
            });
        }
        else {
            response.status(401).send({error: "Not authorized"});
        }
    });
};