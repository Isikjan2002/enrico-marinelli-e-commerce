import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useSignup } from "../features/auth/useSignup";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");

  const { signup } = useSignup();

  const isValidate = () => {
    let isProceed = true;
    let errorMessage = "";

    if (email.length === 0) {
      isProceed = false;
      errorMessage = "Please enter the value in email field";
    } else if (password.length < 6) {
      isProceed = false;
      errorMessage = "Please enter a password longer than 5 characters";
    } else if (confirmPassword.length < 6) {
      isProceed = false;
      errorMessage = "Please enter a confirm password longer than 5 characters";
    } else if (password !== confirmPassword) {
      isProceed = false;
      errorMessage = "Passwords must match";
    }

    if (!isProceed) {
      toast.warn(errorMessage);
    }

    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let regObj = {
      email,
      password,
      name,
      lastname,
      phone,
      adress,
    };

    if (isValidate()) {
      signup(regObj);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      <div className="w-full h-full flex justify-center items-center">
        <form
          className="sm:w-1/2 h-full flex gap-4 flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold">Register</h1>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Lastname"
            className="w-full p-2 border"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-2 border"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Adress"
            className="w-full p-2 border"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 border"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            className="w-full p-2 border bg-black text-white"
            type="submit"
          >
            Register
          </button>
          <Link to="/login" className="text-blue-500">
            Already have an account? Login here
          </Link>
        </form>
      </div>
      <div className="w-full h-full hidden sm:flex justify-center items-center">
        <img
          src="/enrico/model-2.jpeg"
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
