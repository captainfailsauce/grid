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
    $('.square').hover(function() {
        $(this).css("background-color", "#fff");
    }, function(){
        $(this).css("animation", "fade 1s");
    })
});