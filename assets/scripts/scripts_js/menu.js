$(function(){

  function getFileExtension(path) {
    // extract file name from full path ...
    // (supports `\\` and `/` separators)
    let basename = path.split(/[\\/]/).pop(),
  
    // get last position of `.`
    pos = basename.lastIndexOf(".");
  
    // if file name is empty or ...
    if (basename === "" || pos < 1)
      //  `.` not found (-1) or comes first (0)
      return "";
  
    // extract extension ignoring `.`
    return basename.slice(pos + 1);
  }

  let panelMenuTopLevelItems =
    $('.rm-panel__menu')
      .children('.menu')
      .children('.menu-item')
      .children('a');
  
  let panelMenuAllItems = 
    $('.rm-panel__menu')
      .find('a');

  let moreMenuAllItems = 
    $('.rm-more__menu')
      .find('a');

  let menuIconsPath = templateUrl+'/assets/icons/menu/';
  let menuBgIconsPath = menuIconsPath+'bg-icons/';

  panelMenuAllItems.each(function(_index, _elem) {

    let elem = $(_elem);
    let elemText = elem.html();

    elem.html(
      '<span>'+elemText+'</span>'
    );

  });

  panelMenuAllItems.each(function(_index, _elem) {

    let elem = $(_elem);
    let link = elem.attr('href');

    elem.addClass('a--ns');

    if(link !== undefined) {
      let extension = getFileExtension(link);
      switch (extension) {
        case 'pdf':

        case 'doc':
        case 'docx':
        case 'odt':

        case 'xls':
        case 'xlsx':

        case 'odp':
          let elemText = elem.html();
          elem.html(
            elemText +
            '<img class="menu-item__download-img" src="\
              '+menuIconsPath+'download.svg\
            ">'
            // + '<h6>'+extension+'</h6>'
          );
          break;
      }
    }

  });

  panelMenuTopLevelItems.each(function(_index, _elem) {
    let elem = $(_elem);
    let title = elem.find('span').html().trim();
    let icon = '';

    switch (title) {
      case 'Szkoła':
        icon = 'school.svg?n=1';
        break;
      case 'Konkursy i olimpiady':
        icon = 'competitions.svg?n=1';
        break;
      case 'Uczniowie':
        icon = 'students.svg?n=1';
        break;
      case 'Kandydaci':
        icon = 'candidates.svg?n=1';
        break;
      case 'Maturzyści':
        icon = 'matura.svg?n=1';
        break;
      case 'Absolwenci':
        icon = 'graduates.svg?n=1';
        break;
      // case 'Chór':
      //   icon = 'choir.svg?n=1';
      //   break;
      // case 'Kopernik News':
      //   icon = 'kop-news.svg?n=1';
      //   break;
      // case 'Biblioteka':
      //   icon = 'library.svg?n=1';
      //   break;
      // case 'Kronika Sportowa':
      //   icon = 'sport.svg?n=1';
      //   break;
      // case 'Galeria':
      //   icon = 'gallery.svg?n=1';
      //   break;
      // case 'Artykuły':
      //   icon = 'articles.svg?n=1';
      //   break;
      case 'Nasze działania':
        icon = 'projects.svg?n=1';
        break;
    }

    if(icon != '') {

      let elemText = elem.html();
      elem.html(
        '<img class="menu-item__what-is-this-img" src="\
          '+menuBgIconsPath+ icon +
        '">'
        + elemText
      );

    }
  });

  moreMenuAllItems.each(function(_index, _elem) {

    let elem = $(_elem);

    elem.addClass('a--ns');

  });
  
  

});