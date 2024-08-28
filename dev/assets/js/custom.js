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
