// src/components/ImageGallery.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import '../styles/ImageGallery.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ImageGallery() {
  const { t } = useTranslation();

  const images = [
    { src: require('../img/0.jpg'), number: 1 },
    { src: require('../img/1.jpg'), number: 2 },
    { src: require('../img/2.jpg'), number: 3 },
    { src: require('../img/3.jpg'), number: 4 }
  ];

  return (
    <div className="gallery">
      <Swiper
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        navigation={true}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        mousewheel={true}
        keyboard={true}
        loop={true}
        className="gallery-container"
      >
        {images.map((image) => (
          <SwiperSlide key={image.number}>
            <img 
              src={image.src} 
              alt={t('gallery.imageAlt', { number: image.number })}
              className="gallery-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-image');

function changeImage(direction) {
    images[currentImageIndex].classList.remove('active');
    
    currentImageIndex += direction;
    
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    
    images[currentImageIndex].classList.add('active');
}

function changeLanguage(lang) {
    // Hier können Sie die Logik für den Sprachwechsel implementieren
    console.log('Sprache gewechselt zu: ' + lang);
}

export default ImageGallery;