import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants'

const MenuItem = ({ href = '#', color = colors.grey, willExpand = false, reversed = false, children }) => (
  <Container reversed={ reversed }>
    <Item href={ href } color={ color }>
      { children }
      { willExpand && (
        <Chevron xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.011 512.011">
          <path fill="currentColor" d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
            s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
            C514.096,145.416,514.096,131.933,505.755,123.592z"/>
        </Chevron>
      )}
    </Item>
  </Container>
)

const Container = styled.li`
  ${ ({ reversed }) => reversed ? `margin-left: 23px;` : `margin-right: 20px;`};
`

const Item = styled.a`
  display: flex;
  color: ${ ({ color }) => color || colors.greyDark };
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;
  transition: color ease 150ms;
  &:hover {
    color: ${ colors.blue };
  }
`

const Chevron = styled.svg`
  width: 8px;
  margin: 2px 0 0 7px;
  transition: fill ease 150ms;
`

export default MenuItem
