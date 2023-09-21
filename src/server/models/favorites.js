const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('favorites', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: 'users',
            referencesKey: 'id'
        },
        goodId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: 'goods',
            referencesKey: 'id'
        }
    }, {
        timestamps: false
    });
}