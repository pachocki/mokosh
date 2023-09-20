"use client";
import { Billboard } from "@/types";
import { getProductById } from "../../actions/getProducts";

import Button from "../ui/button";

interface HeroSectionProps {
  data: Billboard;
}

const HeroSection: React.FC<HeroSectionProps> = async ({ data }) => {
  const product = await getProductById("6580eb87-5427-4278-bd75-89af831591bb");
  const words = data?.label?.split(" ");
  const firstParagraph = words?.slice(0, 1).join(" ");
  const secondParagraph = words?.slice(1, 2).join(" ");
  const thirdParagraph = words?.slice(2, 4).join(" ");

  return (
    <div className="grid grid-cols-[1fr_1.2fr] gap-5 overflow-hidden relative pt-18 bg-[#155043] md:grid-cols-[0.8fr_1fr] sm:flex sm:h-screen">
      <div className="flex flex-col justify-center items-center  text-white  gap-y-8 relative z-10 sm:w-full  ">
        {product?.images.map((item) => (
          <img
            key={item.id}
            src={item.url}
            alt={item.url}
            className="absolute z-[-1] h-[300px] object-cover  -rotate-2 sm:hidden  "
          />
        ))}
        <span className=" text-7xl font-medium sm:text-5xl">
          {firstParagraph}
        </span>
        <span className=" text-7xl pl-20 font-medium  sm:text-5xl xs:pl-0">
          {secondParagraph}
        </span>
        <span className="italic text-5xl pl-40 xl:pl-20 font-semibold sm:text-5xl sm:font-medium xs:pl-0 ">
          {thirdParagraph}
        </span>

        <div className="flex justify-end w-full pt-20 sm:justify-center">
          <Button
            link="/shop"
            label=" Check out our products"
            underline
            extra="sm:text-xl"
          />
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="  relative w-full h-screen aspect-square overflow-hidden bg-cover bg-no-repeat bg-center object-fit sm:absolute sm:inset-0"
      ></div>
    </div>
  );
};

export default HeroSection;
