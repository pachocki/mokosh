"use client";

import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CategoriesMenuProps {
  data: Category[];
  column?: boolean;
}

const CategoriesMenu: React.FC<CategoriesMenuProps> = ({ data,column }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div className={`container mx-auto pl-10 sm:pl-2 ${column?"md:pl-2 " : " " }`}>
    <h1 className="pb-5 text-3xl  text-white italic sm:text-xl sm:pb-2">Categories</h1>
      <div className={`flex  gap-2  ${column? "flex-col sm:flex-row" :" "}`}>
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={` flex justify-center w-16 items-center text-sm bg-black rounded-xl transition-all text-white px-5 py-2 sm:px-1 sm:py-1 sm:w-12 ${
              route.active ? "bg-white !text-black" : "text-white"
            }`}
          >
            <span className="sm:text-[0.8rem]">{route.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesMenu;
