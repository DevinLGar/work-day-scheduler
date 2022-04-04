

$("#currentDay").text(moment().format("MMM DD, YYYY"));

function timeBlockColor() {
    var currentHour = moment().hours();
    console.log(currentHour);
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).children().attr("id"));
        console.log(blockHour);
        if (blockHour > currentHour) {
            $(this).addClass("future");
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

timeBlockColor();