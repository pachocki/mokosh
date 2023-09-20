"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function useCurrentPathname() {
  const pathname = usePathname();
  const [currentPathname, setCurrentPathname] = useState(pathname);

  useEffect(() => {
    setCurrentPathname(pathname);
  }, [pathname]);

  return currentPathname;
}
