import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useReveal } from '../hooks/useReveal'
import { colors } from '../constants'

const ContentBlock = ({
  title = '',
  body = '',
  theme = 'dark',
  narrow = false,
  cta = { href: '', label: '' },
  ...props
}) => {

  const { ref, isRevealed } = useReveal()

  return (
    <Container 
      { ...props }
      ref={ ref }
      theme={ theme }>
      <Content 
        theme={ theme }
        narrow={ narrow }>
        <Title
          as="h3"
          isRevealed={ isRevealed }>
          { title }
        </Title>
        { body && (
          <Body
            as="p"
            delay={ 100 }
            isRevealed={ isRevealed }
            dangerouslySetInnerHTML={{ __html: body }}
          />
        )}
        { cta.href && (
          <Fader
            delay={ 200 }
            isRevealed={ isRevealed }>
            <Button
              color="black"
              href={ cta.href }
              isRevealed={ isRevealed }>
              { cta.label || 'Find out more' }
            </Button>
          </Fader>
        )}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  z-index: 100;
  position: relative;
  width: 100%;
`

const Content = styled.div`
  color: ${ ({ theme }) => theme === 'dark' ? colors.greyDark : colors.white };
  width: 100%;
  max-width: ${ ({ narrow }) => narrow ? 45 : 65 }%;
  margin: 0 auto;
  text-align: center;
  *:last-child {
    margin-bottom: 0;
  }
`

const Fader = styled.div`
  transition: all cubic-bezier(0.12, 0.88, 0.39, 0.98) 600ms;
  transition-delay: ${ ({ delay }) => delay || 0 }ms;
  opacity: ${ ({ isRevealed }) => isRevealed ? 1 : 0 };
  transform: translate3d(0, ${ ({ isRevealed }) => isRevealed ? 0 : '50px' }, 0)
`

const Title = styled(Fader)`
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  margin: -10px 0 30px 0;
`

const Body = styled(Fader)`
  font-size: 20px;
  font-weight: 400;
  line-height: 40px;
  margin-bottom: 35px;
`

export default ContentBlock
