import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { interpolate } from '@popmotion/popcorn'
import ContentBlock from './ContentBlock'
import Time from './Time'
import { useListener } from '../hooks/useListener'
import { colors, sizes } from '../constants'
import { media } from '../utils'

const FarsightSection = () => {

  const track = useRef()
  const mapper = useRef()
  const { scrollY } = useViewportScroll()
  const progress = useTransform(scrollY, y => !mapper.current ? y : mapper.current(y))
  const faderOpacity = useTransform(progress, [ 0.0, 0.5 ], [ 0.9, 0 ])
  const roomZoom = useTransform(progress, [ 0.0, 0.5, 1.0 ], [ 1.0, 1.1, 1.4 ])
  const clockSlide = useTransform(progress, [ 0.0, 0.5, 1.0 ], [ 0, 10, 40 ])
  const clockOpacity = useTransform(progress, [ 0.3, 0.4 ], [ 0, 0.85 ])
  const container = {
    position: useTransform(progress, y => y <= 0 || y >= 1 ? 'absolute' : 'fixed'),
    top: useTransform(progress, y => y <= 0 ? 0 : 'auto'),
    bottom: useTransform(progress, y => y > 0 ? 0 : 'auto'),
    left: 0,
  }

  const updateInterpolationValue = () => {
    const { top, height } = track.current.getBoundingClientRect()
    mapper.current = interpolate(
      [
        top + window.pageYOffset - (window.innerWidth <= 750 ? sizes.navHeightSmall : sizes.navHeight),
        top + height - window.innerHeight + window.pageYOffset
      ],
      [ 0, 1 ]
    )
  }

  useEffect(() => {
    setTimeout(() => updateInterpolationValue(), [ 200 ])
  }, [])

  useListener('resize', updateInterpolationValue)

  return (
    <Container ref={ track }>
      <Frame style={{ ...container }}>
        <Content>
          <ContentBlock
            title="It lights up when you walk into the room."
            body="Now the Nest Learning Thermostat does something new. It’s called Farsight, and it lights up to show you the temperature, weather or time. You can even choose a digital or analogue clock face. Farsight is big and bright on the beautiful display – you can see it from across the room."
            theme="light"
            style={{ zIndex: 200 }}
          />
          <Clock style={{ scale: roomZoom, y: clockSlide }}>
            <Time style={{ opacity: clockOpacity }} />
          </Clock>
          <Fader style={{ opacity: faderOpacity }} />
          <Scene style={{ scale: roomZoom }}>
            <Room />
          </Scene>
        </Content>
      </Frame>
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

const Frame = styled(motion.div)`
  height: calc(100vh - ${ sizes.navHeight }px);
  ${ media(750, `height: calc(100vh - ${ sizes.navHeightSmall }px)`) }
`

const Content = styled.div`
  z-index: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px 0 40px;
  ${ media(1100, `padding-top: 50px;`) }
`

const Scene = styled(motion.div)`
  z-index: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`

const Room = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background: url(${ require('../assets/img/farsight.png').default }) right top no-repeat;
  background-size: cover;
`

const Clock = styled(motion.div)`
  z-index: 50;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  margin-top: 80px;
  border-radius: 50%;
  filter: brightness(0.9);
  background: url(${ require('../assets/img/nest.png').default }) center no-repeat;
  transform-origin: center top;
  box-shadow: 15px 15px 50px 0 rgba(10, 5, 0, 0.9);
  background-size: cover;
  overflow: hidden;
`

const Fader = styled(motion.div)`
  z-index: 100;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  transform: scale(1.2);
  background-color: ${ colors.black };
`

export default FarsightSection
