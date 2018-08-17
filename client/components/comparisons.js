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

class Comparisons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      savedComparisons: []
    }
  }
  render() {
    return (
      <Wrapper>
        {/* map through saved comparisons */}
        <SavedComparisons />
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


export default connect(mapState, mapDispatch)(Comparisons)
