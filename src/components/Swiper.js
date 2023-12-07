import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'

export default () => {
  return (
    <Swiper 
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={6}
      autoplay
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    ><span class='pb-20'>
      <SwiperSlide><img src="./images/client-1.png" alt="client"class="grayscale hover:grayscale-0 transition duration-300 ease-in-out"/></SwiperSlide>
      <SwiperSlide><img src="./images/client-2.png" alt="client"class="grayscale hover:grayscale-0 transition duration-300 ease-in-out"/></SwiperSlide>
      <SwiperSlide><img src="./images/client-3.png" alt="client" class="grayscale hover:grayscale-0 transition duration-300 ease-in-out"/></SwiperSlide>
      <SwiperSlide><img src="./images/client-4.png" alt="client" class="grayscale hover:grayscale-0 transition duration-300 ease-in-out"/></SwiperSlide>
      <SwiperSlide><img src="./images/client-5.png" alt="client" class="grayscale hover:grayscale-0 transition duration-300 ease-in-out"/></SwiperSlide>
      <SwiperSlide><img src="./images/client-6.png" alt="client" class="grayscale hover:grayscale-0 transition duration-300 ease-in-out"/></SwiperSlide>
      <SwiperSlide><img src="./images/client-7.png" alt="client" class="grayscale hover:grayscale-0 transition duration-300 ease-in-out"/></SwiperSlide>
      <SwiperSlide><img src="./images/client-8.png" alt="client" class="grayscale hover:grayscale-0 transition duration-300 ease-in-out"/></SwiperSlide>
      <SwiperSlide><img src="./images/client-1.png" alt="client" class="grayscale hover:grayscale-0 transition duration-300 ease-in-out"/></SwiperSlide>
      <SwiperSlide><img src="./images/client-2.png" alt="client" class="grayscale hover:grayscale-0 transition duration-300 ease-in-out"/></SwiperSlide>
      <SwiperSlide><img src="./images/client-3.png" alt="client" class="grayscale hover:grayscale-0 transition duration-300 ease-in-out"/></SwiperSlide>
      <SwiperSlide><img src="./images/client-4.png" alt="client" class="grayscale hover:grayscale-0 transition duration-300 ease-in-out"/></SwiperSlide>
      <SwiperSlide><img src="./images/client-5.png" alt="client" class="grayscale hover:grayscale-0 transition duration-300 ease-in-out"/></SwiperSlide>
      </span>
    </Swiper>
  );
};