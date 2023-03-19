const swiper = new Swiper(".swiper", {
  spaceBetween: 16,
  slidesPerView: 1,

  breakpoints: {
    
    // when window width is >= px
    768: {
      spaceBetween: 16,
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 28,
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

});
