import React from 'react'
import styled from 'styled-components'
import ContentBlock from './ContentBlock'
import { media } from '../utils'

const SafetySection = () => (
  <Container>
    <Content>
      <ContentBlock
        title="Know that your home is safe."
        body="What if it gets so cold that your boiler can’t keep up? Get an alert on your phone if your pipes could burst."
        cta={{ href: '#', label: 'Learn more' }}
        theme="dark"
        narrow
      />
    </Content>
  </Container>
)

const Container = styled.section`
  position: relative;
  height: 150vh;
  background: url(${ require('../assets/img/safety.webp').default }) center no-repeat;
  background-size: cover;
  margin-bottom: 20px;
`

const Content = styled.div`
  padding: 80px 40px 0 40px;
  ${ media(1100, `padding-top: 50px;`) }
`

export default SafetySection
