import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  const menuItems = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <>
      <div className="relative w-full bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex text-white font-bold text-3xl items-center space-x-2">
            <span>SG</span>
          </div>
          <div className="hidden grow items-start lg:flex">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-md font-semibold text-white"
                  >
                    {item.name}
                    <span></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden space-x-2 lg:block">
            <button
              type="button"
              className="rounded-md bg-transparent px-3 py-2 text-md font-semibold text-white hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Get Start Today
            </button>
            <button
              type="button"
              className="rounded-md border border-black px-3 py-2 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
