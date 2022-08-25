$(document).ready(function () {
    //스크롤효과
    // let winHeight = $('#section').height();

    //     $(window).on('resize', function () {
    //         winHeight = $("#section").height();
    //     });

        // $(window).on('scroll', scrollPage);
        // scrollPage();

        $('#wrap section').on('mousewheel', function (e, d) {
            if (d > 0) { // 스크롤을 올렸을 때
                let prv = $(this).prev().offset().top;
                $('html,body').stop().animate({
                    scrollTop: prv
                });
            } else if (d < 0) { //스크롤을 내렸을 때
                let nxt = $(this).next().offset().top;
                $('html,body').stop().animate({
                    scrollTop: nxt
                });
            }
        })





    // $("body").swipe({
    //     swipe: function(event, direction){
    //         if($("#section").is(":animated")){
    //             return
    //         }
    //         if(direction=="up"){
    //             count++;
    //             if(count>$("#section").length-1){
    //                 count=$("#section").length-1;
    //             }

    //         }else if(direction=="down"){
    //             count--;
    //             if(count<0){
    //                 count=0;
    //             }

    //         }else if(direction=="left"){
    //         }else if(direction=="right"){   
    //         }

    //         $("#section").stop().animate({
    //             top: -100*count+"%"
    //         },1000)
    //     }
    // })
    
    





    //skill
    $(function () {
        $('.skill_btn>ul>li').click(function () {
            $(this).addClass("click").siblings().removeClass("click");
        });
    });

    $('.skill_btn ul li').eq(0).addClass("click");
    $('.skill_btn ul li').click(function(){
        let i=$(this).index();
        $('.skill_txt p').hide().eq(i).fadeIn();
        $('.skill_txt p').removeClass("click").eq(i).addClass("click");
    });


});