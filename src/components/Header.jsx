import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

import { AiOutlineShoppingCart } from "react-icons/ai";

import { FaWindowClose } from "react-icons/fa";

import "../styles/Header.css";
import { useSelector } from "react-redux";

import { useUser } from "../features/auth/useUser";
import { useSignout } from "../features/auth/useSignout";

const Header = () => {
  const { amount } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isAuthenticated } = useUser();
  const { signout } = useSignout();

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isAuthenticated]);

  return (
    <div className="flex justify-between z-100 items-center p-4">
      <div>
        <Link to="/" className="font-normal text-2xl text-accent-content">
          Enrico Marinelli
        </Link>
      </div>

      <div className="hidden sm:flex items-center gap-32">
        <div className="flex items-center gap-12">
          <NavLink
            to="/"
            className="text-md uppercase text-accent-content"
            activeClassName="active"
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className="text-md uppercase text-accent-content"
            activeClassName="active"
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className="text-md uppercase text-accent-content"
            activeClassName="active"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="text-md uppercase text-accent-content"
            activeClassName="active"
          >
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <AiOutlineShoppingCart className="text-2xl text-accent-content" />
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg text-accent-content">
                  {amount} Items
                </span>
                <span className="text-info text-accent-content">
                  Subtotal: ${total.toFixed(2)}
                </span>
                <div className="card-actions">
                  <Link
                    to="/cart"
                    className="btn rounded-sm bg-blue-600 btn-block text-white hover:bg-blue-500 text-base-content"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://xsgames.co/randomusers/avatar.php?g=male" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/order-history" className="text-accent-content">
                    Order history
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="text-accent-content">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-ghost">
              Login
            </Link>
          )}
        </div>
      </div>

      <div className="sm:hidden">
        {/* cart button */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <AiOutlineShoppingCart className="text-2xl text-accent-content" />
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg text-accent-content">
                {amount} Items
              </span>
              <span className="text-info text-accent-content">
                Subtotal: ${total.toFixed(2)}
              </span>
              <div className="card-actions">
                <Link
                  to="/cart"
                  className="btn bg-blue-600 btn-block text-white hover:bg-blue-500 text-base-content"
                >
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button
          className="btn btn-circle btn-ghost"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiMiniBars3BottomLeft className="text-2xl text-accent-content" />
        </button>

        {isMenuOpen && (
          <div className="fixed z-10 top-0 right-0 w-4/6  h-full bg-base-100 bg-opacity-50 flex items-center justify-center">
            <div className="w-full h-full bg-base-100 shadow-lg p-4">
              <div className="flex justify-end">
                <button
                  className="btn btn-circle btn-ghost"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaWindowClose className="text-2xl text-accent-content" />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <NavLink
                  to="/"
                  className="text-2xl text-accent-content"
                  activeClassName="active"
                  end
                >
                  Home
                </NavLink>
                <NavLink
                  to="/shop"
                  className="text-2xl text-accent-content"
                  activeClassName="active"
                >
                  Shop
                </NavLink>
                <NavLink
                  to="/order-history"
                  className="text-2xl text-accent-content"
                  activeClassName="active"
                >
                  Order history
                </NavLink>
                <NavLink
                  to="/about"
                  className="text-2xl text-accent-content"
                  activeClassName="active"
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-2xl text-accent-content"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
                {isAuthenticated ? (
                  <NavLink
                    className="text-2xl text-accent-content"
                    onClick={() => signout()}
                    to="/"
                  >
                    Logout
                  </NavLink>
                ) : (
                  <NavLink
                    to="/login"
                    className="text-2xl text-accent-content"
                    activeClassName="active"
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
