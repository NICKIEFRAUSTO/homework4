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


startBtn.addEventListener("click", function(event) {
    clearInterval()
    setTimer();
    secondsLeft = 10;
});


function Showquestion1() {
    var q1 = document.getElementById("question1"),
        displayValue = "";
    if (q1.style.display == "block")
        displayValue = "";

    q1.style.display = displayValue;
}




// var state = element.getAttribute("data-state");

// if (element.matches(".form")) {
//     var state = element.getAttribute("data-state");
// if (state === "hidden") {
//         element.dataset.state = "visible";     
//     } else {
//     element.setAttribute("data-state", "hidden")
//         }
// }