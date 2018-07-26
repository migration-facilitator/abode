import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { colors } from '../color-palette'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-flow: column;
  // justify-content: center;
  align-items: center;
  width: 80%;
  height: calc(100vh - 6em - 10px);
  max-width: 80em;
  margin: 0 auto 0 auto;
  padding: 1em;
`
const MainCard = styled.div`
  position: relative;
  width: 80%;
  background-color: ${colors.light};
  height: 20em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em auto 0 auto;
  padding: 1em;
`
const Title = styled.p`
  color: ${colors.accent};
  font-size: 5em;
  font-weight: bold;
  margin: 0;
  text-shadow: 3px 2px ${colors.dark}55;
`
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em auto 0 auto;
`
const Button = styled.button`
  margin: 0 .5em 0 .5em;
  border-radius: 1em;
  background-color: ${colors.accent};
  color: ${colors.dark};
  border: 0;
  padding: .8em 1em;
  font-weight: bold;
  font-size: 1em;
  box-shadow: 3px 8px 16px 0 ${colors.dark}55;
`
// position: relative,

export const LandingPage = () => {
  return (
    <Wrapper>
      <Title>
        Abode
      </Title>
      <MainCard>
        Making relocation easy!!!
      </MainCard>
      <ButtonDiv>
        <Button type='button' >
          Start Search
          </Button>
        <Button type='button' >
          Sign Up
          </Button>
      </ButtonDiv>
    </Wrapper>
  )
}

const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(LandingPage)
