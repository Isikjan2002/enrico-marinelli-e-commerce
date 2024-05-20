import { Link } from "react-router-dom";

import { nanoid } from "nanoid";
import useOrders from "../features/orders/useOrders";

const OrderHistory = () => {
  const { orders, isLoading } = useOrders();

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center animate-pulse text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-4 min-h-screen mx-auto mt-10 sm:px-20">
      <div className="border rounded-xl overflow-hidden shadow-md">
        {orders?.length === 0 ? (
          <div className="text-center">
            <h1 className="text-4xl text-accent-content">
              There are no orders in the order history
            </h1>
            <Link
              to="/shop"
              className="btn bg-blue-600 hover:bg-blue-500 text-white mt-10"
            >
              Make your first order
            </Link>
          </div>
        ) : (
          orders?.map((order) => {
            return (
              <div
                key={nanoid()}
                className="overflow-scroll rounded-none bg-base-200"
              >
                <div className="w-full text-xl p-2 font-medium text-accent-content">
                  Order {order.id} - {order.orderStatus}
                </div>
                <div className="collapse-open bg-slate-200">
                  <div className="overflow-x-scroll">
                    <table className="table w-full">
                      {/* head */}
                      <thead>
                        <tr className="text-accent-content bg-white">
                          <th>Image</th>
                          <th>Name</th>
                          <th>Size</th>
                          <th>Amount</th>
                          <th>Price</th>
                          <th className="w-60">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order.cartItems.map((product) => (
                          <tr className="text-accent-content" key={nanoid()}>
                            <th className="w-20">
                              <img
                                src={product.image}
                                alt=""
                                className="w-10"
                              />
                            </th>
                            <td>{product.title}</td>
                            <td>{product.selectedSize || "N/A"}</td>
                            <td>{product.amount}</td>
                            <td>
                              ${(product.price * product.amount).toFixed(2)}
                            </td>
                            <td className="flex items-center">
                              <Link
                                to={`/order/tracking/${order.id}`}
                                className="p-2 bg-slate-800 hover:bg-blue-500 text-white"
                              >
                                Track Order
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
