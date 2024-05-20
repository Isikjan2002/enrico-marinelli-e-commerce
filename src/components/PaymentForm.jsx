const PaymentForm = ({ isCartEmpty }) => {
  return (
    <form className="form-control flex gap-4 h-full flex-col w-full">
      <div className="flex gap-2 w-full">
        <div className="w-full">
          <label htmlFor="name" className="label">
            Name on Card
          </label>
          <input
            type="text"
            id="name"
            placeholder="Islam ELDemery"
            className="input w-full input-bordered"
            defaultValue="Islam ELDemery"
          />
        </div>
        <div>
          <label htmlFor="postal" className="label">
            Postal Code
          </label>
          <input
            type="text"
            id="postal"
            placeholder="A1A 1A1"
            className="input input-bordered"
            defaultValue="A1A 1A1"
          />
        </div>
      </div>
      <div className="w-full">
        <label htmlFor="card" className="label">
          Card Number
        </label>
        <input
          type="text"
          id="card"
          placeholder="1234 5678 9012 3456"
          className="input input-bordered w-full"
          defaultValue="1234 5678 9012 3456"
        />
      </div>
      <div className="flex gap-2 justify-between">
        <div className="w-full">
          <label htmlFor="expiry" className="label">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry"
            placeholder="MM/YY"
            className="input input-bordered w-full"
            defaultValue="12/23"
          />
        </div>
        <div className="w-full">
          <label htmlFor="cvv" className="label">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            placeholder="123"
            className="input input-bordered w-full"
            defaultValue="123"
          />
        </div>
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
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;
