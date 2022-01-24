/*jshint esversion: 6 */
jQuery(function() {
    let started = false;
    let startCheckpoint = false;
    let cheated = false;

    let start = $("#start");
    let status = $("#status");
    let boundary = $(".boundary");
    let end = $("#end");

    boundary.on("mouseover", function() {
        if (started) {
            boundary.addClass("youlose");
            status.text("You Lose!");
            setTimeout(() => alert("You Lose!"), 0);
            started = false;
        }
    });

    $(document).on("keydown", function(event) {
        const keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 83) {
            boundary.removeClass("youlose");
            started = true;
            cheated = false;
            startCheckpoint = false;
            status.html("&nbsp");
        }
    });

    start.on("click", function() {
        boundary.removeClass("youlose");
        started = true;
        cheated = false;
        startCheckpoint = true;
    });

    $(document).on("mousemove", function(event) {
        if (started && startCheckpoint) {
            let left = $("#start").offset().left;
            let pointer = event.pageX;
            if (pointer < left) {
                cheated = true;
            }
        }
    });

    end.on("mouseover", function() {
        if (started && !cheated && startCheckpoint) {
            status.text("You Win!");
        } else if (started && cheated) {
            boundary.addClass("youlose");
            status.text("You Lose!");
            started = false;
        }
    });

    start.on("mouseover", function() {
        startCheckpoint = true;
        cheated = false;
    });
});