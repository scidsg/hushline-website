$(document).ready(function() {

  $('.btnIcon').on('click', function() {
    $('.navItems').toggleClass('open');
  });

  $('NAV li').on('click', function() {
    $('.staged').removeClass('open');
  });

});