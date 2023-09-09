import React from 'react'
import { CryptoCardBottom, CryptoCardBtnContainer, CryptoCardContainer, CryptoCardTitle, CryptoCardTop } from './Crypto.Styled'
import { CryptoButton } from '../UX/Button/Button'


const CryptoCard = ({title, denom, histryMax, price, img}) => {
  return (
    <CryptoCardContainer>
      <CryptoCardTop>
        <img src={img} alt="" />
        <CryptoCardTitle>
          <h2>{title}</h2>
          <h3>{denom}</h3>
        </CryptoCardTitle>
      </CryptoCardTop>
      <CryptoCardBottom>
        <h2>Max Historico</h2>
        <p>U$D {histryMax}</p>
        <h2>Valor Actual</h2>
        <p>U$D {price}</p>
        <p>$ {price * 550}</p>
      
      </CryptoCardBottom>
      <CryptoCardBtnContainer>
        <CryptoButton>Comprar</CryptoButton>
      </CryptoCardBtnContainer>
      
    </CryptoCardContainer>
  )
}

export default CryptoCard