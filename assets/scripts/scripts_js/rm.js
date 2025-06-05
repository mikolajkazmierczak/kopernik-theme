/*
  ResponsiveMenu - v.alpha
  Mikołaj Kaźmierczak 2018
  Be good, don't steal the code.
*/

jQuery(function() {
  (function ($) {

// jquery outerHTML plugin
jQuery.fn.outerHTML = function() {
  return jQuery('<div />').append(this.eq(0).clone()).html();
};

//   ######  ######## ######## ##     ## ######## 
//  ##    ## ##          ##    ##     ## ##     ##
//  ##       ##          ##    ##     ## ##     ##
//   ######  ######      ##    ##     ## ######## 
//        ## ##          ##    ##     ## ##       
//  ##    ## ##          ##    ##     ## ##       
//   ######  ########    ##     #######  ##  

function Setup() {

  if($(window).width() > 450) {
    RM_PANEL.css('max-width', rmPanelMaxWidth);
  } else {
    RM_PANEL.css('max-width', '100%');
  }



  if( RM_BUTTON_PANEL.length ) {
    if( RM_DISPLAY.next(rmButtonPanel).length ) {

      rmButtonPanelPosition = 'right';
      RM_BUTTON_PANEL.addClass('rm-button--right');

    } else if( RM_DISPLAY.prev(rmButtonPanel).length ) {

      rmButtonPanelPosition = 'left';
      RM_BUTTON_PANEL.addClass('rm-button--left');

    } else if( RM_BUTTON_PANEL.next(rmButtonMore).length ) {
      
      panelHTML = RM_BUTTON_PANEL.outerHTML();
      RM_BUTTON_PANEL.remove();

      RM_DISPLAY.after( panelHTML );
      RM_BUTTON_PANEL = $(rmButtonPanel),
      rmButtonPanelPosition = 'right';
      RM_BUTTON_PANEL.addClass('rm-button--right');

    } else if( RM_BUTTON_PANEL.prev(rmButtonMore).length ) {

      pPanelHTML = RM_BUTTON_PANEL.outerHTML();
      RM_BUTTON_PANEL.remove();

      RM_DISPLAY.before( panelHTML );
      RM_BUTTON_PANEL = $(rmButtonPanel),
      rmButtonPanelPosition = 'left';
      RM_BUTTON_PANEL.addClass('rm-button--left');

    }
  } else if ( RM_BUTTON_MORE.length ) {
    if (RM_DISPLAY.next(rmButtonMore).length) {
      $(window).on('load', function () {
        RM_DISPLAY.css('padding-left', RM_BUTTON_MORE.outerWidth());
      });
    } else if (RM_DISPLAY.prev(rmButtonMore).length) {
      $(window).on('load', function() {
        RM_DISPLAY.css('padding-right', RM_BUTTON_MORE.outerWidth());
      });
    }
  }

  if( RM_BUTTON_MORE.length ) {
    if( RM_DISPLAY.next(rmButtonMore).length ) {

      rmButtonMorePosition = 'right';
      RM_MORE.css('right', 0);
      RM_BUTTON_MORE.addClass('rm-button--right');

    } else if( RM_DISPLAY.prev(rmButtonMore).length ) {

      rmButtonMorePosition = 'left';
      RM_MORE.css('left', 0);
      RM_BUTTON_MORE.addClass('rm-button--left');

    } else if( RM_BUTTON_MORE.next(rmButtonPanel).length ) {
      
      moreHTML = RM_BUTTON_MORE.outerHTML();
      RM_BUTTON_MORE.remove();

      RM_DISPLAY.after( moreHTML );
      RM_BUTTON_MORE = $(rmButtonMore),
      rmButtonMorePosition = 'right';
      RM_MORE.css('right', 0);
      RM_BUTTON_MORE.addClass('rm-button--right');

    } else if( RM_BUTTON_MORE.prev(rmButtonPanel).length ) {

      moreHTML = RM_BUTTON_MORE.outerHTML();
      RM_BUTTON_MORE.remove();

      RM_DISPLAY.before( moreHTML );
      RM_BUTTON_MORE = $(rmButtonMore),
      rmButtonMorePosition = 'left';
      RM_MORE.css('left', 0);
      RM_BUTTON_MORE.addClass('rm-button--left');

    }
  } else if (RM_BUTTON_PANEL.length) {
    if (RM_DISPLAY.next(rmButtonPanel).length) {
      $(window).on('load', function () {
        RM_DISPLAY.css("padding-left", RM_BUTTON_PANEL.outerWidth());
      });
    } else if (RM_DISPLAY.prev(rmButtonPanel).length) {
      $(window).on('load', function () {
        RM_DISPLAY.css('padding-right', RM_BUTTON_PANEL.outerWidth());
      });
    }
  }

}


//  ##     ##    ###    ######## 
//  ##     ##   ## ##   ##     ##
//  ##     ##  ##   ##  ##     ##
//  ##     ## ##     ## ######## 
//   ##   ##  ######### ##   ##  
//    ## ##   ##     ## ##    ## 
//     ###    ##     ## ##     ##

  rmColorLight = '#fff';
  rmColorDark  = '#000';
  rmColorGrey  = 'rgb(150,150,150)';
  rmColorLightGrey = 'rgb(240,240,240)';
  
  rmButtonMoreClicked  = false;
  rmButtonPanelClicked = false;
  rmLayout = 'small';

  rmPanelMaxWidth  = 400;
  animOpenPanelTime  = 400;
  animClosePanelTime = 300;
  animOpenMoreTime   = 400;
  animCloseMoreTime  = 300;

  rm          = '.rm';             RM            = $(rm);
  rmPanel     = '.rm-panel';       RM_PANEL      = $(rmPanel);
  rmPanelMenu = '.rm-panel__menu'; RM_PANEL_MENU = $(rmPanelMenu);
  rmMore      = '.rm-more';        RM_MORE       = $(rmMore);
  rmMoreMenu  = '.rm-more__menu';  RM_MORE_MENU  = $(rmMoreMenu);

  rmDisplay      = '.rm-display';       RM_DISPLAY       = $(rmDisplay);
  rmTitleWrapper = '.rm-title-wrapper'; RM_TITLE_WRAPPER = $(rmTitleWrapper);
  rmTitle        = '.rm-title';         RM_TITLE         = $(rmTitle);
  rmTitleText    = '.rm-title__text';   RM_TITLE_TEXT    = $(rmTitleText);
  rmButtonPanel  = '.rm-button--panel'; RM_BUTTON_PANEL  = $(rmButtonPanel);
  rmButtonMore   = '.rm-button--more';  RM_BUTTON_MORE   = $(rmButtonMore);

  // set up in Setup()
    rmButtonPanelPosition = '';
    rmButtonMorePosition  = '';

    rmPanelFirstImg     = '';
    RM_PANEL_FIRST_IMG  = '';
    rmPanelSecondImg    = '';
    RM_PANEL_SECOND_IMG = '';

    rmMoreFirstImg     = '';
    RM_MORE_FIRST_IMG  = '';
    rmMoreSecondImg    = '';
    RM_MORE_SECOND_IMG = '';

Setup();

  rmHeight = RM.height();
  rmPanelHeight = RM_PANEL.height() + (rmHeight*2);

  rmPanelFirstImg     = rmButtonPanel + ' .rm-button__icon:nth-child(1)';
  RM_PANEL_FIRST_IMG  = $(rmPanelFirstImg);
  rmPanelSecondImg    = rmButtonPanel + ' .rm-button__icon:nth-child(2)';
  RM_PANEL_SECOND_IMG = $(rmPanelSecondImg);

  rmMoreFirstImg     = rmButtonMore + ' .rm-button__icon:nth-child(1)';
  RM_MORE_FIRST_IMG  = $(rmMoreFirstImg);
  rmMoreSecondImg    = rmButtonMore + ' .rm-button__icon:nth-child(2)';
  RM_MORE_SECOND_IMG = $(rmMoreSecondImg);


//  ##     ## ######## #### ##      
//  ##     ##    ##     ##  ##      
//  ##     ##    ##     ##  ##      
//  ##     ##    ##     ##  ##      
//  ##     ##    ##     ##  ##      
//  ##     ##    ##     ##  ##      
//   #######     ##    #### ########

function GetPadding(_element) {
  $(_element).css('padding');
}
function SetPadding(_element, _top, _right, _bottom, _left) {
  padding = _top +' '+ _right +' '+ _bottom +' '+ _left;
  $(_element).css('padding', padding);
}
function AddPadding(_element, _top, _right, _bottom, _left) {
  ELEMENT = $(_element);
  padding =
    (parseInt( ELEMENT.css('padding-top'   ), 10) + _top   ) +'px '+
    (parseInt( ELEMENT.css('padding-right' ), 10) + _right ) +'px '+
    (parseInt( ELEMENT.css('padding-bottom'), 10) + _bottom) +'px '+
    (parseInt( ELEMENT.css('padding-left'  ), 10) + _left  ) +'px ';

  ELEMENT.css('padding', padding);
}



//  ##     ##  #######  ########  ########
//  ###   ### ##     ## ##     ## ##      
//  #### #### ##     ## ##     ## ##      
//  ## ### ## ##     ## ########  ######  
//  ##     ## ##     ## ##   ##   ##      
//  ##     ## ##     ## ##    ##  ##      
//  ##     ##  #######  ##     ## ########

function CheckShadow() {
  var overflowWidth = $(RM_MORE_MENU)[0].scrollWidth;
  var shownWidth = $(RM_MORE_MENU).width();
  var offsetLeft = $(RM_MORE_MENU).scrollLeft();
  //scrollPosition
  var atTheStart = offsetLeft == 0;
  var atTheEnd   = offsetLeft == overflowWidth - shownWidth;
  
  shadow = 'rgba(0,0,0,0.2)';
  if( RM.hasClass('rm-style--dark') ) {
    shadow = 'rgba(0,0,0,1)';
  }


  if(overflowWidth > shownWidth) {

    if (atTheStart) {
      $(RM_MORE_MENU).css('box-shadow','inset -10px 0 10px -10px ' + shadow);
    }
    else if (atTheEnd) {
      $(RM_MORE_MENU).css('box-shadow','inset 10px 0 10px -10px ' + shadow);
    }
    else {
      $(RM_MORE_MENU).css('box-shadow','inset 10px 0 10px -10px ' + shadow + ', inset -10px 0 10px -10px  ' + shadow);
    }

  } else {
    $(RM_MORE_MENU).css('box-shadow','none');
  }
}

CheckShadow();
RM_MORE_MENU.on('scroll', function(){
  CheckShadow();
});
$(window).on('resize', function(){
  CheckShadow();
});


//   ######  ######## ##    ## ##       ########
//  ##    ##    ##     ##  ##  ##       ##      
//  ##          ##      ####   ##       ##      
//   ######     ##       ##    ##       ######  
//        ##    ##       ##    ##       ##      
//  ##    ##    ##       ##    ##       ##      
//   ######     ##       ##    ######## ########

if( RM.hasClass('rm-style--dark') ) {
  // RM
  RM.css({
    'color': rmColorLight,
    'background-color': rmColorDark
  });

  // RM_DISPLAY
  RM_DISPLAY.css({
    'background-color': rmColorDark
  });

  // RM_BUTTON_PANEL
  RM_BUTTON_PANEL.css({
    'background-color': rmColorDark
  });
  RM_PANEL_FIRST_IMG.attr( 'src', 'rm-icons/menu-white.svg');
  RM_PANEL_SECOND_IMG.attr('src', 'rm-icons/close-white.svg');

  // RM_BUTTON_MORE
  RM_BUTTON_MORE.css({
    'background-color': rmColorDark
  });
  RM_MORE_FIRST_IMG.attr( 'src', 'rm-icons/more-white.svg');
  RM_MORE_SECOND_IMG.attr('src', 'rm-icons/hide-white.svg');

  // RM_MORE
  RM_MORE.css({
    'color': rmColorDark,
    'background-color': rmColorLight
  });

}

if( RM.hasClass('rm-style--fixed') ) {

  RM.css('position', 'fixed');
  AddPadding(RM.next(), rmHeight, 0, 0, 0);

}


//     ###    ##    ## #### ##     ##
//    ## ##   ###   ##  ##  ###   ###
//   ##   ##  ####  ##  ##  #### ####
//  ##     ## ## ## ##  ##  ## ### ##
//  ######### ##  ####  ##  ##     ##
//  ##     ## ##   ###  ##  ##     ##
//  ##     ## ##    ## #### ##     ##

function RmOpenPanel(_animTime) {
  anime({
    targets: rmPanelFirstImg,
    duration: _animTime/2,
    easing: 'easeInOutQuad',
    scale: [1,.5]
  }).complete = function(){

    $(rmPanelFirstImg).css('display','none');
    $(rmPanelSecondImg).css('display','block');
    anime({
      targets: rmPanelSecondImg,
      duration: _animTime/2,
      easing: 'easeInOutQuad',
      scale: [.5, 1]
    });

  }
  RM_PANEL.css({
    'transition':'transform '+_animTime+'ms',
    'transform':'translateX(0)'
  });
}
function RmClosePanel(_animTime) {
  anime({
    targets: rmPanelSecondImg,
    duration: _animTime/2,
    easing: 'easeInOutQuad',
    scale: [1,.5]
  }).complete = function(){

    $(rmPanelSecondImg).css('display','none');
    $(rmPanelFirstImg).css('display','block');
    anime({
      targets: rmPanelFirstImg,
      duration: _animTime/2,
      easing: 'easeInOutQuad',
      scale: [.5, 1]
    });

  }
  RM_PANEL.css({
    'transition':'transform '+_animTime/2+'ms',
    'transform':'translateX(-100%)'
  });
}


function RmOpenMore(_animTime) {
  anime({
    targets: rmMoreFirstImg,
    duration: _animTime/2,
    easing: 'easeInOutQuad',
    scale: [1,.5],
  }).complete = function(){

    $(rmMoreFirstImg).css('display','none');
    $(rmMoreSecondImg).css('display','block');
    anime({
      targets: rmMoreSecondImg,
      duration: _animTime/2,
      easing: 'easeInOutQuad',
      scale: [.5, 1]
    });

  }
  RM_MORE.css({
    'transition':'transform '+_animTime+'ms',
    'transform':'translateX(0)'
  });
}
function RmCloseMore(_animTime) {
  anime({
    targets: rmMoreSecondImg,
    duration: _animTime/2,
    easing: 'easeInOutQuad',
    scale: [1,.5]
  }).complete = function(){

    $(rmMoreSecondImg).css('display','none');
    $(rmMoreFirstImg).css('display','block');
    anime({
      targets: rmMoreFirstImg,
      duration: _animTime/2,
      easing: 'easeInOutQuad',
      scale: [.5, 1]
    });

  }
  if(rmButtonMorePosition == 'right') {
    originTranslateX = '100%';
  } else if (rmButtonMorePosition == 'left') {
    originTranslateX = '-100%';
  }
  RM_MORE.css({
    'transition':'transform '+_animTime/2+'ms',
    'transform':'translateX('+originTranslateX+')'
  });
}


RM_BUTTON_PANEL.on('click', function(){
  
  rmPanelHeight = RM_PANEL.height() + (rmHeight*2);

  if(!rmButtonPanelClicked) {
    
    rmButtonPanelClicked = true;
    if( !RM.hasClass('rm-style--fixed') ) {
      RM.css('position', 'fixed');
      AddPadding(RM.next(), rmHeight, 0, 0, 0);
    }

    RmOpenPanel(animOpenPanelTime);

  } else {
    
    rmButtonPanelClicked = false;
    if( !RM.hasClass('rm-style--fixed') ) {
      RM.css('position', 'static');
      AddPadding(RM.next(), -rmHeight, 0, 0, 0);
    }

    RmClosePanel(animClosePanelTime);

  }
});


$('.site-content').on('click',function(){

  if(CloseMenuWhenClickedOnContent == true) {

    if(rmButtonPanelClicked) {
  
      rmButtonPanelClicked = false;
      if( !RM.hasClass('rm-style--fixed') ) {
        RM.css('position', 'static');
        AddPadding(RM.next(), -rmHeight, 0, 0, 0);
      }
  
      RmClosePanel(animClosePanelTime);
  
    }
  }

});


RM_BUTTON_MORE.on('click', function(){
  if(RM_MORE.css('transform') == 'matrix(1, 0, 0, 1, 0, 0)') {
    RmCloseMore(animCloseMoreTime);
  } else {
    RmOpenMore(animOpenMoreTime);
  }
});


// ########  ########  ########    ###    ##    ## 
// ##     ## ##     ## ##         ## ##   ##   ##  
// ##     ## ##     ## ##        ##   ##  ##  ##   
// ########  ########  ######   ##     ## #####    
// ##     ## ##   ##   ##       ######### ##  ##   
// ##     ## ##    ##  ##       ##     ## ##   ##  
// ########  ##     ## ######## ##     ## ##    ## 
function RmTitleHTML(_size) {
  if(_size == 'huge') {

    return '<h1>III Liceum Ogólnokształcące im. Mikołaja Kopernika</h1>';

  } else if(_size == 'big') {

    return '<h1>III Liceum Ogólnokształcące Kopernik</h1>';

  } else if(_size == 'medium') {

    return '<h1>III LO Kopernik</h1>';

  } else if(_size == 'small') {

    return '<h3>III Liceum</h3><h1>Kopernik</h1>';

  }
}
function RmCheckTitleFit(_titleHTML, _layout) {
  let lastTitleHTML = RM_TITLE_TEXT.html();
  RM_TITLE_TEXT.html(_titleHTML);

  if(!RmCheckItemsFit(_layout)) {
    RM_TITLE_TEXT.html(lastTitleHTML);
  }
}
function RmTransformButton(_size) {
  if(_size == 'big') {

    RM_BUTTON_PANEL.addClass('rm-button--big');
    if(RM_BUTTON_PANEL.find('.rm-button__text').length == 0) {
      RM_BUTTON_PANEL.append(
        '<span class="rm-button__text">MENU</span>'
      );
    }
    // TODO: not sure bout that
    RM_BUTTON_PANEL.css('color','#fff');
    RM_BUTTON_PANEL.find('.rm-button__icon')
      .attr('src', templateUrl + '/assets/rm-icons/menu-white.svg');
    RM_BUTTON_PANEL.find('.rm-button__icon--close')
      .attr('src', templateUrl + '/assets/rm-icons/close-white.svg');

  } else if (_size == 'small') {

    RM_BUTTON_PANEL.removeClass('rm-button--big');
    RM_BUTTON_PANEL.find('.rm-button__text').remove();
    // TODO: not sure bout that
    RM_BUTTON_PANEL.css('color','#000');
    RM_BUTTON_PANEL.find('.rm-button__icon')
      .attr('src', templateUrl + '/assets/rm-icons/menu-black.svg');
    RM_BUTTON_PANEL.find('.rm-button__icon--close')
      .attr('src', templateUrl + '/assets/rm-icons/close-black.svg');

  }
}

window.RmCheckItemsFit = function(_layout) {
  rmButtonPanelWidth = RM_BUTTON_PANEL.outerWidth();
  rmButtonMoreWidth = RM_BUTTON_MORE.outerWidth();
  rmTitleWidth = RM_TITLE.outerWidth();
  rmMoreWidth  = RM_MORE.outerWidth();

  if(_layout == 'big') {
    rmItemsWidth =
      rmButtonPanelWidth + rmButtonMoreWidth +
      rmTitleWidth + rmMoreWidth + 10;
  } else if(_layout == 'small') {
    rmItemsWidth =
      rmButtonPanelWidth + rmButtonMoreWidth +
      rmTitleWidth + 10;
  }
  rmWidth = RM.outerWidth();

  if(rmItemsWidth < rmWidth) {
    return true;
  } else {
    return false;
  }
}



window.RmBreakpoint = function() {
  
  RM_TITLE_TEXT.html( RmTitleHTML('small') );
  RmTransformButton('big');
  
  if(RmCheckItemsFit('big')) {

    RM_BUTTON_MORE.css('display','none');
    RmOpenMore(0);

    RM_TITLE_WRAPPER.css('justify-content','flex-start');
    RM_TITLE.css('margin-left','15px');

    RmCheckTitleFit(RmTitleHTML('medium'), 'big');
    RmCheckTitleFit(RmTitleHTML('big'),    'big');
    RmCheckTitleFit(RmTitleHTML('huge'),   'big');

    rmLayout = 'big';

  } else {

    RmTransformButton('small');

    if(rmLayout == 'big') {
      RM_BUTTON_MORE.css('display','flex');
      RmCloseMore(0);
    }

    RM_TITLE_WRAPPER.css('justify-content','center');
    RM_TITLE.css('margin-left','0');

    RmCheckTitleFit(RmTitleHTML('big'), 'small');

    rmLayout = 'small';

  }

}

RmBreakpoint();
$(window).on('load resize', function(){
  RmBreakpoint();
  
  setTimeout(function(){
    RmBreakpoint();
  }, 100);
  setTimeout(function(){
    RmBreakpoint();
  }, 1000);
});
$('.rm-display').on('resize', function(){
  RmBreakpoint();
  
  setTimeout(function(){
    RmBreakpoint();
  }, 100);
  setTimeout(function(){
    RmBreakpoint();
  }, 1000);
});


  })(jQuery);
});