import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-slate-50 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 flex items-center gap-4 lg:mb-0 mb-6">
              <a
                className="bg-white flex text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                href="https://www.instagram.com/enricomarinelli_sam/"
                target="_blank"
                rel="noreferrer"
              >
                <FaSquareInstagram className="text-2xl" />
              </a>
              <a
                className="bg-white flex text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                href="https://www.facebook.com/people/Enricomarinellisam/61554328480691/?mibextid=LQQJ4d"
                target="_blank"
                rel="noreferrer"
              >
                <FaSquareFacebook className="text-2xl" />
              </a>
              <a
                className="bg-white flex text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                href="https://t.me/enricomarinelli_sam"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
