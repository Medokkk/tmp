import './index.sass';

$( function() {
  $('.header__trigger').on('click', function () {
    $('.header__nav').toggleClass('header__nav--open')
  })
});

