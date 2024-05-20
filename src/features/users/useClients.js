import { useQuery } from "@tanstack/react-query";
import { getClients } from "../../api/apiAdmin";

export function useClients() {
  const {
    data: clientsData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });

  return {
    clientsData,
    isLoading,
    isError,
  };
}
