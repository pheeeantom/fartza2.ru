const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nickname: {
            type: DataTypes.STRING(63),
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING(127)
        },
        surname: {
            type: DataTypes.STRING(127)
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        role: {
            type: DataTypes.ENUM('user', 'moderator', 'admin'),
            defaultValue: 'active',
            allowNull: false
        },
        /*password_hash: {
            type: DataTypes.STRING(255),
            allowNull: false
        },*/
        created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(255)
        },
        about: {
            type: DataTypes.TEXT
        },
        city: {
            type: DataTypes.STRING(127)
        },
        birthday: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.ENUM('active', 'deleted', 'blocked'),
            defaultValue: 'active',
            allowNull: false
        },
        /*is_confirmed: {
            type: DataTypes.TINYINT(1),
            defaultValue: 0,
            allowNull: false
        },*/
        /*salt: {
            type: DataTypes.CHAR(20),
            allowNull: false
        },*/
        rating: {
            type: DataTypes.FLOAT
        },
        contacts: {
            type: DataTypes.JSON
        }
    }, {
        timestamps: false
    });
}