const Sequelize = require('sequelize')
const db = require('../db')

const Education = db.define('education', {
  educationRating: {
    type: Sequelize.INTEGER
  },
})

module.exports = Education
