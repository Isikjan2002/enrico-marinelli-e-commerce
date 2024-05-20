/* eslint-disable react/prop-types */
import { useState } from "react";
import { CartItemsList, CartTotals } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import PaymentCartItemsList from "../components/PaymentCartItemsList";
import PaymentForm from "../components/PaymentForm";
import CashOnDeliveryForm from "../components/CashOnDeliveryForm";

const Cart = () => {
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { cartItems } = useSelector((state) => state.cart);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const isCartEmpty = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
    } else {
      navigate("/thank-you");
    }
  };

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  return (
    <>
      <div className="mt-8 relative grid min-h-[60dvh] gap-8 py-8 lg:grid-cols-12 max-w-7xl mx-auto px-4">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {loginState ? (
            <div className="mt-8">
              <div className="flex gap-2 w-full">
                <button
                  className={
                    paymentMethod === "card"
                      ? "w-full p-3 bg-blue-500 rounded-none text-white"
                      : "w-full p-3 bg-gray-50 rounded-none hover:border-gray-900 border-2 text-gray-900"
                  }
                  onClick={() => handlePaymentMethod("card")}
                >
                  Pay with Card
                </button>
                <button
                  className={
                    paymentMethod === "cash"
                      ? "w-full p-3 bg-blue-500 rounded-none text-white"
                      : "w-full p-3 bg-gray-50 rounded-none hover:border-gray-900 border-2 text-gray-900"
                  }
                  onClick={() => handlePaymentMethod("cash")}
                >
                  Pay Cash on Delivery
                </button>
              </div>
              <button
                onClick={() => setIsPaymentModalOpen(true)}
                disabled={cartItems.length === 0 || paymentMethod === ""}
                className="btn bg-green-600 rounded-none hover:bg-blue-500 text-white btn-block mt-4"
              >
                order now
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-green-600 rounded-none hover:bg-blue-500 btn-block text-white mt-8"
            >
              please login
            </Link>
          )}
        </div>

        {isPaymentModalOpen && (
          <>
            <div
              className="fixed h-screen w-full top-0 left-0 bg-black bg-opacity-50 z-10"
              onClick={() => setIsPaymentModalOpen(false)}
            ></div>
            <div className="fixed bg-slate-50 grid sm:grid-cols-2 overflow-hidden rounded-md gap-4 z-10 h-full w-full sm:h-fit sm:w-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col p-2 gap-2">
                <h2 className="text-xl mb-2 font-normal text-accent-content">
                  Payment Details
                </h2>
                <PaymentCartItemsList cartItems={cartItems} />
              </div>
              <div className="w-full flex flex-col border p-4 pt-2">
                <h2 className="text-xl mb-2 font-normal text-accent-content">
                  Payment Form
                </h2>
                {
                  {
                    card: <PaymentForm isCartEmpty={isCartEmpty} />,
                    cash: <CashOnDeliveryForm isCartEmpty={isCartEmpty} />,
                  }[paymentMethod]
                }
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
