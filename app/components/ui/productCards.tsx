"use client";

import { Product } from "@/types";
import Button from "./button";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}
const ProductCards: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div
      className=" flex flex-col cursor-pointer overflow-hidden text-black  bg-white"
      onClick={() => router.push(`/product/${data.id}`)}
    >
      <img
        alt="Image"
        src={data?.images?.[0]?.url}
        className="object-cover  "
      />
      <div className="flex flex-col gap-2 pt-2 pb-5 px-2 text-left h-[190px]">
        <span className="text-lg uppercase  font-bold lg:text-sm ">{data?.name}</span>
        <div className="flex items-center gap-2">
          <span className="text-sm">{data?.category.name} |</span>
          <span className="text-lg font-bold">Price:{data?.price}$</span>{" "}
        </div>
        <Button
          link={`/product/${data.id}`}
          label="read more"
          small
          underline
          extra="pt-5 "
        />
      </div>
    </div>
  );
};

export default ProductCards;
