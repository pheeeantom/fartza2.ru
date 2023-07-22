const { Categories } = require('../db/sequelize');

exports.getAll = (request, response, next) => {
    Categories.findAll().then(result => {
        if (result.length == 0) {
            response.status(404).send({error: 'Ничего не найдено!'});
            return;
        }
        response.json( { 'categories': [[result]] } );
    }).catch(err => {
        response.status(500).send({error: err});
    });
};
