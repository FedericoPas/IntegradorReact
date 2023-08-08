import React from 'react'
import { HeroCarrouselStyled, HeroContainerStyled, HeroTextContainerStyled } from './HeroStyles'
import Carouselo from './Carousel/Carouselo'

const Hero = () => {
  return (
    <HeroContainerStyled>
        <HeroTextContainerStyled>
            <h1>LAS MEJORES OFERTAS</h1>
        </HeroTextContainerStyled>
        
        <HeroCarrouselStyled>
            <Carouselo/>
        </HeroCarrouselStyled>
    </HeroContainerStyled>
  )
}

export default Hero
