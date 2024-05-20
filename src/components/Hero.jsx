import { Link } from "react-router-dom";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="h-[80dvh] z-0 relative w-full flex items-center justify-center sm:justify-end">
      <img
        src="enrico/model-4.jpeg"
        alt="hero"
        className="absolute object-bottom w-full h-full object-cover items-start"
      />

      <div className="absolute w-full h-full bg-black bg-opacity-20"></div>

      <div className="flex flex-col sm:w-2/4 z-10 uppercase items-center sm:mr-20 justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-normal mb-8">
          Stylist Picks Beat <br /> The Heat
        </h1>
        <Link
          to="/shop"
          className="border-white border-2 text-2xl py-2 px-4 text-white font-bold"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
