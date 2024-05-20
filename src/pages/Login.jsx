import { useState } from "react";
import { useSignin } from "../features/auth/useSignin";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useSignin();

  const isValidate = () => {
    let isProceed = true;

    if (email.length === 0) {
      isProceed = false;
      toast.warn("Please enter a email");
    } else if (password.length < 6) {
      isProceed = false;
      toast.warn("Password must be minimum 6 characters");
    }
    return isProceed;
  };

  const proceedLogin = (e) => {
    e.preventDefault();
    if (isValidate()) {
      login({ email, password });
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      <div className="w-full h-full flex justify-center items-center">
        <form className="sm:w-1/2 h-full flex gap-4 flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">Login</h1>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full p-2 border bg-black text-white"
            onClick={proceedLogin}
            type="submit"
          >
            Login
          </button>
          <Link to="/register" className="text-blue-500">
            Don&apos;t have an account? Register here
          </Link>
        </form>
      </div>
      <div className="w-full hidden h-full sm:flex justify-center items-center">
        <img
          src="/enrico/model-2.jpeg"
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
