const swiper1 = new Swiper(".swiper1", {
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
    el: ".swiper-pagination1",
  },

});



const swiper2 = new Swiper(".swiper2", {
  spaceBetween: 16,
  slidesPerView: 2,

  breakpoints: {

    // when window width is >= px
    768: {
      spaceBetween: 16,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 28,
      slidesPerView: 4,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination2",
  },

});

