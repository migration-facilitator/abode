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

class MapView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentNeighborhood: {},
    }
  }
  render() {
    console.log("getting to mapview")
    return (
      <Wrapper>

        {/*Google maps ish goes here*/}
        <SliderSpace />
        <NeightborhoodSpace />
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


export default connect(mapState, mapDispatch)(MapView)