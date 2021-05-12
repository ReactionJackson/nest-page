import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { interpolate } from '@popmotion/popcorn'
import ContentBlock from './ContentBlock'
import Clock from './Clock'
import { useListener } from '../hooks/useListener'
import { colors, sizes } from '../constants'
import { media } from '../utils'

const FarsightSection = () => {

  const track = useRef()
  const mapper = useRef()
  const { scrollY } = useViewportScroll()
  const progress = useTransform(scrollY, y => !mapper.current ? y : mapper.current(y))
  const faderOpacity = useTransform(progress, [ 0.0, 0.4 ], [ 0.9, 0 ])
  const roomZoom = useTransform(progress, [ 0.0, 0.4, 1.0 ], [ 1.0, 1.05, 1.3 ])
  const clockOpacity = useTransform(progress, [ 0.2, 0.3 ], [ 0, 0.85 ])
  const container = {
    position: useTransform(progress, y => y <= 0 || y >= 1 ? 'absolute' : 'fixed'),
    top: useTransform(progress, y => y <= 0 ? 0 : 'auto'),
    bottom: useTransform(progress, y => y > 0 ? 0 : 'auto'),
    left: 0,
  }

  const updateInterpolationValue = () => {
    const { top, height } = track.current.getBoundingClientRect()
    mapper.current = interpolate(
      [ top + window.pageYOffset - sizes.navHeight, top + height - window.innerHeight + window.pageYOffset ],
      [ 0, 1 ]
    )
  }

  useEffect(() => {
    setTimeout(() => updateInterpolationValue(), [ 1000 ])
  }, [])

  useListener('resize', updateInterpolationValue)

  return (
    <Container ref={ track }>
      <motion.div style={{ height: `calc(100vh - ${ sizes.navHeight }px)`, ...container }}>
        <Content>
          <ContentBlock
            title="It lights up when you walk into the room."
            body="Now the Nest Learning Thermostat does something new. It’s called Farsight, and it lights up to show you the temperature, weather or time. You can even choose a digital or analogue clock face. Farsight is big and bright on the beautiful display – you can see it from across the room."
            theme="light"
          />
        </Content>
        <motion.div style={{ position: 'absolute', top: 0, width: '100%', height: '100%', scale: roomZoom }}>
          <Scene />
          <motion.div style={{ opacity: clockOpacity }}>
            <Clock />
          </motion.div>
        </motion.div>
        <motion.div style={{ opacity: faderOpacity }}>
          <Fader />
        </motion.div>
      </motion.div>
    </Container>
  )
}

const Container = styled.section`
  position: relative;
  height: 300vh;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: ${ colors.black };
`

const Content = styled.div`
  padding: 80px 20px 0 20px;
  ${ media(1100, `padding-top: 50px;`) }
`

const Scene = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background: url(${ require('../assets/img/farsight.png').default }) center top no-repeat;
  background-size: cover;
`

const Fader = styled.div`
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.2);
  background-color: ${ colors.black };
`

export default FarsightSection
