"use client";
import Link from "next/link";
import NavbarActions from "./navbarActions";
import { useState, useEffect } from "react";
import { useCurrentPathname } from "@/hook/useRouteInfo";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentPath = useCurrentPathname();
  const isRoute =
    currentPath.includes("product") ||
    currentPath.includes("shop") ||
    currentPath.includes("cart");
  const isCategory =
    currentPath.includes("category") ||
    currentPath.includes("blog") ||
    currentPath.includes("about");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= window.innerHeight * 0.92);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[99] transition-colors duration-300 ${
        isScrolled ? "bg-[#f5f0f0] !text-black" : "text-white sm:text-orange-600"
      } ${isRoute ? "bg-gray-400 !text-white" : "text-white"}
      ${isCategory ? "bg-stone-400 !text-white" : "text-white"}`}
    >
      <div className="container mx-auto px-5 pt-4 flex justify-between items-center gap-2 sm:pb-2">
        <div className="flex gap-4 font-bold text-xl md:hidden">
          <Link href="/shop" className="hover:opacity-40">
            SHOP
          </Link>
          <Link href="/about" className="hover:opacity-40">
            ABOUT US
          </Link>
          <Link href="/blog" className="hover:opacity-40">
            BLOG
          </Link>
        </div>
        <div>
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <span className="font-bold text-4xl tracking-widest sm:text-xl sm: sm:stroke-2 sm:stroke-current ">
              mokosh
            </span>
            <span className="font-bold text-sm tracking-widest sm:hidden">
              cosmetics
            </span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="md:hidden">
            <NavbarActions closeMobileMenu={closeMobileMenu} />
          </div>
          <div
            className={`hidden  cursor-pointer z-20 hover:bg-green md:block ${
              isMobileMenuOpen ? "bg-black !text-white" : "bg-black text-white"
            } py-3 px-4 rounded-xl`}
            onClick={isMobileMenuOpen ? closeMobileMenu : toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <CgClose className="text-xl" />
            ) : (
              <GiHamburgerMenu className="text-xl" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="  bg-white text-black w-1/2 absolute top-0 right-0 p-4 h-screen z-[1] sm:w-3/4 xs:!w-full">
          <ul className="text-4xl flex flex-col items-center justify-center h-full gap-5 relative">
            <li>
              <Link href="/" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/shop" onClick={closeMobileMenu}>
                SHOP
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMobileMenu}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={closeMobileMenu}>
                BLOG
              </Link>
            </li>
            <li>
              <NavbarActions closeMobileMenu={closeMobileMenu} />
            </li>
            <li className="absolute bottom-5">mokosh</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
