import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  CheckoutItemContainer,
  Image,
  ImageContainer,
  Name,
  Quantity,
  Price,
  RemoveButton,
  QuantityValue,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart, removeAllItemsFromCart } =
    useContext(CartContext);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image
          src={imageUrl}
          alt={name}
        />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <button
          onClick={() => {
            removeItemFromCart(cartItem);
          }}>
          -
        </button>
        <QuantityValue>{quantity}</QuantityValue>
        <button
          onClick={() => {
            addItemToCart(cartItem);
          }}>
          +
        </button>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton
        onClick={() => {
          removeAllItemsFromCart(cartItem);
        }}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
