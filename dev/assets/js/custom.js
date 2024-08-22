  $(document).ready(function(){
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      }); 
  })

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