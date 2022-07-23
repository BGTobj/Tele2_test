$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger,.header__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header__list').click(function() {
        $('.header__list,.header__burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.spoiler__title').click(function(event) {
        $(this).toggleClass('active');
        $(this).parents('.spoiler__item').toggleClass('active').find('.spoiler__text').slideToggle(300);
    });
});

const slider = tns({
    responsive: {
        640: {
            container: '.location__preview',
            items: 1,
            slideBy: 'page'
        }
    }
  });