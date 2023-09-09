export const addItemToCart = () => {
    const porductToAdd = cartItems.find((item) => item.id === product.id);
    
    if (porductToAdd) {
        return cartItems.map((item) => {
            return item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item;
    })
    } else {
        return [
            ...cartItems, {
                ...product, quantity: 1
            }
        ]
    }
}

export const removeItemFromCart = () => {
    const porductToRemove = cartItems.find((item) => item.id === product.id);
    
    if (porductToRemove.quantity === 1) {
        return cartItems.filter((item) => item.id !== product.id);
    } else {
        return cartItems.map((item) => {
            return item.id === product.id
                ? { ...item, quantity: item.quantity - 1 }
                : item;
        })
    }
}
