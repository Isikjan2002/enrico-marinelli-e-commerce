import "../styles/Landing.css";
import { Hero, ProductElement } from "../components";
import { useLoaderData, useNavigation } from "react-router-dom";
import supabase from "../api/supabase";

export const landingLoader = async () => {
  const { data } = await supabase.from("products").select("*");

  return { products: data };
};

const Landing = () => {
  const { products } = useLoaderData();

  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Hero />

      <div className="selected-products z-0">
        <div className="my-12 max-md:text-4xl">
          <h2 className="text-xl sm:text-3xl text-center font-bold text-accent-content">
            Discover NEW Arrivals
          </h2>
          <p className="text-center text-sm sm:text-md">
            Recently added shirts!
          </p>
        </div>
        <div className="selected-products-grid gap-4 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductElement
              key={product.id}
              id={product.id}
              title={product.name}
              image={product.imageUrl}
              rating={product.rating}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Landing;
