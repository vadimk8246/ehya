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
    delay: 124435000,
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
    // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.arrows-next',
    prevEl: '.arrows-prev',
  },
})


  // Обработка формы подписки
  $(".newsletter-form").validate({
    errorClass: "invalid",
    messages: {
      email:{
        required: "Введите свою почту",
        email:"Введите корректный Email"
      }
    },
  });
    // Проверка почты на наличие домена
  $.validator.methods.email = function( value, element ) {
  return this.optional( element ) || /[a-z,1-9]+@[a-z]+\.[a-z]+/.test( value );
}
    // Обработка формы обратной связи
  $(".modal-form").validate({
    errorClass: "invalid",
    messages: {
      name:{
        required: "Это поле обязательно"
      },
      phone:{
        required:"Это поле обязательно",
        minlength:"Мин. символов: 11"
      }
    }
  })
  
  
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener('click', function (){
    document.querySelector(".menu-mobile")
    .classList.add('menu-mobile-active');
  });
  var closeButton = document.querySelector(".mobile-menu-icon");
  closeButton.addEventListener('click', function (){
    document.querySelector(".menu-mobile")
    .classList.remove('menu-mobile-active');
  });

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal-icon');
  var closeClickOverlay = $('.modal-overlay');
  var closeMenuTab = $('.menu-mobile-item');
  modalButton.on('click', openModal );
  closeModalButton.on('click', closeModal );
  closeClickOverlay.on('click',closeModal );
  closeMenuTab.on('click',closeMenu) ;

  //Открытие модального окна функция
  function openModal() {
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.addClass('modal-overlay-active');
    modalDialog.addClass('modal-dialog-active');
  }
  //Закрытие модального окна функция
  function closeModal() {
    var modalOverlay = $(".modal-overlay");
    var modalDialog = $(".modal-dialog");
    modalOverlay.removeClass('modal-overlay-active');
    modalDialog.removeClass('modal-dialog-active');
  }
  //Закрытие мобильного меню функция
  function closeMenu() {
    var menuMobile = $('.menu-mobile');
    menuMobile.removeClass('menu-mobile-active');
  };
  
  //Закрытие модального окна нажатием Escape
  function closeEscape(e){
    if (e.key == 'Escape'){
        closeModal()
    }
  }
  document.onkeydown = closeEscape
  // Маска для инпута с телефоном в модальном окне
  $('.input-modal-phone').mask('+7 (000) 000-00-00')
});