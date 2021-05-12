import React from 'react'
import styled from 'styled-components'
import ContentBlock from './ContentBlock'

const SafetySection = () => (
  <Container>
    <div style={{ paddingTop: 80 }}>
      <ContentBlock
        title="Know that your home is safe."
        body="What if it gets so cold that your boiler can’t keep up? Get an alert on your phone if your pipes could burst."
        cta={{ href: '#', label: 'Learn more' }}
        theme="dark"
        narrow
      />
    </div>
  </Container>
)

const Container = styled.section`
  position: relative;
  height: 150vh;
  background: url(${ require('../assets/img/safety.webp').default }) center no-repeat;
  background-size: cover;
  margin-bottom: 20px;
`

export default SafetySection
