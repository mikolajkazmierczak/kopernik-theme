$(function(){

  let mainSectionElems = $('.main-section');
  let mainSectionImageElems = $('.main-section__image');
  let mainSectionImgElems = $('.main-section__img');
  let mainSectionTextElems = $('.main-section__text');


  UpdateMainSectionsLayout();
  $(window).on('load resize', function(){
    UpdateMainSectionsLayout();
  });
  PinSwitchButton.on('click', function(){
    setTimeout(function() {
      UpdateMainSectionsLayout();
    }, 200);
  })

  function EditClassInElems(elems, classNames, addOrRemove) {
    elems.each(function(_index, _elem) {
      console.log($(_elem));
      if(addOrRemove == 'add') {
        $(_elem).addClass(classNames);
      } else {
        $(_elem).removeClass(classNames);
      }
    });
  }

  function UpdateMainSectionsLayout(){
    
    let breakpoint = null;
    if(CloseMenuWhenClickedOnContent == false) {
      breakpoint = 1180;
    } else {
      breakpoint = 780;
    }

    if($(window).width() > breakpoint) {
      EditClassInElems(
        mainSectionElems,
        'main-section--big-layout',
        'add'
      );
      EditClassInElems(
        mainSectionImageElems,
        'main-section__image--big-layout',
        'add'
      );
      EditClassInElems(
        mainSectionImgElems,
        'main-section__img--big-layout',
        'add'
      );
      EditClassInElems(
        mainSectionTextElems,
        'main-section__text--big-layout',
        'add'
      );
    } else {
      EditClassInElems(
        mainSectionElems,
        'main-section--big-layout',
        'remove'
      );
      EditClassInElems(
        mainSectionImageElems,
        'main-section__image--big-layout',
        'remove'
      );
      EditClassInElems(
        mainSectionImgElems,
        'main-section__img--big-layout',
        'remove'
      );
      EditClassInElems(
        mainSectionTextElems,
        'main-section__text--big-layout',
        'remove'
      );
    }

  }
  
});