import React, { useState } from 'react'
import styled from 'styled-components'
import TopNav from './components/TopNav'
import StickyNav from './components/StickyNav'
import Overview from './components/Overview'
import TechSpecs from './components/TechSpecs'
import Compare from './components/Compare'
import { sizes } from './constants'

const pages = [
  <Overview />,
  <TechSpecs />,
  <Compare />,
]

const App = () => {

  const [ currentPage, setCurrentPage ] = useState(0)

  return (
    <Container>
      <TopNav />
      <StickyNav changePage={ next => setCurrentPage(next) } />
      { pages.map((Page, i) => (
        <div key={ i }>
          { currentPage === i && Page}
        </div>
      ))}
    </Container>
  )
}

const Container = styled.main`
  padding-top: ${ sizes.navHeight };
`

export default App
