import React from 'react'
import styled from 'styled-components'
import ContentBlock from './ContentBlock'
import { useReveal } from '../hooks/useReveal'
import { colors } from '../constants'

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
      <ContentPanel>
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
`

const ImagePanel = styled.aside`
  width: 50%;
  height: 100%;
  opacity: ${ ({ isRevealed }) => isRevealed ? 1 : 0 };
  transform: translate3d(0, ${ ({ isRevealed }) => isRevealed ? 0 : '150px' }, 0);
  background-color: ${ colors.black };
  transition: all ease 1500ms;
  overflow: hidden;
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
  transition: all ease 2000ms;
`

const ContentPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`

export default FeatureSection
