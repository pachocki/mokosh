"use client";

import { Product } from "@/types";
import ProductCards from "./productCards";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./button";

interface ProductListProps {
  title: string;
  description?: string;
  items: Product[];
  button?: boolean;
  white?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  description,
  items,
  button,
  white,
}) => {
  return (
    <div
      className={`py-20 container mx-auto sm:py-0 sm:pt-5 ${
        white ? "text-white" : "text-black"
      } `}
    >
      <h3 className="font-serif text-6xl italic pl-10 lg:text-4xl lg:pl-5 lg:font-bold sm:!px-2 sm:!text-3xl">
        {title}
      </h3>
      <div
        className={` grid grid-cols-[1fr_2fr] py-10 px-10 gap-5 lg:gap-2 lg:px-5 sm:grid-cols-1 sm:pt-0 sm:!px-2`}
      >
        <div>
          {description && (
            <p className="text-3xl pt-10 lg:text-2xl lg:pt-5 sm:!text-xl">
              {description}
            </p>
          )}

          {button && (
            <Button
              underline
              label="read more"
              link="/shop"
              extra="pt-20 sm:py-5 "
            />
          )}
        </div>

        <div className={` h-auto overflow-hidden m-w-0`}>
          <Swiper
            pagination={{
              clickable: true,
            }}
            navigation={true}
            grabCursor={true}
            breakpoints={{
              490: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              491: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              980: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
             
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCards data={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
