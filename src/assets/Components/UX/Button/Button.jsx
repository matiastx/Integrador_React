import React from 'react'
import { StyledButton, StyledCryptoButton } from './Button.Styled'

export const Button = ({
    children, 
    radius = `20`, 
    disabled = false
}) => {
    return (
        <StyledButton
            whileTap={{ scale: 0.9 }}
            disabled={disabled} 
            radius={radius}
        >{children}
        </StyledButton>
    )
}

export const CryptoButton = ({
    children, 
    radius = `30`, 
    disabled = false
}) => {
    return (
        <StyledCryptoButton
            whileTap={{ scale: 0.9 }}
            disabled={disabled} 
            radius={radius}
        >{children}
        </StyledCryptoButton>
    )
}
