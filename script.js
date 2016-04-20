/*Created by CaptainFailsauce on 14/04/2016.
 */
var gridSize = 8;
var squareSize = Math.floor(960 / gridSize) - 2;
$(document).ready(function () {
    "use strict";
    var drawGrid = function () {
        var x = 0, y = 0;
        for (x; x < gridSize; x++) {
            for (y = 0; y < gridSize; y++) {
                $('.container').append('<div class="square"></div>');
            }
            $('.square:last-child').addClass('clearLine');
        }
        $('.square').width(squareSize).height(squareSize);
    }
    drawGrid();
    $('.square').on("animationend", function () {
        $(this).removeClass("animated");
        $(this).css("background", "#fff")
    });

    $('.square').on("mouseenter", function () {
        $(this).removeClass("animated");
        $(this).stop(true);
        $(this).css("background", "#000")
    });

    $('.square').on("mouseleave", function () {
        $(this).addClass("animated");
    });
});