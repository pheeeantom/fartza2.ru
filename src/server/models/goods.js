const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('goods', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(127),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(15, 2)
        },
        description: {
            type: DataTypes.TEXT
        },
        photos: {
            type: DataTypes.JSON
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        views: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        status: {
            type: DataTypes.ENUM('active', 'deleted', 'blocked','sold'),
            defaultValue: 'active',
            allowNull: false
        },
        latitude: {
            type: DataTypes.FLOAT
        },
        longitude: {
            type: DataTypes.FLOAT
        },
        userId: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: 'users',
            referencesKey: 'id'
        }
    }, {
        timestamps: false,
        /*classMethods: {
            associate: function ( models ) {
                goods.belongsTo(models.users, {foreignKey: user_id})
            }
        }*/
    });
}