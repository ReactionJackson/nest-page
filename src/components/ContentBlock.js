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
      theme={ theme }
      isRevealed={ isRevealed }>
      <Content 
        theme={ theme }
        narrow={ narrow }>
        <Title>{ title }</Title>
        { body && (
          <Body dangerouslySetInnerHTML={{ __html: body }} />
        )}
        { cta.href && (
          <Button color="black" href={ cta.href }>
            { cta.label || 'Find out more' }
          </Button>
        )}
      </Content>
    </Container>
  )
}

const Container = styled.div`
  z-index: 100;
  position: relative;
  width: 100%;
  transition: all cubic-bezier(0.3,-0.03, 0, 1.04) 2500ms;
  opacity: ${ ({ isRevealed }) => isRevealed ? 1 : 0 };
  transform:
    translate3d(0, ${ ({ isRevealed }) => isRevealed ? 0 : '60px' }, 0)
    scale(${ ({ isRevealed }) => isRevealed ? 1 : 0.94 });
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

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  margin: -10px 0 30px 0;
`

const Body = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 40px;
  margin-bottom: 35px;
`

export default ContentBlock
