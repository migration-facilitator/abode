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
// 
// {
// _declaration: {
//   _attributes: {
//     version: "1.0",
//       encoding: "utf-8"
//   }
// },
// RegionChildren: regionchildren: {
//   _attributes: {
//     xsi: schemaLocation: "http://www.zillow.com/static/xsd/RegionChildren.xsd https://www.zillowstatic.com/vstatic/b20c067/static/xsd/RegionChildren.xsd",
//       xmlns: xsi: "http://www.w3.org/2001/XMLSchema-instance",
//         xmlns: RegionChildren: "http://www.zillow.com/static/xsd/RegionChildren.xsd"
//   },
//   request: {
//     state: {
//       _text: "il"
//     },
//     city: {
//       _text: "chicago"
//     },
//     childtype: {
//       _text: "neighborhood"
//     }
//   },
//   message: {
//     text: {
//       _text: "Request successfully processed"
//     },
//     code: {
//       _text: "0"
//     }
//   },
//   response: {
//     region: {
//       id: {
//         _text: "17426"
//       },
//       latitude: {
//         _text: "41.833732"
//       },
//       longitude: {
//         _text: "-87.731965"
//       }
//     },
//     subregiontype: {
//       _text: "neighborhood"
//     },
//     list: {
//       count: {
//         _text: "223"
//       },
//       region: [
//         {
//           id: {
//             _text: "269592"
//           },
//           name: {
//             _text: "Logan Square"
//           },
//           zindex: {
//             _attributes: {
//               currency: "USD"
//             },
//             _text: "248700"
//           },
//           url: {
//             _text: "http://www.zillow.com/local-info/IL-Chicago/Logan-Square/r_269592/"
//           },
//           latitude: {
//             _text: "41.924549"
//           },
//           longitude: {
//             _text: "-87.707229"
//           }
//         },
//         {
//           id: {
//             _text: "403117"
//           },
//           name: {
//             _text: "Little Village"
//           },
//           zindex: {
//             _attributes: {
//               currency: "USD"
//             },
//             _text: "122700"
//           },
//           url: {
//             _text: "http://www.zillow.com/local-info/IL-Chicago/Little-Village/r_403117/"
//           },
//           latitude: {
//             _text: "41.838365"
//           },
//           longitude: {
//             _text: "-87.715089"
//           }
//         },
//         {
//           id: {
//             _text: "403169"
//           },
//           name: {
//             _text: "West Rogers Park"
//           },
//           zindex: {
//             _attributes: {
//               currency: "USD"
//             },
//             _text: "163300"
//           },
//           url: {
//             _text: "http://www.zillow.com/local-info/IL-Chicago/West-Rogers-Park/r_403169/"
//           },
//           latitude: {
//             _text: "42.002459"
//           },
//           longitude: {
//             _text: "-87.69657"
//           }
//         },
