const { DataTypes } = require('sequelize')

const { db } = require('../../src/utils/database')

const Roles = db.define('role', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = Roles