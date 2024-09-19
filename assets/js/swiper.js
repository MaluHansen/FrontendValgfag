

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 2000, 
      disableOnInteraction: false, 
      pauseOnMouseEnter: true, 
      reverseDirection: false, 
    },
    speed: 8000,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  
  var swiperWrapper = document.querySelector('.swiper-wrapper');
  var slides = swiperWrapper.querySelectorAll('.swiper-slide');
  
  // Begrænser max antal cards til 10 på slideren
  if (slides.length > 10) {
    for (var i = 10; i < slides.length; i++) {
      slides[i].remove();
    }
  }
  