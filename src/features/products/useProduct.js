import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../api/apiAdmin";

const useProduct = () => {
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProduct,
  });

  return { isLoading, error, product };
};

export default useProduct;
