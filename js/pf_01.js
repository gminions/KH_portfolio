$(document).ready(function () {

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