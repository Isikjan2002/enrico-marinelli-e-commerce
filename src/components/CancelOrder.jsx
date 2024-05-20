const CancelModal = ({ setCancelModal, setRefundModal }) => {
  const handleCancel = () => {
    setCancelModal(false);
    setRefundModal(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex items-center justify-center">
      {/* are you sure message */}
      <div className="bg-white p-4 flex flex-col items-end rounded-sm">
        <h2 className="text-xl">Are you sure you want to cancel this order?</h2>
        <div className="flex items-center gap-4 mt-4">
          <button
            className="btn rounded-sm px-6 bg-red-500 text-white"
            onClick={handleCancel}
          >
            Yes
          </button>
          <button
            className="btn rounded-sm px-6 bg-blue-500 text-white"
            onClick={() => setCancelModal(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelModal;
