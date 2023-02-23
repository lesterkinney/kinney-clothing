import './checkout.styles.scss';
import CheckoutItem from '../checkout-item/checkout-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
    const { removeItemFromCart, cartItems, priceTotal } = useContext(CartContext);
    const removeItem = (item) => {
        console.log(`cartItems before: ${cartItems.length} ${item}`);
        removeItemFromCart(item);
        console.log(`cartItems after: ${cartItems.length}`);
    }
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <h4>Product</h4>
                <h4>Description</h4>
                <h4>Quantity</h4>
                <h4>Price</h4>
                <h4>Remove</h4>
            </div>
            {cartItems.map(item => (
                <CheckoutItem key={item.id} checkoutItem={item} removeCheckoutItem={ removeItem } />
            ))}
            <div>
                <h1>TOTAL: ${priceTotal}</h1>
            </div>
        </div>
    )
}

export default Checkout;