const Sequelize = require('sequelize')
const db = require('./db')

const Item = db.define('item', {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.DECIMAL,
  pictureUrl: Sequelize.STRING
})

module.exports = Item;