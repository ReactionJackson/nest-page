import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { colors } from '../constants'

const Hero = () => {

  const [ isRevealed, setIsRevealed ] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsRevealed(true), [ 500 ])
  }, [])

  return (
    <Container>
      <Content isRevealed={ isRevealed }>
        <SubTitle>Introducing</SubTitle>
        <Title>The Nest <em>Planet Protector*</em></Title>
        <Image
          loading="lazy"
          alt="Nest Learning Thermostat"
          src="https://lh3.googleusercontent.com/s6Q0rgP8FpF00Mq7NVb2fhZBvelQY1mqcm5EzoAe9XQGRon7Tw1fRK3sGBwSdH57xBxQ-zVUZN48VdUhPUMxaQ"
        />
        <Tagline>Save energy while staying comfortable.</Tagline>
        <Button color="blue">Get it now</Button>
      </Content>
    </Container>
  )
}

const Container = styled.section`
  height: calc(100vh - 150px);
  min-height: 650px;
  margin: 90px 0 20px 0;
  padding: 0 24px 24px 24px;
  background-color: ${ colors.greyPale }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 620px;
  height: 100%;
  padding: 100px 0;
  margin: 0 auto;
  text-align: center;
  opacity: ${ ({ isRevealed }) => isRevealed ? 1 : 0 };
  transform: scale(${ ({ isRevealed }) => isRevealed ? 1 : 0.95 });
  transition: opacity cubic-bezier(0.3,-0.03, 0, 1.04) 1200ms,
              transform cubic-bezier(0.3,-0.03, 0, 1.04) 1200ms;
`

const SubTitle = styled.h4`
  color: ${ colors.greyDark };
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.25;
  margin-bottom: 12px;
`

const Title = styled.h1`
  color: ${ colors.greyDark };
  font-size: 80px;
  font-weight: 900;
  line-height: 80px;
  letter-spacing: -4px;
  margin-bottom: 60px;
  em {
    display: block;
    font-style: none;
    color: ${ colors.blueDark };
  }
`

const Image = styled.img`
  width: 25vw;
  margin-bottom: 45px;
`

const Tagline = styled.p`
  color: ${ colors.greyDark };
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 20px;
`

export default Hero
