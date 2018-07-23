'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  max-width: 80em;
  margin: auto;
  padding: 5px 0;
`

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCard: {},
      cardsToCompare: []
    }
  }
  render() {

    console.log("getting to dashboard")
    return (
      <Wrapper>
        {/* comparison cards will be mapped through and displayed on left */}
        <ComparisonCard />
        {/* data viz goes in StatSpace; might want to make this card a child of Comparison space */}
        <StatSpace />
        {/* ComparisonSpace is where our table is */}
        <ComparisonSpace cardsToCompare={this.state.cardsToCompare} />
      </Wrapper>

    )
  }
}

const mapState = (state) => {
  return (
    {}
  )
}

const mapDispatch = (dispatch) => {
  return (
    {}
  )
}


export default connect(mapState, mapDispatch)(Dashboard)