const Sequelize = require('sequelize');

module.exports.UserDbModel = ["users", {
    i_user: {
        type: Sequelize.INTEGER,
        groupautoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    i_card: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}];
