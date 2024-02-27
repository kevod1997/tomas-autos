'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

export const Slider = () => {
    return (
        <section >
            <div>
                <Swiper
                    autoplay={{
                        delay: 5000,
                    }}
                    modules={[Autoplay]}
                    className="h-[75vw] md:h-[30vw]"
                >
                    <SwiperSlide>
                        <div className="h-[70vw] md:h-[30vw]">
                            <Image
                                src={"/imgs/frente-s.jpeg"}
                                alt="profile"
                                fill={true}
                                quality={100}
                                className="brightness-105 imageContainer"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[70vw] md:h-[30vw]">
                            <Image
                                quality={100}
                                src={"/imgs/slider-nine.png"}
                                alt="profile"
                                fill={true}
                                className="brightness-125 imageContainer"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}