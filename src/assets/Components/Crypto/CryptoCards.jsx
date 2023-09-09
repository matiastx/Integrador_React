import React from 'react'
import { CryptoCardBottom, CryptoCardBtnContainer, CryptoCardContainer, CryptoCardTitle, CryptoCardTop } from './Crypto.Styled'
import { CryptoButton } from '../UX/Button/Button'
import { PrecioDolar } from '../../../Utils/constantes'
import { formatPrice, formatPriceUSD } from '../../../Utils/FormatPrice'


const CryptoCard = ({title, denom, histryMax, price, img, Rank}) => {
  const maxprice = formatPriceUSD(histryMax)
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
        <p>{isNaN(histryMax) ? histryMax : maxprice}</p>
        <h2>Valor Actual</h2>
        <p>{formatPriceUSD(price)}</p>
        <p>{formatPrice(price * PrecioDolar)}</p>
      
      </CryptoCardBottom>
      <CryptoCardBtnContainer>
        <CryptoButton>Comprar</CryptoButton>
      </CryptoCardBtnContainer>
      
    </CryptoCardContainer>
  )
}

export default CryptoCard