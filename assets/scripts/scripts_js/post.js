$(function(){

  UpdatePostLayout();
  $(window).on('load resize', function() {
    UpdatePostLayout();
  });
  PinSwitchButton.on('click', function() {
    setTimeout(function() {
      UpdatePostLayout();
    }, 200);
  })

  function UpdatePostLayout(){
    
    let justifyBreakpoint = null;
    if(CloseMenuWhenClickedOnContent == false) {
      justifyBreakpoint = 950;
    } else {
      justifyBreakpoint = 550;
    }

    if($(window).width() > justifyBreakpoint) {
      $('.post__content p').addClass('p--justify');
    } else {
      $('.post__content p').removeClass('p--justify');
    }

    let bgBreakpoint = null;
    if(CloseMenuWhenClickedOnContent == false) {
      bgBreakpoint = 1330;
    } else {
      bgBreakpoint = 1000;
    }

    if($(window).width() > bgBreakpoint) {
      $('.post').addClass('post--bg-layout');
      $('article').removeClass('post--bg-layout');
      $('article').addClass('article--bg-layout');
    } else {
      $('.post').removeClass('post--bg-layout');
      $('article').removeClass('article--bg-layout');
    }

  }

});