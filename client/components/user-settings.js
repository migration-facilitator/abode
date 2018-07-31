import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'


class UserSettings extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleSubmit = (event) => {
    //dispatch the thunks here or whatever and add bullshit to state
  }

  handleChange = (event) => {
    console.log(this.state)
    this.setState({ [event.target.name]: event.target.value })

  }

  render() {
    console.log("getting here?")
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          {/* i need text inputs for Home and Work, Both require
            city state and zip code
        */}

          <label>Home</label>
          <label>Work</label>
          <label>Importance rankings</label>
          <label>Travel
          <input type='range' min='0' max='10' name='travel' />
          </label>
          <label>Cost Of Living
          <input type='range' min='0' max='10' name='costOfLiving' />
          </label>
          <label>Night Life
          <input type='range' min='0' max='10' name='nightLife' />
          </label>
          <label>Family Friendliness
          <input type='range' min='0' max='10' name='familyFriendliness' />
          </label>
          <label> Search Radius
          <input type='range' min='5' max='100' step='5' name='searchRadius' />
          </label>
        </form>
      </div>
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