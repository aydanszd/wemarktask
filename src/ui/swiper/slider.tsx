"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type AboutSliderProps = {
    images: { image: string }[];
};

export default function AboutSlider({ images }: AboutSliderProps) {
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            centeredSlides
            loop
            loopAdditionalSlides={3}
            initialSlide={1}
            grabCursor
            spaceBetween={48}
            speed={500}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            breakpoints={{
                0: { spaceBetween: 16 },
                768: { spaceBetween: 48 },
            }}
            className="mt-10 md:mt-20"
            aria-label="About xSchool gallery"
        >
            {images.map((item, i) => (
                <SwiperSlide
                    key={item.image}
                    className="w-[85vw]! md:w-216.25!"
                >
                    <div className="relative h-[48vw] w-full overflow-hidden md:h-121.5">
                        <Image
                            src={item.image}
                            alt=""
                            fill
                            sizes="(min-width: 768px) 865px, 85vw"
                            className="object-cover"
                            priority={i < 3}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}