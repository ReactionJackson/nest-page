import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { colors } from '../constants'
import { media } from '../utils'

const Time = ({ style = {} }) => {

  const [ time, setTime ] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, [ 1000 ])
    return () => clearInterval(timer)
  }, [])

  return (
    <Container style={ style }>
      {`
        ${ (time.getHours() < 10 ? '0' : '') + time.getHours() }:
        ${ (time.getMinutes() < 10 ? '0' : '') + time.getMinutes() }
      `}
    </Container>
  )
}

const Container = styled(motion.div)`
  color: ${ colors.white };
  font-size: 20px;
  font-weight: 400;
  user-select: none;
  ${ media(1100, `font-size: 20px;`) }
`

export default Time
