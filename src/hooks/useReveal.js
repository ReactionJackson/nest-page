import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const useReveal = () => {
  const [ isRevealed, setIsRevealed ] = useState(false)
  const { ref, inView } = useInView({
    rootMargin: '-200px',
    triggerOnce: true
  })
  useEffect(() => {
    setIsRevealed(inView)
  }, [ inView ])
  return {
    ref,
    isRevealed: window.innerHeight >= 600 ? isRevealed : true
  }
}
