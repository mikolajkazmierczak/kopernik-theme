
var $ = jQuery.noConflict();

// jquery outerHTML plugin
jQuery.fn.outerHTML = function() {
  return jQuery('<div />').append(this.eq(0).clone()).html();
};