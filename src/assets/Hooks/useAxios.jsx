import React, { useState } from 'react'

export const useAxios = () => {
  const [isHidden, setIsHidden] = useState(true)

  const handlerCart = () => {
    setIsHidden(!isHidden)
    console.log(isHidden)
  }

  return {
    isHidden,
    handlerCart
  }
}
