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
  const user = false;

  return (
    <header className="shadow-md">
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
              <NavLink path="/login">ورود</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
