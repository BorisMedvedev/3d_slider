 const mainSwiper = () => {
      const myswiper = document.createElement('div');
      const swiperWrapper = document.createElement('div');
      const slides = document.querySelectorAll('.uc-swiper-slide');
      const app = document.querySelector('.main-block');
      const btnPrev = document.createElement('button');
      const btnNext = document.createElement('button');
      const pagination = document.createElement('div');
      myswiper.className = 'swiper mySwiper';
      pagination.className = 'swiper-pagination';
      swiperWrapper.className = 'swiper-wrapper';
      btnPrev.classList.add('swiper-button-prev');
      btnNext.classList.add('swiper-button-next');
      slides.forEach(element => {
        element.classList.add('swiper-slide');
        swiperWrapper.append(element);
        swiperWrapper.append(element);

      });
      myswiper.append(swiperWrapper, pagination);
      app.append(myswiper);