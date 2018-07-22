'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  background-color: #333;
  width: 100%;
  height: 4em;
  background-color: #000b43;
  padding: 5px 5px 0 5px;
`

const Nav = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
`
const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
`

const NavLeft = styled.div`
  display:flex

`
const Thumbnail = styled.img`
  display: flex;
  max-width: 15%;
  max-height: 100%;
`

class Navbar extends Component {
  state = {}
  render() {
    return (
      <Wrapper>
        <Nav>
          <NavLeft>
            <Link to='/'>
              <Thumbnail src='https://comps.canstockphoto.com/sextant-illustration_csp36700221.jpg'></Thumbnail>
            </Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/map'>Map</Link>
            <Link to='/comparisons'>Comparisons</Link>
          </NavLeft>
          <NavRight>
            <Link to='login'>Login</Link>
          </NavRight>

        </Nav>
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


export default connect(mapState, mapDispatch)(Navbar)