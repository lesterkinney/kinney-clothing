import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
    const { cartItems, priceTotal } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <h1>Checkout Cart</h1>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>
            {cartItems.map((item) => {
                return (
                    <CheckoutItem key={item.id} cartItem={item} />
                )
            })}
            <div className='total'>
                <span>Total: ${priceTotal}</span>
            </div>
        </div>
    )
}

export default Checkout;