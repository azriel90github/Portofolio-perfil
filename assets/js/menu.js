$(document).ready(function () {
  $('#close').click(function () {
    $('#mobile').fadeOut('fast', function () {});
  });
  $('#open').click(function () {
    $('#mobile').fadeIn('fast', function () {});
  });
  $('#about').click(function () {
    $('#tab').slideToggle('normal', function () {});
  });
});



