import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player/youtube'
import { IconClose } from '../svgs/IconClose'
import { useListener } from '../hooks/useListener'
import { colors } from '../constants'
import { media } from '../utils'

const VideoModal = ({ src = '', closeModal = () => {}, isOpen = false }) => {

  useListener('keyup', ({ key }) => {
    if(key === 'Escape') closeModal()
  }, [ closeModal ])

  return (
    <Container isOpen={ isOpen }>
      <ReactPlayer
        url={ src }
        playing={ isOpen }
        width="100%"
        height="100%"
      />
      <CloseButton onClick={ closeModal }>
        <IconClose />
      </CloseButton>
    </Container>
  )
}

const Container = styled.div`
  z-index: 9999;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${ colors.black };
  pointer-events: ${ ({ isOpen }) => isOpen ? 'all' : 'none' };
  opacity: ${ ({ isOpen }) => isOpen ? 1 : 0 };
  transform: scale(${ ({ isOpen }) => isOpen ? 1 : 1.2 });
  transition: opacity ease 300ms,
              transform ease 300ms;
`

const CloseButton = styled.button`
  position: absolute;
  right: 50px;
  top: 50px;
  color: ${ colors.greyDark };
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  cursor: pointer;
  border-radius: 50%;
  transform: scale(1);
  border: 2px solid ${ colors.greyLight };
  background-color: ${ colors.white };
  transition: color ease 300ms,
              transform ease 300ms,
              border-color ease 300ms,
              background-color ease 300ms;
  &:hover {
    color: ${ colors.white };
    transform: scale(1.125);
    border-color: ${ colors.greyDark };
    background-color: ${ colors.greyDark };
  }
  ${ media(900, `
    right: 10px;
    top: 10px;
    transform: scale(0.7);
    &:hover { transform: scale(0.825); }
  `) }
`

export default VideoModal