"use strict";
$(function(){
  var $intro = $('.intro')[0];

  window.setTimeout(function() {
    $('.start').removeClass('start');
  }, 100);

  $('.nineties-button').on('click',function() {
    $('body').toggleClass('nineties');
  });

  if (document.querySelector('.hero').getBoundingClientRect().width === 0) {
    $('img.start').removeClass('start');
    $('p.blue-text span').addClass('showMe');
  } else {
    $(document).on('scroll', function(e) {
    if ($intro.getBoundingClientRect().top < 150) {
      $('img.start').removeClass('start');
      $(document).off('scroll');
      $('p.blue-text span').addClass('showMe');
    }
  });
  }
});
