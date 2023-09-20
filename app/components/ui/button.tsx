import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { MouseEventHandler } from "react"
interface ButtonProps {
  link: string;
  label: string;
  small?: boolean;
  underline?: boolean;
  background?: boolean;
  extra?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  link,
  label,
  small,
  underline,
  background,
  extra,
  onClick
}) => {
  return (
    <button onClick={onClick}>
      <Link
        href={link}
        className={`flex gap-2 items-center  hover:opacity-60 sm:text-lg ${extra}
            ${small ? "text-lg " : "text-2xl "}
            ${underline ? "underline" : " "}
            ${background ? "bg-black text-white p-2 rounded-xl" : " "}
            `} 
      >
        {label} <BsArrowRight />
      </Link>
    </button>
  );
};

export default Button;
