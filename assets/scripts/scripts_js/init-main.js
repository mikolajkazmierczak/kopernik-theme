$(function() {

  $('.main-section__img').each(function(){
  
    if ($(this).attr('src').trim() == '') {
      $(this).parent().parent().find('.main-section__text').addClass('main-section__text--alone');
      $(this).parent().remove();
    }
    
  });

  $('.main-section__button').each(function(){
    if ($(this).find('.button__text').html().trim() == "") {
      $(this).remove();
    }
  });

  $('img').each(function(){

    if( $(this).hasClass('antii') ) {

      if( ! $(this).parent().hasClass('antii__row') ) {
        $(this).parent().addClass('antii__row')
      }

      $(this).parent().css('margin',0);

    }

  });


  function checkImage(_src) {
    let img = new Image();
    img.onload = function() {
      $("#gwiazdy").closest('.main-section').css({
        'background-image':'url('+ img.src +')'
      })
    }
    img.onerror = function(){
      console.log('Oops');
    }
    img.src = _src;
  }

  checkImage("https://kopernik.kalisz.pl/wp-content/uploads/2019/03/gwiazdy.jpeg")

});
