import React, { useEffect } from 'react'
import Logo from '../../Images/img/Logo_Circ.png'
import { HiViewGrid } from 'react-icons/hi'
import { TiShoppingCart } from 'react-icons/ti'
import {BiSolidUser} from 'react-icons/bi'
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
  MenuLinksContainer , 
  MenuLinkA,
  NavUserStyled,
  UserLinksLiStyled
} from './NabBar.Styles'

import ModalCart from './ModalCart/ModalCart'
import CartModals from '../Modals/CartModals'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModalHidden, changeModal } from '../../../Redux/modal/modalSlice'


const NavBar = () => {
  const [ hiddenCart, setHiddenCart ] = useState(true) 
  const [ clikedMenu, setclikedMenu ] = useState(false) 
  const navigate = useNavigate();
  const cartModals = useSelector(state => state.modal.hiddenModal)
  const dispatch = useDispatch()
  
  useEffect(() => {
      if(!cartModals){
      const timer = setTimeout(() =>dispatch(toggleModalHidden()), 1500);
      return () => clearTimeout(timer);
      }
  }, [cartModals]);

  return (
    <NavBarContainer>
      <ModalCart hiddenCart={hiddenCart} setHiddenCart={setHiddenCart} />
      {!cartModals && (
        <CartModals hiddenCart={cartModals}/>
        )
      }
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
        <UserLinksLiStyled onClick={() => navigate("/aboutus")}>
        <a>Usuario</a>
        </UserLinksLiStyled>
      </LinksContainer>
      
      <MenuLinksContainer>
      <MenuLinkA>Usuario</MenuLinkA>
      <li><NavUserStyled><BiSolidUser/></NavUserStyled></li>
      <li><NavMenuStyled onClick={() => setclikedMenu(!clikedMenu)}><HiViewGrid/></NavMenuStyled></li>
      <li><NavCartStyled onClick={() => setHiddenCart(!hiddenCart)}><TiShoppingCart/></NavCartStyled></li>
      </MenuLinksContainer>
    </NavBarContainer>
  )
}

export default NavBar