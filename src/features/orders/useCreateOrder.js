import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createOrder as createOrderApi } from "../../api/apiUser";

const useCreateOrder = () => {
  const queryClient = useQueryClient();

  const { mutate: createOrder, isLoading: isCreating } = useMutation({
    mutationFn: (order) => createOrderApi(order),
    onSuccess: (data) => {
      toast.success("Order created successfully");
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createOrder };
};

export default useCreateOrder;
