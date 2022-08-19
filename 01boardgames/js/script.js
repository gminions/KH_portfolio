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


























});