import React from 'react'
import styled from 'styled-components'
import ContentBlock from './ContentBlock'
import { colors } from '../constants'

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
  background-color: ${ colors.greyPale };
`

export default CopySection
