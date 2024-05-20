import { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";
import { store } from "../store";
import { calculateTotals, clearCart } from "../features/cart/cartSlice";
import useCreateOrder from "../features/orders/useCreateOrder";
import { useUser } from "../features/auth/useUser";

const ThankYou = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { total } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const { createOrder, isCreating } = useCreateOrder();
  const { user, isLoading } = useUser();

  const saveToOrderHistory = async () => {
    createOrder({
      user_id: localStorage.getItem("id"),
      user: [
        {
          email: user.email,
          name: user.user_metadata.name,
          phone: user.user_metadata.phone,
          address: user.user_metadata.address,
        },
      ],
      orderStatus: "in progress",
      subtotal: total,
      cartItems: cartItems,
    });
  };

  if (cartItems.length > 0) {
    saveToOrderHistory();
    store.dispatch(clearCart());
    store.dispatch(calculateTotals());
    toast.success("Order completed");
  }

  useEffect(() => {
    if (!loginState) {
      toast.error("You must be logged in to access this page");
      navigate("/");
    }
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center animate-pulse text-xl">
        Loading...
      </div>
    );
  }

  if (isCreating) {
    return (
      <div className="h-screen w-full flex items-center justify-center animate-pulse text-xl">
        Creating order...
      </div>
    );
  }

  return (
    <>
      <div className="thankyou-content flex items-center justify-center text-center flex-col min-h-screen sm:min-h-[60dvh] text-accent-content px-10 max-w-7xl mx-auto">
        <h2 className="text-6xl max-sm:text-4xl">
          Thank you for your purchase!
        </h2>

        <h3 className="text-2xl mt-10 max-sm:text-xl">
          We hope you love your new clothes and shoes! We appreciate your
          business and look forward to seeing you again soon.
        </h3>
        <h3 className="text-2xl mt-5 max-sm:text-xl">
          Here are some things you can do next:
        </h3>
        <ul className="text-xl mt-5 text-blue-500 max-sm:text-lg">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/order-history">&rarr; See order history &larr;</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/">&rarr; Browse more product and buy more &larr;</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ThankYou;
