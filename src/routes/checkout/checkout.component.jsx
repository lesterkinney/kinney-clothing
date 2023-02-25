import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

const Checkout = () => {
  const { cartItems, priceTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <h1>Checkout Cart</h1>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => {
        return (
          <CheckoutItem
            key={item.id}
            cartItem={item}
          />
        );
      })}
      <Total>
        <span>Total: ${priceTotal}</span>
      </Total>
    </CheckoutContainer>
  );
};

export default Checkout;
