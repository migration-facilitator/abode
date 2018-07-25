import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'


class UserSettings extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  const handleSubmit = () => {
    //dispatch the thunks here or whatever and add bullshit to state
  }

  render() {
    return (
      <form onSubmit={handleSubmit()}>
        <label></label>
      </form>
    )
  }
}

const mapState = state => {
  return {

  }
}

const mapDispatch = dispatch => {
  return {

  }
}

export default connect(mapState, mapDispatch)(UserSettings)