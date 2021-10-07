//Slick Initialization
$(document).ready(function(){
    $('.player-cards').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
});
});
$(document).ready(function(){
    $('.fixtures').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
    });
});