$(function() {

  function TableResizeUpdate() {
    $('table').each(function(){
      if( ! $(this).hasClass('tablepress') ) {
        $(this).addClass('tablepress');
      }
  
      $(this).children('caption').remove();
      $(this).wrap('<div class="wp-table"></div>');
  
      if( $(this).hasClass('antii') && $('.site-wrapper').width() > 800 ) {
        $(this).parent().css('overflow-x','visible');
      } else {
        $(this).parent().css('overflow-x','auto');
      }
    });
  }
  
  TableResizeUpdate();
  $(window).on('resize',function(){
    TableResizeUpdate();
  });

});