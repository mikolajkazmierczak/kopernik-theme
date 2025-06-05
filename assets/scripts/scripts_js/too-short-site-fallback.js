$(function() {
    
  TOO_SHORT_SITE_FALLBACK = $('.too-short-site-fallback');
  PAGINATION = $('.pagination');
  // make sure too-short-site-fallback is before the pagination
  if(PAGINATION.length > 0) {
    TOO_SHORT_SITE_FALLBACK.remove();
    PAGINATION.before('<div class="too-short-site-fallback"></div>');
    TOO_SHORT_SITE_FALLBACK = $('.too-short-site-fallback');
  }
  TOO_SHORT_SITE_FALLBACK.css('display','none');

  BODY = $('body');
  SITE_WRAPPER = $('.site-wrapper');
  PREV = TOO_SHORT_SITE_FALLBACK.prev();


  tooShortSiteFallback = 0;
  function TooShortSiteFallback() {
    bodyHeight = BODY.height();
    siteWrapperHeight =
      SITE_WRAPPER.outerHeight() - tooShortSiteFallback;
    prevHeight = PREV.outerHeight() - tooShortSiteFallback;

    // when body is taller then wrapper
    if(bodyHeight > siteWrapperHeight) {
      tooShortSiteFallback = bodyHeight - siteWrapperHeight;
      
      PREV.height(
        prevHeight + tooShortSiteFallback
      );
    } else {
      tooShortSiteFallback = 0;
    }
  }

  console.log("hello");
  $(window).on('load', function() {
    // console.log('hi');
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    if(isChrome) {
      $('.post__title-wrapper').css('display','block');
      $('.post__title-wrapper').css('text-align','-webkit-center');
    }

    if($('.post__content').outerHeight() > $('.post').outerHeight()) {
      $('.post').height(
         $('.post__content').outerHeight() + 75
      );
    }
  });

  TooShortSiteFallback();
  $(window).on('load resize', function() {
    TooShortSiteFallback();
  });

});