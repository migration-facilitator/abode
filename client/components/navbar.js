'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
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
    console.log("what is this window object", window)

    return (
      <Wrapper>
        <Nav>
          <NavLeft>
            <NavLink to='/'>
              <Thumbnail src='https://comps.canstockphoto.com/sextant-illustration_csp36700221.jpg'></Thumbnail>
            </NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            <NavLink to='/map'>Map</NavLink>
            <NavLink to='/comparisons'>Comparisons</NavLink>
          </NavLeft>
          <NavRight>
            <NavLink to='login'>Login</NavLink>
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