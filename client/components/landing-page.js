import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const LandingPage = () => {
  return (
    <div>
      <h3>Landing Page</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(LandingPage)

/**
 * PROP TYPES
 */
LandingPage.propTypes = {
}
