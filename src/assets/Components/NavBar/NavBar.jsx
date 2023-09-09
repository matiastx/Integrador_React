import React from 'react'
import Logo from '../../Images/img/Logo_Circ.png'
import { HiViewGrid } from 'react-icons/hi'
import { TiShoppingCart } from 'react-icons/ti'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { 
  LinksContainer, 
  LogoContainer, 
  LogoImg, 
  NavBarContainer, 
  NavMenuStyled, 
  NavCartStyled, 
  NavLinksLiStyled, 
  MenuLinksContainer 
} from './NabBar.Styles'
import ModalCart from './ModalCart/ModalCart'



const NavBar = () => {
  const [ hiddenCart, setHiddenCart ] = useState(true) 
  const [ clikedMenu, setclikedMenu ] = useState(false) 
  const navigate = useNavigate();
  return (
    <NavBarContainer>
      <ModalCart hiddenCart={hiddenCart} setHiddenCart={setHiddenCart} />
      <LogoContainer>
        <LogoImg onClick={() => navigate("/")}>
          <img src={Logo}/>
          <a>Money<span>NET</span></a>
        </LogoImg>
      </LogoContainer>
      
      
        <LinksContainer isOpen={clikedMenu}>
        <NavLinksLiStyled onClick={() => navigate("/")}>
          <a>Home</a>
        </NavLinksLiStyled>
        <NavLinksLiStyled onClick={() => navigate("/products")}>
          <a>Crypto</a>
        </NavLinksLiStyled>
        <NavLinksLiStyled onClick={() => navigate("/aboutus")}>
        <a>AboutUs</a>
        </NavLinksLiStyled>
      </LinksContainer>
      
      
      <MenuLinksContainer>
      
      <li><NavMenuStyled onClick={() => setclikedMenu(!clikedMenu)}><HiViewGrid/></NavMenuStyled></li>
      <li><NavCartStyled onClick={() => setHiddenCart(!hiddenCart)}><TiShoppingCart/></NavCartStyled></li>
      </MenuLinksContainer>
    </NavBarContainer>
  )
}

export default NavBar