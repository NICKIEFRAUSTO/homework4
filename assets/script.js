var timerEl = document.querySelector(".timer");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("startBtn");


var secondsLeft = 10;
var timerInterval;




function setTimer() {
    timerInterval = setInterval(function() {
        timerEl.textContent = secondsLeft + " Time Remaining";
        secondsLeft--;
        
        if (secondsLeft <= 0) {
            timerEl.textContent = secondsLeft + " Time Remaining";
            clearInterval(timerInterval);
            sendMessage();
        }
    } , 1000);
}


startBtn.addEventListener("click", function() {
    clearInterval()
    setTimer();
    secondsLeft = 10;
    
}
);


