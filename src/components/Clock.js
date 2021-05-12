import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../constants'
import { media } from '../utils'

const Clock = () => {

  const [ time, setTime ] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, [ 1000 ])
    return () => clearInterval(timer)
  }, [])

  return (
    <Container>
      {`${ time.getHours() }:${ (time.getMinutes() < 10 ? '0' : '') + time.getMinutes() }`}
    </Container>
  )
}

const Container = styled.div`
  color: ${ colors.white };
  font-size: 1.75vw;
  font-weight: 400;
  position: absolute;
  left: 50.15%;
  top: 52.50%;
  transform: translate3d(-50%, -50%, 0);
  user-select: none;
  ${ media(1100, `font-size: 20px;`) }
`

export default Clock
