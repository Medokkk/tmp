import './index.sass';

$( function() {
  $('.header__btn').on('click', function () {
    $('.header__nav').toggleClass('header__nav--open')
  })
});

