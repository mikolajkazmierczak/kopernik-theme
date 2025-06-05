$(function(){

  UpdateFooterLayout();
  $(window).on('load resize', function(){
    UpdateFooterLayout();
  });
  PinSwitchButton.on('click',function(){
    setTimeout(function() {
      UpdateFooterLayout();
    }, 200);
  })

  function UpdateFooterLayout(){
    
    let breakpoint = null;
    if(CloseMenuWhenClickedOnContent == false) {
      breakpoint = 1225;
    } else {
      breakpoint = 780;
    }

    if($(window).width() > breakpoint) {
      $('.footer__logo').addClass('footer__logo--horizontal-layout');
      $('.footer__items').addClass('footer__items--horizontal-layout');
    } else {
      $('.footer__logo').removeClass('footer__logo--horizontal-layout');
      $('.footer__items').removeClass('footer__items--horizontal-layout');
    }

  }

});