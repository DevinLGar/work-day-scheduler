

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

$(".btn").on("click", function() {
    var time = $(this).siblings(".hour").text();
    var errand = $(this).siblings(".col-10").val();

    localStorage.setItem(time, errand);
});

function loadSched() {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var errand = localStorage.getItem(currentHour);

        if(errand !== null) {
            $(this).siblings(".col-10").val(errand);
        }
    })
}

timeBlockColor();
loadSched();