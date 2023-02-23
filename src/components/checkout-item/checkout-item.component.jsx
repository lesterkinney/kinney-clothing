import './checkout-item.styles.scss';

const CheckoutItem = ({ checkoutItem, removeCheckoutItem }) => {
    const { imageUrl, name, price, quantity } = checkoutItem;

    const removeCartItem = () => {
        console.log(checkoutItem);
        removeCheckoutItem(checkoutItem);
    }

    return (
        <div className='checkout-item-container'>
            <div className='image-container'><img src={imageUrl} alt={name} /></div>
            <h3 className='name'>{name}</h3>
            <div className='quantity'>
                <button>-</button>
                <h3>{quantity}</h3>
                <button>+</button>
            </div>
            <h3 className='price'>${price}</h3>
            <button className='delete-button' onClick={removeCartItem}>X</button>
        </div>
    );
}

export default CheckoutItem;