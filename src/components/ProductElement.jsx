import { Link } from "react-router-dom";

const ProductElement = ({ id, title, image, rating, price, brandName }) => {
  const product = {
    id,
    title,
    image,
    rating,
    price,
    brandName,
    amount: 1,
  };
  
  return (
    <div className="max-w-2xl">
      <div className="max-w-sm bg-base-100">
        <Link to={`/shop/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
          <img
            className="w-full h-80 object-cover object-center"
            src={image}
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-5 flex flex-col items-center justify-center">
          <Link
            to={`/shop/product/${id}`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <h3 className="font-semibold text-center text-md mb-5">{title}</h3>
          </Link>
          <span className="text-center text-2xl font-light">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductElement;
