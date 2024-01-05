let stopWatchTimer, showClock = true;
function startTImer() {
    clearInterval(stopWatchTimer)
    stopWatchTimer = setInterval(updatetimer, 100)
}

let a, time;
setInterval(function () {
    a = new Date();
    time = a.getHours().toString().padStart(2, '0') + ':' + a.getMinutes().toString().padStart(2, '0') + ':' + a.getSeconds().toString().padStart(2, '0')
    document.getElementById("time").innerHTML = time;
}, 1000)

function pauseTimer() {
    setTimeout(function () {
        clearInterval(stopWatchTimer)
    })
}

function clearTimer() {
    clearInterval(stopWatchTimer);
    hour = 0
    minute = 0
    second = 0
    milli = 0
    document.getElementById("hour").innerHTML = hour.toString().padStart(2, '0');
    document.getElementById("minute").innerHTML = minute.toString().padStart(2, '0');
    document.getElementById("second").innerHTML = second.toString().padStart(2, '0');
    document.getElementById("milli").innerHTML = milli.toString().padStart(2, '0');
}

function convertion() {

    showClock = !showClock

    if (showClock == true) {
        document.getElementById("time").style.display = "flex";
        document.getElementById("stopwatch").style.display = "none";
    } else {

        document.getElementById("time").style.display = "none";
        document.getElementById("stopwatch").style.display = "flex";
    }

}


let hour = 0, minute = 0, second = 0, milli = 0;
function updatetimer() {
    milli = milli + 100;
    document.getElementById("milli").innerHTML = milli / 10;
    if (minute >= 59) {
        hour++
        minute = 0;
        document.getElementById("hour").innerHTML = hour.toString().padStart(2, '0');
    }
    if (second >= 59) {
        minute++
        document.getElementById("minute").innerHTML = minute.toString().padStart(2, '0');
        second = 0;
    }
    if (milli >= 900    ) {
        second++
        document.getElementById("second").innerHTML = second.toString().padStart(2, '0');
        milli = 0;
    }
}

