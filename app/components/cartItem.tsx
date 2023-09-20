import useCart from "@/hook/useCart";
import { Product } from "@/types";
import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
    const cart = useCart()
    const onRemove = ()=>{cart.removeItem(data.id)}
  return (
    <li>
    
      <div className=" rounded-md overflow-hidden border border-black text-black relative pb-2">
        <div
          className=" absolute right-2 top-2 bg-red-600 p-2 rounded-lg cursor-pointer hover:opacity-80"
          onClick={onRemove}
        >
          <MdDelete className=" right-2 top-2 text-white" />
        </div>
        <img
          src={data.images[0].url}
          alt="image"
          className="object-fit object-center"
        />
        <div className="min-h-[140px]">
        <div className="px-2 pb-5">
          <span className="text-black text-xl ">{data.name}</span>
      
        </div>
        <div className=" px-2  flex justify-end">
          <span className="text-black text-xl ">Price: ${data.price}</span>
        </div>
        </div>
      </div>
  
    </li>
  );
};

export default CartItem;
