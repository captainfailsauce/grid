/**
 * Created by CaptainFailsauce on 14/04/2016.
 */
$(document).ready(function(){
    for (x = 0; x < 8; x++) {
        for (y = 0; y < 8; y++) {
            $('body').append('<div class="square"></div>')
        }
        $('body').append('<br>')
    }
});