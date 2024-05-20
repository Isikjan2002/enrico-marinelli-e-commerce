const CashOnDeliveryForm = ({ isCartEmpty }) => {
  return (
    <form className="form-control flex gap-4 h-full flex-col w-full">
      <div className="w-full">
        <label htmlFor="name" className="label">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Islam ELDemery"
          className="input w-full input-bordered"
          defaultValue="Islam ELDemery"
        />
      </div>
      <div className="w-full">
        <label htmlFor="phone" className="label">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          placeholder="1234567890"
          className="input input-bordered w-full"
          defaultValue="1234567890"
        />
      </div>
      <div className="w-full">
        <label htmlFor="address" className="label">
          Address
        </label>
        <input
          type="text"
          id="address"
          placeholder="1234 Main St"
          className="input input-bordered w-full"
          defaultValue="1234 Main St"
        />
      </div>
      <button
        className="btn bg-green-600 text-white mt-4"
        onClick={isCartEmpty}
      >
        Order Now
      </button>
    </form>
  );
};

export default CashOnDeliveryForm;
