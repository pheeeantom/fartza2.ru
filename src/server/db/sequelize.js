const { Sequelize } = require('sequelize');
const GoodsModel = require('../models/goods');
const CategoriesModel = require('../models/categories');
const UsersModel = require('../models/users');

const sequelize = new Sequelize('fartsa', 'fartsa', 'S$PD5TsU@ke8JEhT~J9M', {
    host: 'localhost',
    dialect: 'mysql'
});

const Goods = GoodsModel(sequelize);
const Categories = CategoriesModel(sequelize);
const Users = UsersModel(sequelize);

//Users.hasOne(Goods);
//Goods.belongsTo(Users);

Goods.belongsTo(Users)

module.exports = { Goods, Categories, Users };