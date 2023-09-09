import React from 'react'
import { CardsContainer, CryptoContainer } from './Crypto.Styled'
import { ProductsData } from '../../Data/ProductsData'
import CryptoCard from './CryptoCards'


const Crypto = () => {
  return (
    <CryptoContainer>
      <h2>Comenza ahora mismo!</h2>
      <CardsContainer>
        {
          ProductsData.map((product) => {
            return <CryptoCard key={product.id} {...product}/>
          })
          }
      </CardsContainer>
    </CryptoContainer>
  )
}

export default Crypto