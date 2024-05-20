import { updateOrder } from "../../api/apiUser";
import useTransactions from "../../features/orders/useTransactions";

const Transactions = () => {
  const { isLoading, error, transactions } = useTransactions();

  if (isLoading)
    return (
      <div className="h-full w-full flex items-center justify-center">
        Loading...
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  const confirmDelivery = async (id, e) => {
    let orderObj = {
      orderStatus: e.target.value.toLowerCase(),
    };

    try {
      await updateOrder(id, orderObj);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 w-full">
      <h1 className="text-3xl font-semibold mb-4">Orders</h1>
      <div className="overflow-x-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-surface">
                  <thead className="border-b bg-slate-50 border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Username
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Order Status
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Subtotal
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Cart Items
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Delivery Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="shadow-xl">
                    {transactions.map((order, index) => (
                      <tr
                        key={order.id}
                        className="border-b border-neutral-200 dark:border-white/10"
                      >
                        <td className="whitespace-nowrap border-y px-6 py-4 font-medium">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          {order.user[0].name || order.user[0].email}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          {order.orderStatus}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          {order.subtotal}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          {order.cartItems.map((item) => (
                            <div key={item.id}>
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-10 h-10"
                              />
                              <p>{item.title}</p>
                            </div>
                          ))}
                        </td>
                        <td className="whitespace-nowrap border-y px-6 py-4">
                          <select
                            className="border-1 p-1 bg-transparent w-full text-slate-500"
                            onChange={(e) => confirmDelivery(order.id, e)}
                          >
                            <option
                              value="pending"
                              selected={order.orderStatus === "pending"}
                              className="text-slate-500"
                            >
                              Pending
                            </option>
                            <option
                              value="in progress"
                              selected={order.orderStatus === "in progress"}
                              className="text-slate-500"
                            >
                              In Progress
                            </option>
                            <option
                              value="delivered"
                              selected={order.orderStatus === "delivered"}
                              className="text-slate-500"
                            >
                              Delivered
                            </option>
                            <option
                              value="cancelled"
                              selected={order.orderStatus === "cancelled"}
                              className="text-slate-500"
                            >
                              Cancelled
                            </option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
