const { Users } = require('../db/sequelize');

exports.getSingle = (request, response, next) => {
    Users.findByPk(request.params["id"]).then(result => {
        if (result.length == 0) {
            response.status(404).send({error: 'Ничего не найдено!'});
            return;
        }
        response.json( { 'users': [[result]] } );
    }).catch(err => {
        response.status(500).send({error: err});
    });
};
