import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import React from 'react';

const SwiperComponent = () => { 
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slidesPerView={3} 
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="flex justify-center">
        <img src="/images/swiperpanda.png" alt="Panda 1" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <img src="/images/swiperpanda2.png" alt="Panda 2" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <img src="/images/panda3.png" alt="Panda 3" />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center">
        <img src="/images/swiperpanda.png" alt="Panda 4" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
