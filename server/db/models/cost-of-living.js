const Sequelize = require('sequelize')
const db = require('../db')

const CostOfLiving = db.define('costOfLiving', {
  homeCost: {
    type: Sequelize.STRING
  },
  rentalCost: {
    type: Sequelize.STRING
  },
  utilityCost: {
    type: Sequelize.STRING
  },
  propertyTax: {
    type: Sequelize.STRING
  },
  salesTax: {
    type: Sequelize.STRING
  },
  consumerPriceMetric: {
    type: Sequelize.STRING
  },
})

module.exports = CostOfLiving
