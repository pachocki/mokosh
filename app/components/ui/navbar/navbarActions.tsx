"use client";
import useCart from "@/hook/useCart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiShoppingBag, FiSearch } from "react-icons/fi";

interface NavbarActionsProps {
  closeMobileMenu: () => void; // Define the type of closeMobileMenu
}

const NavbarActions: React.FC<NavbarActionsProps> = ({ closeMobileMenu }) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);
  const cart = useCart();
  return (
    <div className="font-bold text-xl flex gap-4 items-center justify-center">
      <button
        onClick={() => {
          router.push("/cart");
          closeMobileMenu(); // Call closeMobileMenu when the button is clicked
        }}
        className="cursor-pointer hover:opacity-80 relative flex justify-center items-center gap-2 bg-black rounded-xl text-white py-2 px-4"
      >
        <FiShoppingBag />
        <span className="">{cart.items.length}</span>
      </button>
    </div>
  );
};

export default NavbarActions;
