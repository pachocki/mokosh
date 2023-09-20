"use client";
import { Tab } from "@headlessui/react";
import { Image as ImageType } from "@/types";
import GalleryTab from "./galleryTab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse lg:grid lg:grid-cols-[2fr_1fr] lg:gap-5  pb-40 lg:pb-0  sm:!grid-cols-1">
      <div className="mx-auto mt-6 block w-full max-w-2xl sm:hidden lg:max-w-none lg:order-last">
        <Tab.List className="grid grid-cols-4 gap-6 lg:grid-cols-1 ">
          {images?.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className=" w-full h-auto">
        {images?.map((image) => (
          <Tab.Panel key={image.id}>
        
              <img
                src={image.url}
                className="object-cover object-center w-[400px] lg:w-full"
                alt="image"
              />
         
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
