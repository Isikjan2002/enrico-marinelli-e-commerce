import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../api/apiAuth";
import { toast } from "react-toastify";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Welcome! You have successfully registered. Please log in."
      );
    },
    onError: (err) => toast.error(err.message),
  });

  return { signup, isLoading };
}
