'use strict'

import React from 'react'
import {
  Wrapper,
  Nav,
  LogoLink,
  NavLink,
  NavRight,
  Thumbnail
} from './navbar-style'

const Navbar = () => {
  return (

    <Wrapper>

      <LogoLink to='/'>
        <Thumbnail src='https://comps.canstockphoto.com/sextant-illustration_csp36700221.jpg' />
      </LogoLink>
      <Nav>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/comparisons'>Comparisons</NavLink>
        <NavLink to='/map'>Map</NavLink>
      </Nav>
      <NavRight>
        <NavLink to='login'>Login</NavLink>
      </NavRight>

    </Wrapper>
  )
}





export default Navbar
