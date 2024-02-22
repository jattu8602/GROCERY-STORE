let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    

    navBar.classList.remove('active');
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

};
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');

};
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');

};
let navBar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

};
window.onscroll = () =>{
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

    };













    var swiper = new Swiper(".product-slider", {
      loop: true,
        spaceBetween: 20,

        autoplay: {
            delay:7500,
            disableOnInteraction:false,
        },
        
        breakpoints: {
         0: {
            slidesPerView: 2,
            
          },
          768: {
            slidesPerView: 4,
      
          },
          1024: {
            slidesPerView: 5,
          
          },
        },
      });

      var swiper = new Swiper(".review-slider", {
        loop: true,
          spaceBetween: 20,
  
          autoplay: {
              delay:7500,
              disableOnInteraction:false,
          },
          
          breakpoints: {
           0: {
              slidesPerView: 2,
              
            },
            768: {
              slidesPerView: 4,
        
            },
            1024: {
              slidesPerView: 5,
            
            },
          },
        });