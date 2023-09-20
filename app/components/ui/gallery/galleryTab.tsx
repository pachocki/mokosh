import NextImage from "next/image";
import { Tab } from "@headlessui/react";


import { Image } from "@/types";

interface GalleryTabProps {
  image: Image;
}

const GalleryTab: React.FC<GalleryTabProps> = ({
  image
}) => {
  return ( 
    <Tab
      className="relative flex aspect-square cursor-pointer items-center justify-center  bg-white lg:!h-[100px]"
    >
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden ">
            <NextImage 
              fill 
              src={image.url} 
              alt="" 
              className="object-cover object-center " 
            />
          </span>
          <span
            className={
              `absolute inset-0  ring-2 ring-offset-2',
              ${selected ? 'ring-black' : 'ring-transparent'},
            )`}
          />
        </div>
      )}
    </Tab>
  );
}
 
export default GalleryTab;