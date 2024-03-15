'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';




interface Props {
  images: string[];
  title: string;
  className?: string;
}



export const CarMobileSlideshow = ({ images, title, className }: Props) => {
  const [loaded, setLoaded] = useState<{ [key: string]: boolean }>({});

  console.log(loaded)

  const handleLoad = (url: string) => {
    setTimeout(() => {
      setLoaded((prev) => ({ ...prev, [url]: true }));
    }, 1500);
  };

  return (
    <div className={className}>

      <Swiper
        style={{
          width: '100vw',
          height: '500px'
        }}
        pagination
        autoplay={{
          delay: 2500
        }}
        modules={[FreeMode, Autoplay, Pagination]}
        className="mySwiper2"
      >

        {
          images.map(image => (
            <SwiperSlide key={image}>
              <Image
                width={600}
                height={500}
                src={image}
                alt={title}
                className={`object-fill transition-opacity duration-500 ${loaded[image] ? 'opacity-100' : 'opacity-10 animate-pulse'}`}
                onLoad={() => handleLoad(image)}
              />

            </SwiperSlide>

          ))
        }
      </Swiper>



    </div>
  );
};