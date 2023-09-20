"use client";
import CartItem from "@/app/components/cartItem";
import Summary from "@/app/components/summary";
import useCart from "@/hook/useCart";
import { useState, useEffect } from "react";

const CartPage = () => {
  const cart = useCart();
 

  return (
    <div className="bg-gray-400 min-h-[90vh]">
      <div className="container mx-auto pt-24 px-5 sm:px-2">
        <h1 className="text-3xl italic text-white">Shopping Cart</h1>
        <div className="py-10 grid grid-cols-[2fr_1fr] gap-1 sm:flex sm:flex-col">
          <div className=" text-black bg-white rounded-xl px-5  py-5 lg:px-2">
            {cart.items.length === 0 && (
              <p className="h-full py-20 flex justify-center items-center text-3xl   lg:text-xl">
                No Items added to cart
              </p>
            )}
            <ul className="grid grid-cols-3 gap-2 lg:grid-cols-2 sm:flex sm:flex-col">
              {cart.items.map((item) => (
                <CartItem data={item} key={item.id} />
              ))}
            </ul>
          </div>
        <Summary/>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
