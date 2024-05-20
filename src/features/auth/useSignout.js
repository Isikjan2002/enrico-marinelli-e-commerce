import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../api/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: signout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { signout, isLoading };
}
