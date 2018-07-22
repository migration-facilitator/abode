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
const Title = styled.a`
  padding-left: 10px;
  color: white;
  font-size: 2em;
  font-weight: bold;
  display: flex;
  align-items: center;
  white-space: nowrap;
`

const Nav = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
`

const NavItem = styled.a`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`
const NavRight = styled.div`
  display: flex;
  justify-content: flex-end;
`

const NavLeft = styled.div`
  display:flex
`


class NavBar extends Component {
  state = {}
  render() {
    <Wrapper>
      <Title>
        <Nav>
          <NavItem>

          </NavItem>
        </Nav>
    </Wrapper>
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


export default connect(mapState, mapDispatch)(NavBar)