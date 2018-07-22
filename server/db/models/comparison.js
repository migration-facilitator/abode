const Sequelize = require('sequelize')
const db = require('../db')

const Comparison = db.define('comparison', {
  home: {
    type: Sequelize.STRING,
    allowNull: false
  },
  work: {
    type: Sequelize.STRING,
    allowNull: false
  },
  radius: {
    type: Sequelize.INTEGER,
  },
  educationWeight: {
    type: Sequelize.INTEGER,
  },
  transitWeight: {
    type: Sequelize.INTEGER,
  },
  costOfLivingWeight: {
    type: Sequelize.INTEGER,
  },
})

module.exports = Comparison
