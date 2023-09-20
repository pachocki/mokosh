import Parallax from "../parallax";
import Button from "../ui/button";

const CharitySection = () => {
    return (

        <Parallax backgroundImage="/paralax.png">
        <div className="flex flex-col gap-2 justify-center items-center relative text-8xl  italic text-white w-full h-full xl:text-6xl sm:!text-5xl xs:!text-4xl">
          <div className="flex gap-20 relative pb-20 px-10 lg:gap-32 md:px-2 sm:!gap-2 sm:pb-32">
          <img src="/paralax2.png" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40"/>
          <span className="z-20">#World </span>
          <span className="z-20">our Home</span>
          </div>
          <Button label="read more" link="/" underline/>
        </div>
        
              </Parallax>
    );
}

export default CharitySection;