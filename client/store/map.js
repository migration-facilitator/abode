import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_REGIONAL_DATA = 'GET_REGIONAL_DATA'

/**
 * INITIAL STATE
 */
const defaultMapData = {}

/**
 * ACTION CREATORS
 */
const getRegionData = regionData => ({ type: GET_REGIONAL_DATA, regionData })

/**
 * THUNK CREATORS
 */
export const getRegionDataThunk = () => async dispatch => {
  try {
    const res = await axios.get('/map/region')
    dispatch(getRegionData(res.data || defaultMapData))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function (state = defaultMapData, action) {
  switch (action.type) {
    case GET_REGIONAL_DATA:
      return action.regionData
    default:
      return state
  }
}
