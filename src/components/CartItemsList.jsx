import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartItemsList = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.id} cartItem={item} />;
      })}
    </>
  );
};

export default CartItemsList;
