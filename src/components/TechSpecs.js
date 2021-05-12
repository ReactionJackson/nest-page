import React from 'react'
import styled from 'styled-components'
import ContentBlock from './ContentBlock'
import { colors, sizes } from '../constants'

const TechSpecs = () => (
  <Container>
    <ContentBlock
      title="This is the Tech Specs page"
      body="I've left this out in the interest of time."
      narrow
    />
  </Container>
)

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - ${ sizes.navHeight }px);
  min-height: 800px;
  padding-top: 90px;
  background-color: ${ colors.greyPale };
`

export default TechSpecs
