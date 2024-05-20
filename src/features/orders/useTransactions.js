import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../../api/apiAdmin";

const useTransactions = () => {
  const {
    isLoading,
    data: transactions,
    error,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  return { isLoading, error, transactions };
};

export default useTransactions;
