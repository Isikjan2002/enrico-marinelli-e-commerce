import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/apiAdmin";

const useProducts = () => {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { isLoading, error, products };
};

export default useProducts;
