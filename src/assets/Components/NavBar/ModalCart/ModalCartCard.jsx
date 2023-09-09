import React from 'react'
import { CardContainer, CardDescription, CardQuantity } from './ModalCart.Styles'

const ModalCartCard = () => {
    return (
        <CardContainer>
            <img src="https://res.cloudinary.com/dz4oxre7x/image/upload/v1691439169/btc_obimfc.png" alt="BTC" />
            <CardDescription>
                <h3>Bitcoin</h3>
                <p>Valor: U$D 23.998,29</p>
                <p>Valor: $ 8.687.380,98</p>
                <span></span>
                <p>SubTot: $ 21.718,45</p>
            </CardDescription>
            <CardQuantity>
                <span>+</span>
                <p>0.0025</p>
                <span>-</span>
            </CardQuantity>
        </CardContainer>
    )
}

export default ModalCartCard