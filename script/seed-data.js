const usersData = [
  {
    name: 'Lamine',
    email: 'lamine@email.com',
    password: '1234',
    address: '1110 W Wolfram St',
    city: 'Chicago',
    state: 'IL',
    zipcode: 60657,
    salary: 60000,
  },
  {
    name: 'Andrew',
    email: 'andrew@email.com',
    password: '1234',
    address: '1 Great America Parkway',
    city: 'Gurnee',
    state: 'IL',
    zipcode: 60031,
    salary: 60000,
  }
]

const comparisonsData = [
  {
    homeAddress: '405 W Superior St',
    homeCity: 'Chicago',
    homeState: 'IL',
    homeZipcode: 60654,
    workAddress: '233 S Wacker Dr',
    workCity: 'Chicago',
    workState: 'IL',
    workZipcode: 60606,
    radius: 5,
    educationWeight: 5,
    transitWeight: 2,
    costOfLivingWeight: 4,
    userId: 1,
  },
  {
    homeAddress: '1060 W Addison St',
    homeCity: 'Chicago',
    homeState: 'IL',
    homeZipcode: 60613,
    workAddress: '2323 N Milwaukee Ave',
    workCity: 'Chicago',
    workState: 'IL',
    workZipcode: 60647,
    radius: 5,
    educationWeight: 1,
    transitWeight: 4,
    costOfLivingWeight: 3,
    userId: 2,
  },
  {
    homeAddress: '1060 W Addison St',
    homeCity: 'Chicago',
    homeState: 'IL',
    homeZipcode: 60613,
    workAddress: '2323 N Milwaukee Ave',
    workCity: 'Chicago',
    workState: 'IL',
    workZipcode: 60647,
    radius: 5,
    educationWeight: 1,
    transitWeight: 4,
    costOfLivingWeight: 3,
    userId: 1,
  },
]

const costOfLivingData = [
  { homeCost: 364620, rentalCost: 1768, utilityCost: 138, propertyTax: 281, salesTax: 1378, consumerPriceMetric: 8, comparisonId: 1 },
  { homeCost: 359992, rentalCost: 1676, utilityCost: 186, propertyTax: 237, salesTax: 1051, consumerPriceMetric: 1, comparisonId: 1 },
  { homeCost: 945521, rentalCost: 1235, utilityCost: 186, propertyTax: 252, salesTax: 1049, consumerPriceMetric: 1, comparisonId: 3 },
  { homeCost: 1390723, rentalCost: 1545, utilityCost: 168, propertyTax: 133, salesTax: 929, consumerPriceMetric: 10, comparisonId: 2 }
]

const educationData = [
  {
    educationRating: 2,
    comparisonId: 1
  },
  {
    educationRating: 5,
    comparisonId: 2
  },
  {
    educationRating: 2,
    comparisonId: 3
  },
  {
    educationRating: 1,
    comparisonId: 1
  },
]

const transitData = [
  { "timeAvgCar": 48, "timeAvgRideshare": 24, "timeAvgPublicTransit": 44, "timeRHCar": 113, "timeRHRideshare": 88, "timeRHPublicTransit": 50, "gasPrice": 375, "costRideshare": 32, "costPublicTransit": 1, "comparisonId": 1 },
  { "timeAvgCar": 38, "timeAvgRideshare": 28, "timeAvgPublicTransit": 58, "timeRHCar": 13, "timeRHRideshare": 42, "timeRHPublicTransit": 20, "gasPrice": 381, "costRideshare": 41, "costPublicTransit": 8, "comparisonId": 2 },
  { "timeAvgCar": 35, "timeAvgRideshare": 20, "timeAvgPublicTransit": 73, "timeRHCar": 56, "timeRHRideshare": 24, "timeRHPublicTransit": 12, "gasPrice": 340, "costRideshare": 21, "costPublicTransit": 3, "comparisonId": 3 },
  { "timeAvgCar": 40, "timeAvgRideshare": 20, "timeAvgPublicTransit": 16, "timeRHCar": 16, "timeRHRideshare": 81, "timeRHPublicTransit": 81, "gasPrice": 298, "costRideshare": 22, "costPublicTransit": 7, "comparisonId": 1 }
]

module.exports = {
  usersData,
  comparisonsData,
  costOfLivingData,
  educationData,
  transitData,
}
