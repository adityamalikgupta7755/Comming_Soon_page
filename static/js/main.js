const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

var newYears = '14 Mar 2021';

function countdown() {
    var newYearsDate = new Date(newYears);
    var currentDate = new Date();

    var Totaltime = (newYearsDate - currentDate) / 1000;

    var days = Math.floor(Totaltime / 3600 / 24);
    var hours = Math.floor(Totaltime / 3600) % 24;
    var mins = Math.floor(Totaltime / 60) % 60;
    var seconds = Math.floor(Totaltime) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    if (Totaltime < 0) {
        document.getElementById("main").innerHTML = "Welcome";
        document.getElementById("hide").style.display = "none";
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
//  initial call
countdown();

setInterval(countdown, 1000);