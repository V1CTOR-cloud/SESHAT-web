window.onscroll = () =>{

    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

}

window.onload = () => {
    
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

let swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});

let swiper2 = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation:{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});