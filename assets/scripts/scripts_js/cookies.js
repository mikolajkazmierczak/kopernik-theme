$(function() {

  //code.iamkate.com
  Cookies={set:function(b,c,a){b=[encodeURIComponent(b)+"="+encodeURIComponent(c)];a&&("expiry"in a&&("number"==typeof a.expiry&&(a.expiry=new Date(1E3*a.expiry+ +new Date)),b.push("expires="+a.expiry.toGMTString())),"domain"in a&&b.push("domain="+a.domain),"path"in a&&b.push("path="+a.path),"secure"in a&&a.secure&&b.push("secure"));document.cookie=b.join("; ")},get:function(b,c){for(var a=[],e=document.cookie.split(/; */),d=0;d<e.length;d++){var f=e[d].split("=");f[0]==encodeURIComponent(b)&&a.push(decodeURIComponent(f[1].replace(/\+/g,"%20")))}return c?a:a[0]},clear:function(b,c){c||(c={});c.expiry=-86400;this.set(b,"",c)}};



  let cookiesConsent = $('.cookies-consent');
  let cookiesConsentButton = $('.cookies-consent__button');

  CheckCookieConsent();

  function CheckCookieConsent() {
    let cookieValue = Cookies.get('cookieConsent');

    if(cookieValue == 'true') {
      cookiesConsent.removeClass('cookies-consent--disabled');
    } else {
      cookiesConsent.addClass('cookies-consent--disabled');
    }
  }

  // Cookies.clear('cookieConsent'); // for testing

  cookiesConsentButton.on('click',function(e){
    e.preventDefault();

    Cookies.set('cookieConsent','true', {path : '/', expiry : 30000000});
    CheckCookieConsent();
  });
  
  $(window).on('load',function(){
    CheckCookieConsent();
  });

});