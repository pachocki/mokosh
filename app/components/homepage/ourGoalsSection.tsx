import { BsArrowRight } from "react-icons/bs";
import Button from "../ui/button";

const OurGoals = () => {
  return (
    <section className="bg-[#1a5d38] ">
      <div className="container grid grid-cols-2 py-20  mx-auto text-white px-10 lg:grid-cols-[0.8fr_2fr] sm:!flex sm:!flex-col-reverse sm:px-2 sm:py-10">
        <div className="flex">
          <img src="/women.png" className="w-4/5 h-[50vh] object-cover sm:w-full sm:pt-10" />
        </div>
        <div>
          <div className="text-6xl flex gap-2 xl:text-5xl md:text-4xl xs:!text-3xl">
            <span>PURE</span>
            <span className="italic">natural</span>
          </div>
          <div className="flex gap-2 text-6xl xl:text-5xl  md:gap-0 md:!text-4xl sm:!gap-2 xs:!text-3xl">
            <img src="/eco.png" className="h-[200px] sm:h-[100px]" />
            <span>INGREDIENTS</span>
          </div>
          <p className="text-3xl pt-10 xl:pt-5 md:text-xl">
            Experience the power of nature with our range of all-natural
            cosmetics, thoughtfully packaged in eco-friendly boxes
          </p>
          <Button label="read more" link="/" underline extra="pt-10" />
        </div>
      </div>
    </section>
  );
};

export default OurGoals;
