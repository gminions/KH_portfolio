$(function(){

    //메인비쥬얼
    $('#mainVisual').slick({
        //slidesToShow: 1,
        arrows: false,
        dots: true,
        speed: 500,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 1000,
    });
    
    //베스트상품
    $('.item').slick({
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
      });

    
    //메뉴
    $('.gnb>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(300);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(300);
    });


























});