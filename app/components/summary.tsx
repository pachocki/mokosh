import useCart from "@/hook/useCart";
import Button from "./ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Summary = () => {
  const cart = useCart();
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id)
    });

    window.location = response.data.url;
  }
  return (
    <div className="h-min bg-white py-10 rounded-xl border shadow-lg sticky top-20 inline-block w-full px-5">
      <h2 className="text-3xl italic font-bold lg:text-2xl">Summary</h2>
      {cart.items.length === 0 && (
        <p className="h-full flex justify-center items-center text-3xl   lg:text-xl py-40">
          No Items added to cart
        </p>
      )}
      <ul className="flex flex-col pt-10 gap-2 pb-5 lg:text-xl lg:pt-5 ">
        {cart.items.map((item) => (
          <li className="text-xl md:text-lg " key={item.id}>
            1x{item.name}
          </li>
        ))}
      </ul>
      <hr />
      <div className="flex justify-between pt-10 text-2xl font-bold md:text-xl">
        <Button
          label="Check out"
          link=""
          underline
          extra="w-full lg:text-lg"
          onClick={onCheckout}
        />

        <span> Total:${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Summary;
