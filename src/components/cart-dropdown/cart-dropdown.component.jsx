import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.styles';
import { CartDropdownContainer, CartItems, CartDropdownButton } from './cart-dropdown.styles';

const CartDropdown = () => {
    const { setIsCartOpen } = useContext(CartContext);

    let navigate = useNavigate();
    const routeChange = () => {
        setIsCartOpen(false);
        let path = 'checkout';
        navigate(path);
    }

    const { cartItems } = useContext(CartContext);

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.map(item => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </CartItems>
            <Button onClick={routeChange}>Checkout</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;