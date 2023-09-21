const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('subscriptions', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        from_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: 'users',
            referencesKey: 'id'
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: 'users',
            referencesKey: 'id'
        }
    }, {
        timestamps: false
    });
}