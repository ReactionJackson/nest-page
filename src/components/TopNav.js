import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'
import { Logo } from '../svgs/Logo'
import { IconSearch } from '../svgs/IconSearch'
import { IconHelp } from '../svgs/IconHelp'
import { IconBasket } from '../svgs/IconBasket'
import { colors } from '../constants'
import { media } from '../utils'

const TopNav = () => (
  <Container>
    <Menu collapsible>
      <MenuItem as="a" href="https://www.google.com">
        <Logo style={{ margin: '-3px 5px 0 0' }} />
      </MenuItem>
      <MenuItem href="#" willExpand>Pixel</MenuItem>
      <MenuItem href="#" willExpand>Nest</MenuItem>
      <MenuItem href="#" willExpand>Stadia</MenuItem>
      <MenuItem href="#" willExpand>Fitbit</MenuItem>
      <MenuItem href="#" willExpand>Pixelbook</MenuItem>
      <MenuItem href="#">Special offers</MenuItem>
    </Menu>
    <Menu>
      <MenuItem href="#" reversed>
        <IconSearch />
      </MenuItem>
      <MenuItem href="#" reversed>
        <IconHelp />
      </MenuItem>
      <MenuItem href="#" reversed>
        <IconBasket />
      </MenuItem>
      <MenuItem href="#" reversed>
        <Avatar src={ require('../assets/img/avatar.jpg').default } />
      </MenuItem>
    </Menu>
  </Container>
)

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 30px;
  margin: 0 auto;
  border-bottom: 1px solid ${ colors.greyBorder };
`

const Menu = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  > *:last-child {
    margin-right: 0;
  }
  ${ ({ collapsible }) => media(860, `
    ${ collapsible ? `> *:nth-of-type(n+2) { display: none; }` : ``}
  `) }
`

const Avatar = styled.img`
  width: 32px;
  border-radius: 50%;
`

export default TopNav
