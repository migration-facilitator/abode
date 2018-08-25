import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../color-palette';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction:row;
  background-color: ${colors.dark};
  width: 100%;
  height: 4em;
  padding: 5px;
`

export const Nav = styled.div`
  display: flex;
  position: relative;
  left:1em;
  right:1em;
  flex-direction:row;
  justify-content:flex-start;
  width: 100%;
`

export const LogoLink = styled(Link)`
  display:inline-block;
  height:100%;
  width:10%;
  `
export const NavLink = styled(Link)`
  display:flex;
  flex-direction:row;
  align-items:center;
  height:100%;
  padding:0 1em 0 0;
  background-color:${colors.dark};

`
export const NavRight = styled.div`
  display: flex;
  left:100px;
  justify-content: flex-end;
`

export const Thumbnail = styled.img`
  max-height: 100%;
`
