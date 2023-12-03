const { Sequelize } = require('sequelize');
const GoodsModel = require('../models/goods');
const CategoriesModel = require('../models/categories');
const UsersModel = require('../models/users');
const SubscriptionsModel = require('../models/subscriptions');
const FavoritesModel = require('../models/favorites');
const CommentsModel = require('../models/comments');

const sequelize = new Sequelize('fartsa', 'fartsa', 'S$PD5TsU@ke8JEhT~J9M', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

const Goods = GoodsModel(sequelize);
const Categories = CategoriesModel(sequelize);
const Users = UsersModel(sequelize);
const Subscriptions = SubscriptionsModel(sequelize);
const Favorites = FavoritesModel(sequelize);
const Comments = CommentsModel(sequelize);

//Users.hasOne(Goods);
//Goods.belongsTo(Users);

Goods.belongsTo(Users)
Subscriptions.belongsTo(Users)
Favorites.belongsTo(Users)
Favorites.belongsTo(Goods)
Comments.belongsTo(Users)
Comments.belongsTo(Goods)

module.exports = { Goods, Categories, Users, Subscriptions, Favorites, Comments };