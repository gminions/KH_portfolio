$(function(){
//topbn
$('.fa-xmark').on('click',function(){
    $('#topbn').css({
        top: '-42px'
    },500);
    $('#mainvisual').css({
        margin: '-42px'
    });
})







//slick
$('figure').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear',
    nextArrow:$('.prv'),
    prevArrow:$('.nxt'),
  });









});