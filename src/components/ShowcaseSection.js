import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import styled from 'styled-components'
import ContentBlock from './ContentBlock'
import { colors, sizes, productColors, productColorNames } from '../constants'

const ShowcaseSection = () => {

  const [ currentProduct, setCurrentProduct ] = useState(0)
  const [ progress, setProgress ] = useState([0, 0, 0, 0])

  let pipTimer = null
  const duration = 4000

  const skipToProduct = id => {
    clearInterval(pipTimer)
    setCurrentProduct(id)
  }

  useEffect(() => {
    let newProgress = [0, 0, 0, 0]
    newProgress[currentProduct] = 100
    setProgress(newProgress)
  }, [ currentProduct ])

  useEffect(() => {
    pipTimer = setTimeout(() => {
      setCurrentProduct(currentProduct + 1 < 4 ? currentProduct + 1 : 0)
    }, duration)
  }, [ progress ])

  return (
    <Container>
      <ContentBlock
        theme="light"
        title="There's a ring for every home."
      />
      <Products>
        { productColors.map((bg, i) => (
          <Product
            key={ bg + i }
            isCurrent={ currentProduct === i }>
            <ProductImage src={ require(`../assets/img/product-${ i + 1 }.jpeg`).default } />
          </Product>
        ))}
      </Products>
      <Pips>
        { productColors.map((bg, i) => (
          <Pip
            key={ bg + i }
            color={ bg }
            onClick={ _ => skipToProduct(i) }>
            <Fill isActive={ currentProduct === i }>
              <CircularProgressbar
                value={ progress[i] }
                minValue={ 0 }
                maxValue={ 100 }
                styles={ buildStyles({
                  pathColor: bg,
                  rotation: 0,
                  strokeLinecap: 'butt',
                  pathTransitionDuration: currentProduct === i ? duration / 1000 : 0,
                  trailColor: currentProduct === i ? 'rgba(255, 255, 255, 0.4)' : bg
                })}
              />
            </Fill>
          </Pip>
        ))}
      </Pips>
      <Label>{ productColorNames[currentProduct] }</Label>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vw;
  min-height: 500px;
  padding: 140px 20px;
  text-align: center;
  background-color: ${ colors.greyMid };
  margin-bottom: 20px;
`

const Products = styled.ul`
  position: relative;
  height: 26vw;
  width: 100%;
  margin-top: 50px;
`

const Product = styled.li`
  position: ${ ({ isCurrent }) => isCurrent ? 'relative' : 'absolute' };
  opacity: ${ ({ isCurrent }) => isCurrent ? 1 : 0 };
  left: 50%;
  top: 0;
  width: 45vw;
  transform: translate3d(-50%, 0, 0);
  transition: opacity ease 300ms;
`

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`

const Pips = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  margin: 20px auto;
`

const Pip = styled.li`
  position: relative;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${ ({ color }) => color || '#000' };
  cursor: pointer;
`

const Fill = styled.div`
  width: 100%;
  height: 100%;
  transform: scale(${ ({ isActive }) => isActive ? 1.75 : 1 });
  transition: transform ease 300ms;
`

const Label = styled.span`
  display: inline-block;
  font-size: 16px;
  color: ${ colors.white };
  margin-top: 20px;
`

export default ShowcaseSection
