import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../api/apiUser";

const useOrders = () => {
  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return { isLoading, error, orders };
};

export default useOrders;
