const Sequelize = require('sequelize')
const db = require('../db')

module.exports = db.define('message', {
    body: Sequelize.TEXT,
})