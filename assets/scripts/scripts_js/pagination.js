$(function() {

  PAGINATION = $('.pagination');
  FOOTER = $('footer');

  if(PAGINATION.length > 0) {


    function CheckPaginationOverflow() {
      if( PAGINATION_NAV_LINKS.length > 0) {

        if( PAGINATION_NAV_LINKS.width() < PAGINATION_WRAPPER.width() ) {
          PAGINATION_WRAPPER.css({
            'justify-content': 'center'
          });
        } else {
          PAGINATION_WRAPPER.css({
            'justify-content': 'flex-start'
          });
        }

      } else { // for show more button
        PAGINATION_WRAPPER.css({
          'justify-content': 'center'
        });
      }
    }


    window.PaginationUpdateOffsets = function() {
      windowHeight = $(window).height();
      paginationHeight = PAGINATION.height();

      documentScrollTopEnd = $(document).scrollTop() + windowHeight;
      contentOffsetTopEnd = CONTENT.offset().top + CONTENT.outerHeight();
    }

    window.PaginationUpdatePosition = function() {
      PaginationUpdateOffsets();
      
      if( documentScrollTopEnd < (contentOffsetTopEnd + paginationHeight) ) {
        if(CloseMenuWhenClickedOnContent == false) {
          PAGINATION.css('width','calc(100% - 400px)');
        } else {
          PAGINATION.css('width','100%');
        }
        PAGINATION.css({
          'position':'fixed',
          'bottom': 0
        });
      } else {
        PAGINATION.css({
          'position':'absolute',
          'bottom': FOOTER.height(),
          'width':'100%'
        });
      }
    }


    function PaginationUpdateShadow() {
      var overflowWidth = PAGINATION_WRAPPER[0].scrollWidth;
      var shownWidth = PAGINATION_WRAPPER.width();
      var offsetLeft = PAGINATION_WRAPPER.scrollLeft();
      //scrollPosition
      var atTheStart = offsetLeft == 0;
      var atTheEnd = offsetLeft == overflowWidth - shownWidth;

      paginationWrapperWidth = PAGINATION_WRAPPER.outerWidth();
      paginationWrapperChildWidth = PAGINATION_WRAPPER.children().outerWidth();

      if( paginationWrapperChildWidth > paginationWrapperWidth) {

        if (atTheStart) {
          PAGINATION_WRAPPER.css('box-shadow','inset -10px 0 10px -10px ' + shadow);
        }
        else if (atTheEnd) {
          PAGINATION_WRAPPER.css('box-shadow','inset 10px 0 10px -10px ' + shadow);
        }
        else { // center
          PAGINATION_WRAPPER.css('box-shadow','inset 10px 0 10px -10px ' + shadow + ', inset -10px 0 10px -10px  ' + shadow);
        }

      } else {
        PAGINATION_WRAPPER.css('box-shadow','none');
      }
    }


    // variables
    PAGINATION_WRAPPER = $('.pagination__wrapper');
    PAGINATION_NAV_LINKS = PAGINATION.find('.nav-links');
    if($('.articles').length > 0) {
      CONTENT = $('.articles');
    } else if ($('article').length > 0) {
      CONTENT = $('article');
    } else {
      console.log('whoopsie daisy there aint no content');
    }

      
    // changing layout based on .nav-links overflow in .pagination__wrapper 
    CheckPaginationOverflow();
    $(window).on('load resize', function() {
      CheckPaginationOverflow();
    });


    // hiding when scrolled after content
    PaginationUpdatePosition();
    $(window).on('scroll resize', function() {
      PaginationUpdatePosition();
    });


    // shadow for pagination page numbers
    shadow = 'rgba(0,0,0,0.2)';
    if( RM.hasClass('rm-style--dark') ) {
      shadow = 'rgba(0,0,0,1)';
    }

    PaginationUpdateShadow();
    PAGINATION_WRAPPER.on('scroll', function(){
      PaginationUpdateShadow();
    });
    $(window).on('load resize', function() {
      PaginationUpdateShadow();
    });

  
  }

  // remove text from buttons when screen is small
  function CheckPaginationButtons(){
    if( $('.site-wrapper').width() < 850 ) {
      PAGINATION_PREV.find('h5').css({
        'display':'none'
      });
      PAGINATION_NEXT.find('h5').css({
        'display':'none'
      });
    } else {
      PAGINATION_PREV.find('h5').css({
        'display':'block'
      });
      PAGINATION_NEXT.find('h5').css({
        'display':'block'
      });
    }
  }

  $(window).on('load resize', function() {
    CheckPaginationButtons();
  });
  CheckPaginationButtons();
  setTimeout(CheckPaginationButtons(), 20);
  setTimeout(CheckPaginationButtons(), 100);

  $(window).on('load resize', function() {
    PaginationUpdatePosition();
  });
  PaginationUpdatePosition();
  setTimeout(PaginationUpdatePosition(), 20);
  setTimeout(PaginationUpdatePosition(), 100);



});