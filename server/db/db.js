// Change the url to match your DB

const Sequelize = require('sequelize')
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/spotmev2', {
    logging: false
  }
)
module.exports = db
