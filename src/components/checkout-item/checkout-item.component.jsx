import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;

    const { addItemToCart, removeItemFromCart, removeAllItemsFromCart } = useContext(CartContext);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'><img src={imageUrl} alt={name} /></div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <button onClick={() => { removeItemFromCart(cartItem) }}>-</button>
                <span>{quantity}</span>
                <button onClick={() => { addItemToCart(cartItem) }}>+</button>
            </div>
            <span className='price'>${price}</span>
            <button className='remove-button' onClick={() => { removeAllItemsFromCart(cartItem) }}>&#10005;</button>
        </div>
    );
}

export default CheckoutItem;