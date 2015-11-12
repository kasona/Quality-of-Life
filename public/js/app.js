
$('.property').children().slideToggle('fast');

$('.property').on('click', function() {
  $(this).children().slideToggle('fast');
});