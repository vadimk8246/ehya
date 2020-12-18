$(document).ready(function () {
  var tabsItem = $(".tabs-item");
  var contentItem = $(".content-item");

  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr('data-target');
    tabsItem.removeClass('tabs-item--active');
    contentItem.removeClass("content-item--active");
    $(activeContent).toggleClass('content-item--active');
    $(this).addClass("tabs-item--active");
  });


  var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
})
  var mySwiper = new Swiper('.articles-container', {
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
    // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.arrows-next',
    prevEl: '.arrows-prev',
  },
})


  // Обработка форм
  $(".newsletter-form").validate({
    errorClass: "invalid",
    messages: {
      email:{
        required: "Введите свою почту",
        email:"Введите корректный Email"
      }
    },
  });
  $.validator.methods.email = function( value, element ) {
  return this.optional( element ) || /[a-z,1-9]+@[a-z]+\.[a-z]+/.test( value );
}
});