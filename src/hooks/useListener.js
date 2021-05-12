import { useEffect } from 'react'

export const useListener = (event, callback, deps = []) => {
  useEffect(() => {
    window.addEventListener(event, callback)
    return () => window.removeEventListener(event, callback)
  }, [ event, callback, ...deps ])
}
