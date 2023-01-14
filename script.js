$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 40);
});

$(document).ready(function(){
    $('.navbar-light > button').on('click', function(){
        $('.navbar-light').toggleClass('color-changed');
    });
    });