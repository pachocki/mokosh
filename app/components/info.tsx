"use client";
import { MouseEventHandler } from "react";
import { Product } from "@/types";
import Button from "./ui/button";
import useCart from "@/hook/useCart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  // Define the click event handler for adding an item to the cart
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Add the product to the cart
    cart.addItem(data); // Assuming data is a valid Product object
  };
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold lg:text-3xl sm:text-2xl ">{data?.name}</h1>
      <div className="flex flex-col gap-3 pt-10 lg:pt-5 sm:pt-2">
        <div className="flex items-center gap-x-4  font-semibold  text-2xl sm:text-xl">
          <h3 className="italic">Price:</h3>
          <h3>${data?.price}</h3>
        </div>
        <div className="flex items-center gap-x-4  font-semibold  text-2xl sm:text-xl">
          <h3 className="italic">Category:</h3>
          <h3>{data?.category?.name}</h3>
        </div>

        <div className="flex items-center gap-x-4 font-semibold  text-2xl sm:text-xl">
          <h3 className="italic">Size:</h3>
          <h3>{data?.size?.value}</h3>
        </div>
        <div className="flex flex-col gap-x-4">
          <h3 className="font-semibold  text-2xl italic pb-2 sm:text-2xl">Description:</h3>
          <p className="text-xl sm:text-lg">{data?.description}</p>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          label="Add to Cart"
          link=""
          background
          extra="px-5 py-2 justify-center text-white"
        />
      </div>
    </div>
  );
};

export default Info;
