import { useState } from "react";
import { QuantityInput } from "../components";
import { FaCartShopping } from "react-icons/fa6";

import { useLoaderData } from "react-router-dom";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

import { toast } from "react-toastify";
import supabase from "../api/supabase";

export const singleProductLoader = async ({ params }) => {
  const { id } = params;

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error("Error getting product data");

  return { productData: data };
};

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(0);

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { cartItems } = useSelector((state) => state.cart);

  const { productData } = useLoaderData();

  const product = {
    id: productData?.id + size,
    title: productData?.name,
    image: productData?.imageUrl,
    price: productData?.price,
    brandName: productData?.brandName,
    amount: quantity,
    left_in_stock: productData?.left_in_stock,
    selectedSize: productData?.availableSizes[size],
  };

  const productInCart = cartItems.find((item) => item.id === product.id);

  const handleReachLimit = () => {
    if (productInCart.amount >= productData?.left_in_stock) {
      toast.error(`You can only purchase ${productData?.left_in_stock} items`);
    }
  };

  const isReachLimit = productInCart?.amount >= productData?.left_in_stock;

  return (
    <>
      <div className="grid grid-cols-2 max-w-7xl mx-auto my-12 max-lg:grid-cols-1 max-lg:mx-5">
        <div className="">
          <img
            src={productData.imageUrl}
            className="w-5/6 h-fit object-cover text-center border border-gray-600 cursor-pointer"
            alt={productData.name}
          />
        </div>
        <div className="single-product-content flex flex-col gap-y-5 max-lg:mt-2">
          <h2 className="text-4xl font-bold max-sm:text-3xl text-accent-content">
            {productData?.name}
          </h2>
          <p className="text-3xl text-error">
            ${productData?.price.toFixed(2)}
          </p>
          <div className="text-xl max-sm:text-lg text-accent-content">
            {parse(productData?.description)}
          </div>

          <div className="flex flex-col gap-y-2">
            <label htmlFor="Size" className="sr-only">
              {" "}
              Size{" "}
            </label>
            <select
              name="Size"
              id="Size"
              className="w-1/3 p-2 border border-gray-600 text-xl"
              onChange={(e) => setSize(e.target.value)}
            >
              {productData?.availableSizes.map((size, index) => (
                <option key={index} value={index}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h3 className="text-xl text-accent-content">
              Left in stock: {productData?.left_in_stock}
            </h3>
          </div>

          <div>
            <label htmlFor="Quantity" className="sr-only">
              {" "}
              Quantity{" "}
            </label>

            <div className="flex items-center gap-1">
              <QuantityInput
                quantity={quantity}
                setQuantity={setQuantity}
                quantityLimit={productData?.left_in_stock}
              />
            </div>
          </div>
          <div className="flex flex-row gap-x-2 max-sm:flex-col max-sm:gap-x">
            <button
              className="btn bg-blue-900 rounded-none hover:bg-blue-500 text-white"
              disabled={isReachLimit}
              onClick={() => {
                if (loginState) {
                  dispatch(addToCart(product));
                  handleReachLimit();
                } else {
                  toast.error(
                    "You must be logged in to add products to the cart"
                  );
                }
              }}
            >
              <FaCartShopping className="text-xl mr-1" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
