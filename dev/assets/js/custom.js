  $(document).ready(function(){
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      }); 
  })

  //first-screen//

  const burger = document.querySelector('.hamburger')
  const body = document.querySelector('body')
  const headerNav = document.querySelector('.header__nav')

  function showBurgerMenu(){
    headerNav.classList.toggle('show');
    burger.classList.toggle('is-active');
    body.classList.toggle('overflow-hidden');
  }

  burger.addEventListener('click', showBurgerMenu)

   
  const swiper = new Swiper('.slider-info', {  
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: false,

    navigation:  {
      enabled: false,
    },

    breakpoints: {
      1024: {
        spaceBetween: 40,
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
    
});

//calculation//

const fileLable = document.querySelectorAll('.calculation-label');
const fileInput = document.querySelectorAll('.calculation-input');
const fileBtn = document.querySelectorAll('.form-btn')

fileInput.forEach(item => {
    item.addEventListener('change', function() {
        let fileName = item.closest('.input-box').querySelector('.file-name')
        fileName.innerHTML = item.files[0].name;
    })
})

fileLable.forEach(item => item.closest('.form-row').previousElementSibling.classList.add('special-gap'))

fileBtn.forEach(item => item.closest('.form-row').previousElementSibling.classList.add('btn-gap'))


//advantages//

const advantagesCount = document.querySelectorAll('.slider-advantages .swiper-slide').length

const swiperAdvantages = new Swiper('.slider-advantages', {  
  spaceBetween: 12,
  loop: true,
  simulateTouch: true,
  slidesPerView: 1,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: true,
  },
  breakpoints: {
    1025: {
      spaceBetween: 0,
      initialSlide: 0,
      loop: false,
      slidesPerGroup: advantagesCount,
      simulateTouch: false,
      pagination: {
          enabled: false,
          el: '.swiper-pagination',
      },
    }
  }
});


//delivery//

const swiperTemplate = new Swiper('.swiper-template', {  
  loop: true,
  slidesPerView: 1,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
    enabled: true,
    clickable: true,
  },
  navigation: {
    enabled: false,
  },

  breakpoints: {
    1025: {
        slidesPerView: 2,
        spaceBetween: 0,
        navigation: {
            enabled: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            enabled: false,
        },
    },
    1400: {
        slidesPerView: 3,
        spaceBetween: 0,
        navigation: {
            enabled: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            enabled: false,
        },
    },
   
}
});