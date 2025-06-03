'use client';
import React, { useState } from 'react'
import { Swiper as SwiperObject } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// Import Swiper styles
import './slideShow.css';
import Image from 'next/image';

interface Props {
  images: string[];
  title: string;
  className?: string;
}


export const ProductSlideShow = ({ images, title, className }: Props) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();



  return (
    <div className={`${className} max-w-[650px] w-full mx-auto`}>
      <Swiper
        style={{
          '--swiper-navigation-color': 'text-gray-300',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties}
        spaceBetween={10}
        navigation={true}
        autoplay={{delay: 2500}}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >

        {
          images.map(img => (
            <SwiperSlide key={img}>
              <Image
                width={1024}
                height={600}
                src={`/products/${img}`}
                alt={title}
                className='rounded-lg object-fill'
              />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
         {
          images.map(img => (
            <SwiperSlide key={img}>
              <Image
                width={200}
                height={200}
                src={`/products/${img}`}
                alt={title}
                className='rounded-lg object-fill'
              />
            </SwiperSlide>
          ))
        }

      </Swiper>

    </div>
  );
};
