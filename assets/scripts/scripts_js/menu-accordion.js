$ = jQuery.noConflict();
$(function() {

  accordionEnabled = true;

  let itemMenu        = ".menu-item-has-children";
  let menu            = "ul";
  let itemsMenuOpened = "menu-item--menu-opened"
  let menuOpened      = "menu--opened";

  let openingSpeed = 200; // miliseconds

  let clickDisabled = false; // making sure the button clicks won't stack up creating bugs
  $(itemMenu).on('click', function(event){
    if(accordionEnabled) {

      if(clickDisabled == true) {
        return;
      } else {
        clickDisabled = true;
  
        if( $(this).children(menu).hasClass(menuOpened) ) {
          $(this).removeClass(itemsMenuOpened);
          $(this).children(menu).removeClass(menuOpened);
          $(this).children(menu).slideToggle(openingSpeed);
        } else {
          $(this).addClass(itemsMenuOpened);
          $(this).children(menu).addClass(menuOpened);
          $(this).children(menu).slideToggle(openingSpeed);
        }
  
        $(this).parent(menu).find(itemMenu).not(this).each(function(index, elem){
          if( $(elem).children(menu).hasClass(menuOpened) ) {
            $(elem).removeClass(itemsMenuOpened);
            $(elem).children(menu).removeClass(menuOpened);
            $(elem).children(menu).slideToggle(openingSpeed);
          }
        });
  
        event.stopPropagation();
  
        clickDisabled = false;
      }
    }

  });

});