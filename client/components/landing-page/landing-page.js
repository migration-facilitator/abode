import React from 'react'
import { connect } from 'react-redux'
import {
  Wrapper,
  MainCard,
  Title,
  ButtonDiv,
  Button
} from './landing-page-style'


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
