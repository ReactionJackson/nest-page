import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import RadioSwitcher from './RadioSwitcher'
import { useListener } from '../hooks/useListener'
import { colors, sizes, animations } from '../constants'

const StickyNav = ({ changePage = () => {} }) => {

  const [ isSticky, setIsSticky ] = useState(false)

  useListener('scroll', _ => {
    setIsSticky(window.scrollY > sizes.subNavHeight)
  }, [])

  return (
    <Container isSticky={ isSticky }>
      <Content>
        <Title>Nest Learning Thermostat</Title>
        <RadioSwitcher changePage={ changePage } />
      </Content>
      <Content>
        <Pricing>
          From £219 or £9.13/mo for 24 months
          <Apr>with 0% APR*</Apr>
        </Pricing>
        <Button>Buy</Button>
      </Content>
    </Container>
  )
}

const Container = styled.nav`
  z-index: 1000;
  position: ${ ({ isSticky }) => isSticky ? 'fixed' : 'absolute' };
  top: ${ ({ isSticky }) => isSticky ? 0 : '60px' };
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${ sizes.navHeight }px;
  padding: 0 30px;
  border-bottom: 1px solid ${ colors.greyBorder };
  background: ${ colors.white };
`

const Content = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.span`
  font-size: 25px;
  font-weight: 700;
  display: inline-block;
  margin-right: 30px;
`

const Button = styled.a`
  color: ${ colors.white };
  font-size: 22px;
  line-height: 22px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 56px;
  border-radius: 4px;
  background-color: ${ colors.blue };
  cursor: pointer;
  user-select: none;
  transition: background-color ease 450ms;
  &:hover {
    animation: ${ animations.pulse } 2000ms ease infinite;
    background-color: ${ colors.blueBright };
  }
`

const Pricing = styled.p`
  color: ${ colors.greyDark };
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  margin-right: 30px;
`

const Apr = styled.span`
  display: block;
  font-size: 12px;
  line-height: 12px;
`

export default StickyNav
