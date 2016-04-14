/**
 * Created by CaptainFailsauce on 14/04/2016.
 */
$(document).ready(function(){
    for (x = 0; x < 8; x++) {
        for (y = 0; y < 8; y++) {
            $('.container').append('<div class="square"></div>')
        }
        $('.container').append('<br>')
    }
    $('.square').on("animationend", function(){
        $(this).removeClass("animated");
        $(this).css("background", "#fff")
    });

    $('.square').on("mouseenter", function(){
        $(this).removeClass("animated");
        $(this).stop(true);
        $(this).css("background", "#000")
    });

    $('.square').on("mouseleave", function(){
        $(this).addClass("animated");
    })
});