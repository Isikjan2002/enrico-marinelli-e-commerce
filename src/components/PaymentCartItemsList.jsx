const PaymentCartItemsList = ({ cartItems }) => {
  return cartItems.map(
    ({ id, title, price, image, amount, brandName, selectedSize }) => (
      <div className="flex flex-col" key={id}>
        <div className="border flex p-2 items-center gap-4 h-fit w-full">
          <img
            src={image}
            alt={title}
            className="h-20 rounded-sm w-20 object-cover"
          />

          <div>
            <div className="flex gap-2  w-full flex-col">
              <h3 className="capitalize font-medium text-accent-content">
                {title}
              </h3>
              <h4 className="capitalize text-sm text-accent-content">
                Brand: {brandName}
              </h4>
              <h4 className="capitalize text-sm text-accent-content">
                Size: {selectedSize}
              </h4>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end ml-auto gap-2">
            <p className="font-medium text-accent-content">
              ${price} x {amount}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default PaymentCartItemsList;
