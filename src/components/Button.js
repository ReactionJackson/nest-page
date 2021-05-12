import React from 'react'
import styled from 'styled-components'
import { colors } from '../constants'

const Button = ({ color = 'blue', children }) => (
  <Container color={ color }>
    <Label>{ children }</Label>
    <Fill color={ color } />
  </Container>  
)

const Container = styled.a`
  display: inline-block;
  height: 42px;
  z-index: 0;
  position: relative;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 2px;
  padding: 8px 12px;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgb(25 103 210 / 15%);
  transition: color cubic-bezier(0.1, 0.1, 0, 1) 250ms,
              background-color cubic-bezier(0.1, 0.1, 0, 1) 250ms;
  ${ ({ color }) => color === 'blue' ? `
    color: ${ colors.white };
    border-color: ${ colors.blueDark };
    background-color: ${ colors.blueDark };
    &:hover {
      color: ${ colors.blueDark };
      background-color: ${ colors.white };
    }
  ` : color === 'black' ? ` 
    color: ${ colors.greyDark };
    border-color: ${ colors.greyLight };
    background-color: ${ colors.none };
    &:hover {
      color: ${ colors.white };
      border-color: ${ colors.none };
    }
  ` : ``}
  &:hover > span {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`

const Label = styled.span`
  position: relative;
  z-index: 100;
`

const Fill = styled.span`
  position: absolute;
  left: -2px;
  top: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  opacity: 0;
  border-radius: 2px;
  transform: scale3d(0.9, 0.65, 0.8);
  transform-origin: center center;
  transition: opacity cubic-bezier(0.1, 0.1, 0, 1) 250ms,
              transform cubic-bezier(0.1, 0.1, 0, 1) 250ms;
  ${ ({ color }) => color === 'blue' ? `
    background-color: ${ colors.none };
  ` : color === 'black' ? `
    background-color: ${ colors.greyDark };
  ` : ``}
`

export default Button
