const RefundModal = ({ setRefundModal, cancelOrder, paymentMethod }) => {
  const handleCancel = () => {
    cancelOrder();
    setRefundModal(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center">
      {/* are you sure message */}
      <div className="bg-white w-1/3 p-6 h-fit flex flex-col items-end justify-center rounded-sm">
        <h2 className="text-xl">
          {paymentMethod === "card" && "Refund will be processed in 3-5 days"}
          {paymentMethod === "cash" && "Order has been cancelled"}
        </h2>
        <button
          className="btn rounded-sm px-6 bg-blue-500 text-white mt-4 ml-auto"
          onClick={handleCancel}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RefundModal;