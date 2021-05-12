import React from 'react'
import styled from 'styled-components'
import ContentBlock from './ContentBlock'
import { useReveal } from '../hooks/useReveal'
import { colors } from '../constants'
import { media } from '../utils'

const FeatureSection = ({ image = null, title = '', body = '', reversed = false }) => {

  const { ref, isRevealed  } = useReveal()

  return (
    <Container
      ref={ ref }
      reversed={ reversed }>
      <ImagePanel isRevealed={ isRevealed }>
        <Image
          image={ image }
          isRevealed={ isRevealed }
        />
      </ImagePanel>
      <ContentPanel reversed={ reversed }>
        <ContentBlock
          title={ title }
          body={ body }
        />
      </ContentPanel>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: ${ ({ reversed }) => reversed ? 'row-reverse' : 'row' };
  padding: 0 20px;
  height: calc(50vw - 40px);
  background-color: ${ colors.white };
  margin-bottom: 20px;
  ${ media(900, `
    display: block;
    height: auto;
  `) }
`

const ImagePanel = styled.aside`
  width: 50%;
  height: 100%;
  opacity: ${ ({ isRevealed }) => isRevealed ? 1 : 0 };
  transform: translate3d(0, ${ ({ isRevealed }) => isRevealed ? 0 : '150px' }, 0);
  background-color: ${ colors.black };
  transition: all ease 1300ms;
  overflow: hidden;
  ${ ({ isRevealed }) => media(900, `
    width: 100%;
    height: calc(60vw - 40px);
    transform: translate3d(0, ${ isRevealed ? 0 : '50px' }, 0);
  `) }
`

const Image = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  opacity: ${ ({ isRevealed }) => isRevealed ? 1 : 0 };
  transform: translate3d(-50%, -50%, 0) scale(${ ({ isRevealed }) => isRevealed ? 1.05 : 1.25 });
  background: url(${ ({ image }) => image ? require(`../assets/img/${ image }`).default : '' }) center no-repeat;
  background-size: cover;
  transition: all ease 1800ms;
`

const ContentPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  ${ ({ reversed }) => media(1100, `padding-${ reversed ? 'right' : 'left' }: 20px;`) }
  ${ media(900, `
    width: 100%;
    padding: 50px 0;
  `) }
`

export default FeatureSection
