$(function() {

  PinSwitchButton = $('.menu-switches__button--pin');
  ExpandSwitchButton = $('.menu-switches__button--expand');
  
  let PinSwitchImageApply = '.menu-switches__button--pin .menu-switches__icon--apply';
  let PinSwitchImageReverse = '.menu-switches__button--pin .menu-switches__icon--reverse';
  let ExpandSwitchImageApply = '.menu-switches__button--expand .menu-switches__icon--apply';
  let ExpandSwitchImageReverse = '.menu-switches__button--expand .menu-switches__icon--reverse';

  let PinSwitchText = $('.menu-switches__button--pin .menu-switches__text');
  let ExpandSwitchText = $('.menu-switches__button--expand .menu-switches__text');

  PinSwitchButtonClicked = false;
  ExpandSwitchButtonClicked = false;

  CloseMenuWhenClickedOnContent = true;

  let _animTime = 400;

  // for accordion
  let itemMenu        = ".menu-item-has-children";
  let menu            = "ul";
  let itemsMenuOpened = "menu-item--menu-opened"
  let menuOpened      = "menu--opened";
  let openingSpeed = 200; // miliseconds


  function PinApply() {
    
    PinSwitchButtonClicked = true;
    CloseMenuWhenClickedOnContent = false;

    $('.site-wrapper').css({
      'width':'calc(100% - 400px)',
      'margin-left':'400px'
    });

    // animate
    anime({
      targets: PinSwitchImageApply,
      duration: _animTime/2,
      easing: 'easeInOutQuad',
      scale: [1,.5],
    }).complete = function(){
  
      $(PinSwitchImageApply).css('display','none');
      $(PinSwitchImageReverse).css('display','block');
      anime({
        targets: PinSwitchImageReverse,
        duration: _animTime/2,
        easing: 'easeInOutQuad',
        scale: [.5, 1]
      });
  
    }

    PinSwitchText.html('Odepnij Menu');

    // turn off menu-panel button
    $('.rm-button--panel').addClass('rm-button--panel--off');

    Cookies.set('IsMenuOpened', 'true', {path : '/', expiry:30000000});

  }

  function PinReverse() {

    PinSwitchButtonClicked = false;
    CloseMenuWhenClickedOnContent = true;

    $('.site-wrapper').css({
      'width':'100%',
      'margin-left':'0'
    });


    // animate
    anime({
      targets: PinSwitchImageReverse,
      duration: _animTime/2,
      easing: 'easeInOutQuad',
      scale: [1,.5]
    }).complete = function(){
  
      $(PinSwitchImageReverse).css('display','none');
      $(PinSwitchImageApply).css('display','block');
      anime({
        targets: PinSwitchImageApply,
        duration: _animTime/2,
        easing: 'easeInOutQuad',
        scale: [.5, 1]
      });
  
    }

    PinSwitchText.html('Przypnij Menu');

    // turn on menu-panel button
    $('.rm-button--panel').removeClass('rm-button--panel--off');

    Cookies.set('IsMenuOpened', 'false', {path : '/', expiry:30000000});

  }


  function ExpandApply() {

    ExpandSwitchButtonClicked = true;
    accordionEnabled = false;

    $('.menu-item-has-children > a').css({
      'background-position-x': 'calc(100% + 25px)'
    });
     
    $(itemMenu).each(function(event){

      if( $(this).hasClass(itemsMenuOpened) ) {
        $(this).removeClass(itemsMenuOpened);
        $(this).children(menu).removeClass(menuOpened);
        $(this).children(menu).slideUp(openingSpeed);
      }

      $(this).addClass(itemsMenuOpened);
      $(this).children(menu).addClass(menuOpened);
      $(this).children(menu).slideDown(openingSpeed);
    });


    // animate
    anime({
      targets: ExpandSwitchImageApply,
      duration: _animTime/2,
      easing: 'easeInOutQuad',
      scale: [1,.5],
    }).complete = function(){
  
      $(ExpandSwitchImageApply).css('display','none');
      $(ExpandSwitchImageReverse).css('display','block');
      anime({
        targets: ExpandSwitchImageReverse,
        duration: _animTime/2,
        easing: 'easeInOutQuad',
        scale: [.5, 1]
      });
  
    }

    ExpandSwitchText.html('Zamknij zakładki');

    Cookies.set('IsMenuExpanded', 'true', {path : '/', expiry:30000000});

  }

  function ExpandReverse() {

    ExpandSwitchButtonClicked = false;
    accordionEnabled = true;
    
    $('.menu-item-has-children > a').css({
      'background-position-x': 'calc(100% - 5px)'
    });

    $(itemMenu).each(function(event){
      $(this).removeClass(itemsMenuOpened);
      $(this).children(menu).removeClass(menuOpened);
      $(this).children(menu).slideUp(openingSpeed);
    });


    // animate
    anime({
      targets: ExpandSwitchImageReverse,
      duration: _animTime/2,
      easing: 'easeInOutQuad',
      scale: [1,.5]
    }).complete = function(){
  
      $(ExpandSwitchImageReverse).css('display','none');
      $(ExpandSwitchImageApply).css('display','block');
      anime({
        targets: ExpandSwitchImageApply,
        duration: _animTime/2,
        easing: 'easeInOutQuad',
        scale: [.5, 1]
      });
  
    }

    ExpandSwitchText.html('Rozszerz zakładki');

    Cookies.set('IsMenuExpanded', 'false', {path : '/', expiry:30000000});

  }
  
  
  PinSwitchButton.on('click', function(){
    if (PinSwitchButtonClicked == false) {
      PinApply();
    } else {
      PinReverse();
    }

    RmBreakpoint();
    setTimeout(function() {
      RmBreakpoint();
    }, 100);
    setTimeout(function() {
      RmBreakpoint();
    }, 200);
  });

  ExpandSwitchButton.on('click', function(){
    if (ExpandSwitchButtonClicked == false) {
      ExpandApply();
    } else {
      ExpandReverse();
    }
  });

  if (Cookies.get('IsMenuOpened') == 'true') {

    PinApply();

    $('.rm-button--panel').addClass('rm-button--panel--not-animated');
    $('.site-wrapper').addClass('site-wrapper--not-animated');

    // open panel
    rmButtonPanelClicked = true;
    if( !RM.hasClass('rm-style--fixed') ) {
      RM.css('position', 'fixed');
      AddPadding(RM.next(), rmHeight, 0, 0, 0);
    }
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
      'transition':'transform '+0+'ms',
      'transform':'translateX(0)'
    });

    setTimeout(function() {
      $('.rm-button--panel').removeClass('rm-button--panel--not-animated');
      $('.site-wrapper').removeClass('site-wrapper--not-animated');
    }, 400);

  } else {
    PinReverse();
  }

  if (Cookies.get('IsMenuExpanded') == 'true') {
    ExpandApply();
  } else {
    ExpandReverse();
  }






  UpdateMenuButton();
  $(window).on('load resize', function(){
    UpdateMenuButton();
  });
  PinSwitchButton.on('click', function(){
    setTimeout(function() {
      UpdateMenuButton();
    }, 200);
  })

  function UpdateMenuButton(){
    
    let buttonBreakpoint = 1000;

    if($(window).width() > buttonBreakpoint ||
       PinSwitchButtonClicked == true) {
      PinSwitchButton.addClass('menu-switches__button--pin--enabled');
    } else {
      PinSwitchButton.removeClass('menu-switches__button--pin--enabled');
    }

  }

});