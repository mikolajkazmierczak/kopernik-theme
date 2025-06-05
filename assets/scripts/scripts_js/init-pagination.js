$(function() {

  PAGINATION = $('.pagination');
  FOOTER = $('footer');

  // showing pagination
  if($(window).width() > 600) {
    PAGINATION.css('opacity','0');
    setTimeout(function() {
      PAGINATION.css('opacity','1');
    }, 20);
  }

  // giving the footer a margin to fit the pagination
  FOOTER.css('margin-top', PAGINATION.outerHeight());


  // removing the title
  PAGINATION.find('.screen-reader-text').remove();


  // adding needed classes to .prev and .next button
  PAGINATION_IMG_LEFT = PAGINATION.find('.pagination__img--left');
  PAGINATION_IMG_RIGHT = PAGINATION.find('.pagination__img--right');
  PAGINATION_PREV = PAGINATION_IMG_LEFT.parent();
  PAGINATION_NEXT = PAGINATION_IMG_RIGHT.parent();
  if(!PAGINATION_PREV.hasClass('prev')) {
      PAGINATION_PREV.addClass('prev'); }
  if(!PAGINATION_NEXT.hasClass('next')) {
      PAGINATION_NEXT.addClass('next'); }
  PAGINATION_PREV.addClass('rm-button rm-button--left');
  PAGINATION_NEXT.addClass('rm-button rm-button--right');


  // removing wordpress parent pagination element
  PAGINATION_PARENT = PAGINATION.find('.navigation.pagination');
  paginationParentHTML = PAGINATION_PARENT.html();
  PAGINATION_PARENT.remove();
  PAGINATION.html( paginationParentHTML );


  // getting the .prev and .next buttons and their outer html and removing them
  PAGINATION_PREV = PAGINATION.find('.prev');
  PAGINATION_NEXT = PAGINATION.find('.next');

  paginationPrevOuterHTML = PAGINATION_PREV.outerHTML();
  PAGINATION_PREV.remove();

  paginationNextOuterHTML = PAGINATION_NEXT.outerHTML();
  PAGINATION_NEXT.remove();


  // inserting .prev and .next in the right place and getting their reference again
  PAGINATION.prepend( paginationPrevOuterHTML );
  PAGINATION_PREV = PAGINATION.find('.prev');

  PAGINATION.append( paginationNextOuterHTML );
  PAGINATION_NEXT = PAGINATION.find('.next');


  // wrapping .nav-links in .pagination__wrapper
  PAGINATION_NAV_LINKS = PAGINATION.find('.nav-links');
  PAGINATION_NAV_LINKS.wrap('<div class="pagination__wrapper">');

  PAGINATION_BUTTON_PAGINATION = $('.button--pagination');
  PAGINATION_BUTTON_PAGINATION.wrap('<div class="pagination__wrapper">');

  PAGINATION_WRAPPER = PAGINATION.find('.pagination__wrapper');


  // when one of the page buttons is missing add a fake element to center .pagination__wrapper (after page load image)
  $(window).load(function() {

    if( PAGINATION.find('.rm-button--left').length == 0 ) {

      PAGINATION_WRAPPER.css('padding-left', PAGINATION.find('.rm-button--right').outerWidth());

    } else if ( PAGINATION.find('.rm-button--right').length == 0 ) {
      
      PAGINATION_WRAPPER.css('padding-right', PAGINATION.find('.rm-button--left').outerWidth());

    }

  });


  // removing 'a' styling by adding .a--ns to all 'a'-s
  PAGINATION.find('a')
    .each( function(){
      $(this).addClass('a--ns');
    });


  // changing the dots that separate the numbers
  PAGINATION.find('.page-numbers.dots').html('...');


  if(PAGINATION_WRAPPER.length == 0) {
    PAGINATION.remove();
    $('footer').css
  }

});