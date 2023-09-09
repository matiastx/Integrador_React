import React from 'react'
import { HeroBtns, HeroContainer, HeroLogo, Heroinfo } from './Hero.Styled'
import Logo from '../../Images/img/Logo_Circ.png'
import { Button } from '../UX/Button/Button'


const Hero = () => {
  return (
    <HeroContainer>
        <HeroLogo>
            <img src={Logo} alt="" />
            <h1>Money<span>NET</span></h1>
        </HeroLogo>
        <Heroinfo>
            Somos <b>Money<span>NET</span></b> , un banco online que te ofrece 
            servicios bancarios tradicionales, así como la 
            compra y venta de criptomonedas, como Bitcoin, 
            Ethereum y Stable Coins.
        </Heroinfo>
        <HeroBtns>
            <Button>Registrate</Button>
            <Button>Ingresa</Button>
        </HeroBtns>
    </HeroContainer>
  )
}

export default Hero