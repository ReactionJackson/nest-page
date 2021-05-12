import { keyframes } from 'styled-components'

export const animations = {
  pulse:  keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.03); }
    100% { transform: scale(1); }
  `
}

export const colors = {
  white: '#fff',
  black: '#000',
  grey: '#5f6367',
  greyLight: '#c1c0c0',
  greyPale: '#F8F8F8',
  greyMid: '#9ea3a6',
  greyDark: '#423f3f',
  greyBorder: '#F1F1F1',
  blue: '#1a73e8',
  blueBright: '#2b86ff',
  blueDark: '#1b67d2',
  none: 'transparent',
  shadow: 'rgba(0, 0, 0, 0.15)',
}

export const productColors = [
  'tomato',
  'dodgerblue',
  'mediumseagreen',
  'gold'
]

export const productColorNames = [
  'Stainless Steel',
  'White',
  'Black',
  'Copper'
]

export const sizes = {
  navHeight: 90,
  subNavHeight: 60,
}

export const pageNames = [
  'Overview',
  'Tech Specs',
  'Compare',
]
