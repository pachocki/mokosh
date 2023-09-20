import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className=" text-white bg-black px-4  pt-20 pb-10 lg:pt-10 sm:pb-5 sm:px-3">
        <div className="container mx-auto grid grid-cols-[2fr_1fr_1fr_1fr]  lg:gap-2 lg:grid-cols-3">
          <div className="flex flex-col gap-2 ">
            <span className="text-xl font-semibold 2xl:text-3xl md:text-lg xs:text-sm">
              Shoping
            </span>
            <span className="2xl:text-2xl sm:text-sm">Search</span>
            <span className="2xl:text-2xl sm:text-sm">
              Terms and Conditions
            </span>
            <span className="2xl:text-2xl sm:text-sm">Contact</span>
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="text-xl font-semibold 2xl:text-3xl md:text-lg xs:text-sm">
              Discover mokosh
            </span>
            <span className="2xl:text-2xl sm:text-sm">About Us</span>
            <span className="2xl:text-2xl sm:text-sm">Join</span>
            <span className="2xl:text-2xl sm:text-sm">FAQ</span>
          </div>
          <div className="flex flex-col gap-2 ">
            <span className="text-xl font-semibold 2xl:text-3xl md:text-lg xs:text-sm">
              Legally and Seriously
            </span>
            <span className="2xl:text-2xl sm:text-sm">For the Press</span>
            <span className="2xl:text-2xl sm:text-sm">
              Rules and Regulations
            </span>
            <span className="2xl:text-2xl sm:text-sm">Privacy Policy</span>
            <span className="2xl:text-2xl sm:text-sm">Cookies Policy</span>
            <div className="flex gap-5 w-full  pt-10 text-2xl  sm:text-xl sm:pt-5">
              <BsFacebook />
              <BsInstagram />
              <BsTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
