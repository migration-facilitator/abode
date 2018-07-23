'use strict'

const db = require('../server/db')
const {
  User,
  Comparison,
  CostOfLiving,
  Education,
  Transit,
} = require('../server/db/models')
const {
  usersData,
  comparisonsData,
  costOfLivingData,
  educationData,
  transitData,
} = require('./seed-data')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')
  // ~~~~~~~~~~~ USERS ~~~~~~~~~~~~~~
  const users = await Promise.all([
    User.create({ email: 'andrew@email.com', password: '123' }),
    User.create({ email: 'lamine@email.com', password: '123' })
  ])
  console.log(`seeded ${users.length} users`)

  // ~~~~~~~~~~~ COMPARISONS ~~~~~~~~~~~~~~
  await Promise.all(
    comparisonsData.map(item => {
      return Comparison.create(item)
    })
  )

  // ~~~~~~~~~~~ Metrics ~~~~~~~~~~~~~~
  await Promise.all(
    costOfLivingData.map(item => {
      return CostOfLiving.create(item)
    })
  )
  await Promise.all(
    educationData.map(item => {
      return Education.create(item)
    })
  )
  await Promise.all(
    transitData.map(item => {
      return Transit.create(item)
    })
  )

  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
