const router = require('express').Router()
const axios = require('axios')
const { zillowApiKey } = require('../../secrets')
module.exports = router

router.get('/neighborhood', async (req, res, next) => {
  try {
    const data = await axios.get(`http://www.zillow.com/webservice/GetRegionChildren.htm?zws-id=${zillowApiKey}&state=il&city=chicago&childtype=neighborhood`)
    //data comes back as an xml doc
    res.json(data)
  } catch (err) {
    next(err)
  }
})
