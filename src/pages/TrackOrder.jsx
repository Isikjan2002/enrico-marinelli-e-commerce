import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleOrder, updateOrder } from "../api/apiUser";
import CancelModal from "../components/CancelOrder";
import RefundModal from "../components/RefundModal";

const TrackOrder = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [cancelModal, setCancelModal] = useState(false);
  const [refundModal, setRefundModal] = useState(false);
  const loginState = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const data = await getSingleOrder(id);
        setOrder(data[0]);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    getOrder();
  }, [id]);

  const cancelOrder = async () => {
    let orderObj = {
      orderStatus: "cancelled",
    };

    try {
      await updateOrder(id, orderObj);
      setOrder(
        (prev) => (prev = { ...prev, orderStatus: orderObj.orderStatus })
      );
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const confirmDelivery = async () => {
    let orderObj = {
      orderStatus: "delivered",
    };

    try {
      await updateOrder(id, orderObj);
      setOrder(
        (prev) => (prev = { ...prev, orderStatus: orderObj.orderStatus })
      );
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  if (!loginState) {
    return (
      <div className="min-h-screen w-full p-4 sm:container sm:mx-auto">
        <h1 className="text-4xl">Track Order</h1>
        <p className="mt-5">Please login to track your order</p>

        <Link to="/login" className="btn bg-blue-500 text-white mt-5">
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:container sm:mx-auto">
      {cancelModal && (
        <CancelModal
          setCancelModal={setCancelModal}
          setRefundModal={setRefundModal}
        />
      )}

      {refundModal && (
        <RefundModal
          setRefundModal={setRefundModal}
          cancelOrder={cancelOrder}
          paymentMethod={order.payment_method}
        />
      )}

      <h1 className="text-4xl">Track Order</h1>
      <p className="mt-5">
        Your order with id <strong>{id}</strong> is currently{" "}
        <strong>{order.orderStatus}</strong>
      </p>

      <div className="mt-10 border">
        <div className="border-b p-3">
          <h2 className="text-xl">Order Details</h2>
        </div>
        <div className="p-3">
          <p>
            <strong>Order ID:</strong> {order.id}
          </p>
          <p>
            <strong>Order Status:</strong> {order.orderStatus}
          </p>
        </div>

        {/* progress bar */}
        <div className="p-3">
          <div className="h-fit text-xs flex items-center justify-between rounded-full w-full bg-blue-600">
            {order.orderStatus == "cancelled" && (
              <div className="h-full w-full text-center px-4 rounded-full bg-error">
                cancelled
              </div>
            )}

            {order.orderStatus == "in progress" && (
              <div className="h-full sm:w-1/3 bg-green-500 text-center px-4 text-white rounded-full">
                in progress
              </div>
            )}

            {order.orderStatus == "delivered" && (
              <div className="h-full w-full text-center px-4 text-white rounded-full">
                delivered
              </div>
            )}
          </div>
        </div>

        <div className="border-t p-3">
          <h2 className="text-xl">Items</h2>
          <div className="w-full">
            {order.cartItems?.map((item) => (
              <table className="table w-full" key={item.id}>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={item.image}
                        className="w-16 h-16 object-cover"
                        alt={item.title}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.amount}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </div>

        <div className="p-3 w-full flex items-center gap-2 justify-between sm:justify-end">
          {order.orderStatus !== "cancelled" &&
            order.orderStatus !== "delivered" && (
              <button
                className="btn rounded-sm bg-red-500 text-white"
                onClick={() => setCancelModal(true)}
              >
                Cancel Order
              </button>
            )}

          {(order.orderStatus === "in progress" ||
            order.orderStatus === "pending") && (
            <button
              className="btn rounded-sm bg-green-500 text-white"
              onClick={confirmDelivery}
            >
              Confirm Delivery
            </button>
          )}

          {order.orderStatus === "delivered" && (
            <button className="btn rounded-sm bg-blue-500 text-white" disabled>
              Order Delivered
            </button>
          )}

          {order.orderStatus === "cancelled" && (
            <button
              className="btn rounded-sm bg-red-500 text-white"
              disabled
              onClick={() => setIsCanceled(true)}
            >
              Order Cancelled
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
