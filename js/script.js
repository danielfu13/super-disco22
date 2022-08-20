
//var todayDate = new Date();

//var todayDate = moment().format("dddd, MMMM Do");
//document.getElementById('current-date').innerHTML=todayDate;
//var date = todayDate.getFullYear()+'-'+(todayDate.getMonth()+1)+'-'+todayDate.getDate();
//var time = todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds();
//var dateTime = date+' '+time;
//document.getElementById('current-date').innerHTML= dateTime;
$(document).ready(function () {
    $("#current-date").text(moment().format("MMMM Do YYYY, h:mma"));
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    $("#am9 .description").val(localStorage.getItem("am9"));
    $("#am10 .description").val(localStorage.getItem("am10"));
    $("#am11 .description").val(localStorage.getItem("am11"));
    $("#pm12 .description").val(localStorage.getItem("pm12"));
    $("#pm1 .description").val(localStorage.getItem("pm1"));
    $("#pm2 .description").val(localStorage.getItem("pm2"));
    $("#pm3 .description").val(localStorage.getItem("pm3"));
    $("#pm4 .description").val(localStorage.getItem("pm4"));
    $("#pm5 .description").val(localStorage.getItem("pm5"));

    function showTime() {
        var currentTime = moment().hour();
     
        $(".row").each(function () {
            var currentHour = parseInt($(this).attr("id").split("current-time")[1]);
            console.log(currentHour, currentTime)

            if (currentHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (currentHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    showTime();
})

