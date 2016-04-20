/*Created by CaptainFailsauce on 14/04/2016.
 */
var gridSize = 8;
var squareSize;
$(document).ready(function () {
    "use strict";
    var clearGrid = function () {
            $('.grid').html('');
        },

        drawGrid = function () {
            squareSize = 850 / gridSize - 2;
            var x = 0;
            for (x; x < gridSize * gridSize; x++) {
                $('.grid').append('<div class="square"></div>');
            }
            $('.square').width(squareSize).height(squareSize);

            $('.square').on("animationend", function () {
                $(this).removeClass("animated");
                $(this).css("background", "#fff");
            });

            $('.square').on("mouseenter", function () {
                $(this).removeClass("animated");
                $(this).stop(true);
                $(this).css("background", "#000");
            });

            $('.square').on("mouseleave", function () {
                $(this).addClass("animated");
            });
        };
    drawGrid();

    $('#resize').on('click', function () {
        gridSize = prompt('Enter new grid count.');
        clearGrid();
        drawGrid();
    });
});