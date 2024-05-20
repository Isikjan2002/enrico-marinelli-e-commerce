import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../api/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { store } from "../../store";
import { loginUser, logoutUser } from "./authSlice";

export function useSignin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (loginState) {
      localStorage.clear();
      store.dispatch(logoutUser());
    }
  }, []);

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);

      localStorage.setItem("id", user.user.id);
      store.dispatch(loginUser());

      const isAdmin = user?.user?.email === "admin@gmail.com";

      if (isAdmin) {
        navigate("/admin/users", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
