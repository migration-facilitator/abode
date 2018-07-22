const Sequelize = require('sequelize')
const db = require('../db')

const Transit = db.define('transit', {
  timeAvgCar: {
    type: Sequelize.INTEGER
  },
  timeAvgRideshare: {
    type: Sequelize.INTEGER
  },
  timeAvgPublicTransit: {
    type: Sequelize.INTEGER
  },
  timeRHCar: {
    type: Sequelize.INTEGER
  },
  timeRHRideshare: {
    type: Sequelize.INTEGER
  },
  timeRHPublicTransit: {
    type: Sequelize.INTEGER
  },
  costCar: {
    type: Sequelize.INTEGER
  },
  costRideshare: {
    type: Sequelize.INTEGER
  },
  costPublicTransit: {
    type: Sequelize.INTEGER
  },
})

module.exports = Transit
