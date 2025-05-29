"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  path: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ path, children }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${
        pathname === path ? "text-indigo-600" : "text-gray-700"
      } hover:text-indigo-700 transform ease-in-out duration-300 font-bold`}
      href={path}
    >
      {children}
    </Link>
  );
};

export default NavLink;
