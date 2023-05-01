import { NextPage } from "next";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import { NavProps } from "lib/types";

import MobileMenu from "components/ui/MobileNav";
import { SunIcon } from "components/icons/SunIcon";
import { MoonIcon } from "components/icons/MoonIcon";

const pages = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About",
  },
  {
    href: "/dashboard",
    text: "Dashboard",
  },
];

const NavItem: NextPage<NavProps> = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link
      href={href}
      className={cn(
        isActive
          ? "font-semibold text-gray-800 dark:text-gray-200"
          : "font-normal text-gray-600 dark:text-gray-400",
        "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
      )}
    >
      <span className="capsize">{text}</span>
    </Link>
  );
};
const Nav: NextPage = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-opacity-60 dark:text-gray-100">
      <div className="ml-[-0.60rem]">
        <MobileMenu />
        {pages.map((page, index) => (
          <NavItem key={index} href={page.href} text={page.text} />
        ))}
      </div>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
        onClick={() => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}
      >
        {mounted && resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  );
};

export default Nav;
