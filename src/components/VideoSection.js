import React, { useState } from 'react'
import styled from 'styled-components'
import VideoModal from './VideoModal'
import { IconPlay } from '../svgs/IconPlay'
import { colors } from '../constants'

const VideoSection = () => {

  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <Container>
      <PlayButton onClick={ _ => setIsOpen(!isOpen) }>
        <IconPlay />
      </PlayButton>
      <VideoModal
        src="https://www.youtube.com/watch?v=4jp1axFycgQ"
        isOpen={ isOpen }
        closeModal={ _ => setIsOpen(false) }
      />
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vw;
  min-height: 450px;
  background: url(${ require('../assets/img/poster.png').default }) center no-repeat ${ colors.black };
  background-size: cover;
`

const PlayButton = styled.button`
  color: ${ colors.white };
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  cursor: pointer;
  border-radius: 50%;
  transform: scale(1);
  border: 2px solid ${ colors.white };
  background-color: ${ colors.none };
  transition: color ease 300ms,
              transform ease 300ms,
              background-color ease 300ms;
  &:hover {
    color: ${ colors.greyDark };
    background-color: ${ colors.white };
    transform: scale(1.125);
  }
`

export default VideoSection