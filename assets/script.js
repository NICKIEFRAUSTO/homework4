var timerEl = document.querySelector(".timer");
var mainEl = document.getElementById("#main");

var secondsLeft = 10;

function setTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + "Time Remaining";
        
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }  , 
    1000);
}


timerEl.addEventListener("click", function() {
setTimer();
}
);