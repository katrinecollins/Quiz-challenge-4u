var btnEl = document.querySelector("#my-btn");
var questionEl = document.querySelector("#show-q");

var timeRemaining = 20;
var currentQuestion = 0;

console.log(questions);

function logTimeRemaining() {
    console.log('There is ${timeRemaining} seconds remaining.');
}
 function doThisEverySecond() {
     logTimeRemaining(timeRemaining);
     timeRemaining--;

     if (timeRemaining <=0) {
         console.log("Clearing Interval");
         clearInterval(myTimer);
     }
 }
 var myTimer = setInterval(doThisEverySecond, 1000);

 function init() {
     console.log("starting init");
     
         var parEl = document.createElement("p");

         var qObj = questions[currentQuestion];
         
         parEl.innerText = qObj.q;

         questionEl.append(parEl);

         for (var i = 0; i < qObj.c.length; i++) {
             var ansBtnEl - document.createElement("button");

             ansBtnEl.addEventListener("click", function() {
                 console.log("button was clicked");
             });

             ansBtnEl.innerText - qObj.c[i];
             questionEl.append(ansBtnEl);
         }
     }
 }

})
var questions = [
  {q: 'What is JavaScript?', a: 'a scripting language insterted into HTML pagesand is understood by web browsers. It is also an Object-based Programming language.'}


];

var score = 0;

for (var i = 0; i < questions.length; i++) {
    var answer = confirm(questions[i].q);
    if (
      (answer === a && questions[i].a === 'a') ||
      (answer === b && questions[i].a === 'b') ||
      (answer === c && questions[i].a === 'c') ||
      (answer === d && questions[i].a === 'd')
    ) {
        score++;
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
}
 alert ('You got' + score + '/' + questions.length);
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

function countdown() {
    var timeLeft = 20;
    var timeInterval = setInterval(function() {
        if (wrongAnswer - 1) {
            timerEl.textContent = timeLeft - 1 'wrong answer';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    } 1000);
}

var endQuiz = function() {
    window.alert("The quiz is over! Let's see how you did!");
}

var score = localStorage.getItem("score");

var getPlayerInitials = function() {
    var initials = "";

    while (initials === "" || initials === null) {
        initials = prompt("What are your initials?");
    }
    console.log("Your initials are " + initials);
    return initials;
};
init();