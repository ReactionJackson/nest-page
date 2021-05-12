import React, { useState } from 'react'
import styled from 'styled-components'
import { colors, pageNames } from '../constants'
import { media } from '../utils'

const RadioSwitcher = ({ changePage = () => {} }) => {

  const [ currentPage, setCurrentPage ] = useState(0)

  const handleToggle = id => {
    setCurrentPage(id)
    changePage(id)
  }

  return (
    <Container>
      <Items>
        { pageNames.map((name, i) => (
          <Item
            key={ name }
            isCurrent={ currentPage === i }
            onClick={ _ => handleToggle(i) }>
            { name }
          </Item>
        ))}
      </Items>
      <Pill position={ currentPage } />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 320px;
  height: 54px;
  border: 1px solid ${ colors.greyBorder };
  border-radius: 27px;
  background-color: ${ colors.greyPale };
  user-select: none;
  ${ media(750, `display: none;`)}
`

const Items = styled.ul`
  z-index: 100;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`

const Item = styled.li`
  width: 33.3333%;
  font-size: 15px;
  line-height: 54px;
  font-weight: 400;
  color: ${ ({ isCurrent }) => isCurrent ? colors.black : colors.greyMid };
  text-align: center;
  cursor: pointer;
  transition: color ease 150ms;
`

const Pill = styled.div`
  z-index: 0;
  position: absolute;
  top: 6px;
  left: 0;
  width: 33.3333%;
  height: 40px;
  transform: translate3d(${ ({ position }) => position * 100 }%, 0, 0);
  transition: transform ease 300ms;
  &::after {
    content: '';
    display: block;
    width: calc(100% - 10px);
    height: 100%;
    margin-left: 5px;
    border-radius: 20px;
    background-color: ${ colors.white };
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  }
`

export default RadioSwitcher