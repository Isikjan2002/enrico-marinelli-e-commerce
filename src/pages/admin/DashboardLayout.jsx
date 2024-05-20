import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  HiArchiveBox,
  HiCreditCard,
  HiDocumentPlus,
  HiMiniBars3BottomLeft,
  HiUser,
} from "react-icons/hi2";
import { useSignout } from "../../features/auth/useSignout";

const DashboardLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="grid relative sm:grid-cols-[18%,auto]">
      <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

      <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const { signout } = useSignout();

  return (
    <div
      className={`h-screen p-4 sm:flex flex-col gap-4  text-black border-r ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      <h1 className="text-2xl font-semibold hidden sm:block">Admin Panel</h1>
      <ul className="flex flex-col gap-2" onClick={() => setIsMenuOpen(false)}>
        <SidebarItem to="users" icon={<HiUser />} title="Users" />
        <SidebarItem
          to="transactions"
          icon={<HiCreditCard />}
          title="Transactions"
        />
        <SidebarItem to="products" icon={<HiArchiveBox />} title="Products" />
        <SidebarItem
          to="add-product"
          icon={<HiDocumentPlus />}
          title="Add Product"
        />

        <li>
          <button
            onClick={signout}
            className="flex h-12 items-center gap-2 px-4 text-black hover:bg-black hover:text-white"
          >
            <HiUser />
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};

const SidebarItem = ({ icon, title, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => {
          return isActive
            ? "flex h-12 items-center gap-2 border bg-black px-4 text-white"
            : "flex h-12 items-center gap-2 px-4 text-black hover:bg-black hover:text-white";
        }}
      >
        {icon}
        {title}
      </NavLink>
    </li>
  );
};

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="flex justify-between sm:hidden items-center bg-black text-white p-4">
      <h1 className="text-2xl font-semibold">Admin Panel</h1>
      <button
        className="btn btn-circle btn-ghost"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <HiMiniBars3BottomLeft className="text-2xl text-white text-accent-content" />
      </button>
    </div>
  );
};
