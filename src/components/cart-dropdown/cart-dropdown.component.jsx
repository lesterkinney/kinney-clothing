import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.styles.scss';

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
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick={routeChange}>Checkout</Button>
        </div>
    );
}

export default CartDropdown;