/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Filters, ProductElement } from "../components";
import "../styles/Shop.css";
import { useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";
import supabase from "../api/supabase";

export const shopLoader = async ({ request }) => {
  const params = Object.fromEntries(
    new URL(request.url).searchParams.entries()
  );

  const filterObj = {
    brand: params.brand || "all",
    category: params.category || "all",
    search: params.search || "",
  };

  let query = supabase.from("products").select("*");

  if (filterObj.category !== "all") {
    query = query.eq("category", filterObj.category);
  }

  if (filterObj.search !== "") {
    query = query.ilike("name", `%${filterObj.search}%`);
  }

  try {
    const { data, error } = await query;

    if (error) throw error;

    return {
      productsData: data,
      productsLength: data.length,
    };
  } catch (error) {
    console.log(error);
    return { error: "Failed to fetch products" };
  }
};

const Shop = () => {
  const productLoaderData = useLoaderData();

  const products = productLoaderData?.productsData;

  return (
    <>
      <div className="flex flex-col container pt-6 mx-auto gap-12 p-4 sm:p-0 min-h-screen">
        {productLoaderData?.length === 0 && (
          <h2 className="text-accent-content text-center text-4xl">
            No products found for this filter
          </h2>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-[1fr,4fr] py-20 gap-4">
          <Filters />

          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
            {products?.length !== 0 &&
              products?.map((product) => (
                <ProductElement
                  key={nanoid()}
                  id={product.id}
                  title={product.name}
                  image={product.imageUrl}
                  rating={product.rating}
                  price={product.price}
                  brandName={product.brandName}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
