$(function() {

  $('img').each(function(){

    if( $(this).hasClass('antii') ) {

      if( ! $(this).parent().hasClass('antii__row') ) {
        $(this).parent().addClass('antii__row')
      }

      $(this).parent().css('margin',0);

    }

  });

});