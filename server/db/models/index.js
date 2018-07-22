const User = require('./user')
const Comparison = require('./comparison')
const CostOfLiving = require('./cost-of-living')
const Transit = require('./transit')
const Education = require('./education')

Comparison.belongsTo(User)
User.hasMany(Comparison)

CostOfLiving.belongsTo(Comparison)
Comparison.hasOne(CostOfLiving)

Transit.belongsTo(Comparison)
Comparison.hasOne(Transit)

Education.belongsTo(Comparison)
Comparison.hasOne(Education)

module.exports = {
  User,
  Comparison,
  CostOfLiving,
  Transit,
  Education
}
