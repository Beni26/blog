"use client";

import { useAuth } from "context/AuthContext";
import NavLink from "./NavLink";

interface NavLinkItem {
  id: number;
  title: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  {
    id: 1,
    title: "خانه",
    path: "/",
  },
  {
    id: 2,
    title: "بلاگ ها",
    path: "/blogs",
  },
];

const Header = () => {
  const { user, isLoading } = useAuth();

  return (
    <header
      className={`z-10 shadow-md   sticky top-0  transition-all duration-200 border-b border-b-secondary-300 mb-10 bg-white ${
        isLoading && "blur-[3px]"
      } `}
    >
      <nav className="container mx-auto xl:max-w-screen-xl p-4 flex justify-between">
        <ul className="flex items-center  gap-x-10">
          {navLinks.map((navLink) => (
            <li key={navLink.id}>
              <NavLink path={navLink.path}>{navLink.title}</NavLink>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            {user ? (
              <NavLink path="/profile">پروفایل</NavLink>
            ) : (
              <NavLink path="/signin">ورود</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
