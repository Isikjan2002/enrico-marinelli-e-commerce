import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditProduct } from "../../api/apiAdmin";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createProduct, isLoading: isCreating } = useMutation({
    mutationFn: createEditProduct,
    onSuccess: () => {
      toast.success("New product created successfully");
      queryClient.invalidateQueries({ queryKey: ["products"] });

      navigate("/admin/products", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createProduct };
};

export default useCreateProduct;
