'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Map } from '.'

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 80em;
  height: 100vh;
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
    return (
      <Wrapper>
        <Map />
        {/* <SliderSpace /> */}
        {/* <NeightborhoodSpace /> */}
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
