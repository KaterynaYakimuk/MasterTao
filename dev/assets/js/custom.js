  $(document).ready(function(){
    Fancybox.bind("[data-fancybox]", {
        // Your custom options
      }); 
  })

  const burger = document.querySelector('.hamburger')
  const headerNav = document.querySelector('.header__nav')

  function showBurgerMenu(){
    burger.classList.toggle('is-active');
    headerNav.classList.toggle('show');
  }

  burger.addEventListener('click', showBurgerMenu)