$(document).ready(function(){

     //말풍선클릭
     $('.base').on('mouseover', function(){
        $('.click').css({
            display: 'block'
        }).on('mouseout', function(){
            $('click').css({
                display: 'none'
            });
        });
     });

    //$('.base').mouseover(function(){
    //    $(this).find('.click img').addClass("on").fadeIn();
    //}).mouseout(function(){
    //    $(this).find('.click img').removeClass("on");
    //});



});