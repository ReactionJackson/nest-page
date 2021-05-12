import React from 'react'
import styled from 'styled-components'
import ContentBlock from './ContentBlock'
import { colors } from '../constants'
import { media } from '../utils'

const CopySection = props => (
  <Container>
    <ContentBlock { ...props } />
  </Container>
)

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 20px;
  margin-bottom: 20px;
  background-color: ${ colors.greyPale };
  ${ media(1100, `padding: 50px 20px`) }
`

export default CopySection
