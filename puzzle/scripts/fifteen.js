"use strict";
$(function() {
    let init = function() {
        const divs = $('#puzzlearea').find('div');

        // initialize each piece
        for (let i = 0; i < divs.length; i++) {
            const div = divs[i];

            // calculate x and y for this piece
            const x = ((i % 4) * 100);
            const y = (Math.floor(i / 4) * 100);

            // set basic style and background
            div.className = "puzzlepiece";
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            div.style.backgroundImage = 'url("background.jpeg")';
            div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

            // store x and y for later
            div.x = x;
            div.y = y;
        }
    }();

    $('body').on('click', '.puzzlepiece', function(event) {
        checkAvailableMove(event.target, false);
    });

    function checkAvailableMove(target, highlight) {
        
        let left = parseInt($(target).position().left);

        if (left % 100 != 0) {
          left++;
        }
    
        let top = parseInt($(target).position().top);
    
        if (top % 100 != 0) {
          top++;
        } 

        let control;

        //Check top
        let checkLeft = left;
        let checkTop = top - 100;
        control = setProperPiece(checkLeft, checkTop, target, highlight);

        if (control) {
            return true;
        }

        //Check right side
        checkLeft = left + 100;
        checkTop = top;
        control = setProperPiece(checkLeft, checkTop, target, highlight);

        if (control) {
            return true;
        }

        //Check bottom side
        checkLeft = left;
        checkTop = top + 100;
        control = setProperPiece(checkLeft, checkTop, target, highlight);

        if (control) {
            return true;
        }

        //Check left side
        checkLeft = left - 100;
        checkTop = top;
        control = setProperPiece(checkLeft, checkTop, target, highlight);

        if (control) {
            return true;
        }
    }

    function setProperPiece(checkLeft, checkTop, target, highlight) {
        let temp = $(".puzzlepiece").filter(function() {
            var self = $(this);
            var result = self.css('left') === checkLeft + 'px' &&
                self.css('top') === checkTop + 'px';
            return result;
        });
        let checkElement = temp.length > 0 ? temp : undefined;
        if (checkTop >= 0 && checkLeft <= 300 && checkLeft >= 0 && checkTop <= 300 && checkElement == undefined) {
            if (!highlight) {
                $(target).css("left", checkLeft + 'px');
                $(target).css("top", checkTop + 'px');
            } else {
                return true;
            }
        }
        if (highlight) {
            return false;
        }
    }

    $('#shufflebutton').on('click', function(event) {
        shuffle();
    });

    function shuffle() {
        for (var j = 0; j < getRandomArbitrary(0, 50); j++) {
            $(".puzzlepiece").trigger("click");
        }
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    $(document).on({
        mouseenter: function(event) {
            if (checkAvailableMove(event.target, true)) {
                $(event.target).css("color", 'red');
                $(event.target).css("border", '5px solid red');
            }
        },
        mouseleave: function(event) {
            $(event.target).css("color", 'black');
            $(event.target).css("border", '5px solid black');
        }
    }, ".puzzlepiece");
});