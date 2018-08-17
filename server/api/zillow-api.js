const router = require('express').Router()
const axios = require('axios')
const convert = require('xml-js')
module.exports = router

const zillowApiKey = process.env.ZILLOW_API_KEY

router.get('/neighborhood', async (req, res, next) => {
  try {
    console.log(zillowApiKey)
    const { data } = await axios.get(`http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=${zillowApiKey}&state=il&city=chicago&childtype=neighborhood`)
    //data comes back as an xml doc
    const jsonData = convert.xml2js(data, { compact: true, spaces: 0 })
    res.json(jsonData)
  } catch (err) {
    next(err)
  }
})
