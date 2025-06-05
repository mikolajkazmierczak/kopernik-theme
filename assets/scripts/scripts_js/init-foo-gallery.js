$(function() {

  $fooGallery = $('.foogallery-album-header');

  $fooGallery.each(function(){
    $fooGalleryLink = $(this).find('a');

    $fooGalleryLink.addClass('button button--big');
    $fooGalleryLink.html('');
    $fooGalleryLink.append('<span>Wróć do albumów</span>');
    $fooGalleryLink.children('span').addClass('button__text');

    $fooGalleryTitle = $(this).children('h2').html();
    $(this).children('h2').remove();
    $(this).append('<h1 style="text-align:center">' + $fooGalleryTitle +'</h1>');
  });


  function TrimTitle(_string) {
    let newString = _string.trim(),
        oldStringLength = _string.trim().length,
        maxStringLength = 60;
    if(oldStringLength > maxStringLength) {
      newString = newString.substr(0, maxStringLength);
      console.log(newString);
      lastSpace = newString.lastIndexOf(' ');
      newString = newString.slice(0, lastSpace);
      console.log(newString);
      newString += '...';
    }
    return newString;
  }


  $fooAlbum = $('.foogallery-pile');

  $fooAlbum.each(function(){
    $(this).find('h3').each(function(){
      
      $fooAlbumImgs = $(this).find('span');
      $fooAlbumImgsString = $fooAlbumImgs.html();

      $fooAlbumImgs.html(
        $fooAlbumImgsString.replace(' image', '')
      )
      $fooAlbumImgsString = $fooAlbumImgs.html();

      $fooAlbumImgs.html(
        $fooAlbumImgsString.replace('s', '')
      )
      $fooAlbumImgsString = $fooAlbumImgs.html();

      $fooAlbumImgs.remove();

      $(this).html(
        TrimTitle( $(this).html() )
        + '<span>Zdjęcia: '+$fooAlbumImgsString+'</span>'
      );

    });
  });

});