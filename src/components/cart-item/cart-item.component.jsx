import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  CartItemName,
  CartItemPrice,
} from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage
        src={imageUrl}
        alt={name}
      />
      <ItemDetails>
        <CartItemName>{name}</CartItemName>
        <CartItemPrice>
          {quantity} x ${price}
        </CartItemPrice>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
