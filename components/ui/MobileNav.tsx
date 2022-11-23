import cn from "classnames";
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { useState, useEffect } from "react";
import styles from "styles/mobile-nav.module.css";
import { NextPage } from "next";

import { NavProps } from "lib/types";
import { useRouter } from "next/router";

import { CrossIcon } from "components/icons/CrossIcon";
import { MenuIcon } from "components/icons/MenuIcon";
const pages: NavProps[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About",
  },

  {
    href: "/projects",
    text: "Projects",
  },
  {
    href: "/dashboard",
    text: "Dashboard",
  },
  {
    href: "/lists",
    text: "Lists",
  },
  {
    href: "/snippets",
    text: "Snippets",
  },
];

const NavItem: NextPage<NavProps> = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <li
      className={cn(
        isActive
          ? "font-semibold text-gray-800 dark:text-gray-200"
          : "font-normal text-gray-600 dark:text-gray-400",
        "border-b border-gray-300 dark:border-gray-700 text-sm"
      )}
      style={{ transitionDelay: "150ms" }}
    >
      <Link href={href} className="flex w-auto pb-4">
        {text}
      </Link>
    </li>
  );
};
const MobileMenu: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, "visible md:hidden")}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            "flex flex-col absolute bg-slate-300 dark:bg-slate-800",
            isMenuRendered && styles.menuRendered
          )}
        >
          {pages.map((page, index) => (
            <NavItem key={index} text={page.text} href={page.href} />
          ))}
        </ul>
      )}
    </>
  );
};





export default MobileMenu;
