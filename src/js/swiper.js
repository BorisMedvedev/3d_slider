import '/node_modules/swiper/swiper-bundle.css';
import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
} from 'swiper/modules';
Swiper.use([
  Navigation,
  Pagination,

]);

const swiperIMG = new Swiper('.showcase__swiper', {
  loop: true,
  slidesPerView: 3,
  speed: 2000,
  
});

document.querySelector('.showcase__video').playbackRate = 3;
