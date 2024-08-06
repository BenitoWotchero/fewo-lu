// src/components/ImageGallery.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import image1 from '../img/1.png';
import image2 from '../img/2.webp';
import image3 from '../img/3.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ImageGallery() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide><img src={image1} alt="Bild 1" /></SwiperSlide>
      <SwiperSlide><img src={image2} alt="Bild 2" /></SwiperSlide>
      <SwiperSlide><img src={image3} alt="Bild 3" /></SwiperSlide>
      {/* Fügen Sie hier weitere Bilder hinzu */}
    </Swiper>
  );
}

export default ImageGallery;