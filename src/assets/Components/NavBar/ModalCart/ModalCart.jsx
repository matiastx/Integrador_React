import { AnimatePresence } from 'framer-motion';
import { CardsContainer, CartBuy, CartBuyDesc, CartContainer, Separator } from './ModalCart.Styles';
import ModalCartCard from './ModalCartCard';




const ModalCart = ({ hiddenCart, setHiddenCart }) => {
    
    return (
        <>
        {/* {!hiddenCart && (
        <ModalOverlayStyled
        />
        )} */}
        <AnimatePresence >
            {!hiddenCart && (
                <CartContainer>
            <h1>Tu Compra!</h1>
            <CardsContainer>
                <ModalCartCard />
            </CardsContainer>
            
            <CartBuy>
                <Separator />
                <CartBuyDesc>
                    <p>Total:</p>
                    <h2>$75.371,31</h2>
                </CartBuyDesc>
            </CartBuy>

                
                
        </CartContainer>
        )}
        </AnimatePresence>
        </>
    )
}

export default ModalCart;