$(document).ready(function () {

    $(".list li:first-child").click(function(){
        $("#popup_pt01").addClass("active");
    });
    $(".btn").click(function(){
        $("#popup_pt01").removeClass("active");
    });
    /*popup_pt01*/
    $(".list li:nth-child(2)").click(function(){
        $("#popup_pt02").addClass("active");
    });
    $(".btn").click(function(){
        $("#popup_pt02").removeClass("active");
    });
    /*popup_pt02*/
    $(".list li:nth-child(3)").click(function(){
        $("#popup_pt03").addClass("active");
    });
    $(".btn").click(function(){
        $("#popup_pt03").removeClass("active");
    });
    /*popup_pt03*/
    $(".list li:last-child").click(function(){
        $("#popup_pt04").addClass("active");
    });
    $(".btn").click(function(){
        $("#popup_pt04").removeClass("active");
    });
    /*popup_pt04*/




});