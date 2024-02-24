'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Slider = () => {
    return (
        <section className='mt-[-25px] w-full'>
            <div className=''>
                <Swiper
                    navigation
                    pagination={{ type: 'fraction' }}
                    autoplay={{
                        delay: 5000,
                    }}
                    modules={[Navigation, Autoplay]}
                    className=''
                >
                    <SwiperSlide>
                        <div className="w-full relative h-full sm:h-[37.5vw] imageContainer">
                            <Image
                                src={"/imgs/slider-three.png"}
                                alt="profile"
                                fill={true}
                                quality={100}
                                className="absolute inset-0 w-full h-full brightness-125"

                            />
                            <Link href="/unidades" className="enlaceCatalogo">
                                <span className="sr-only">Ver Catálogo</span>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full relative h-full sm:h-[37.5vw] imageContainer">
                            <Image
                                quality={100}
                                src={"/imgs/slider-nine.png"}
                                alt="profile"
                                fill={true}
                                className="absolute inset-0 w-full h-full brightness-125"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}