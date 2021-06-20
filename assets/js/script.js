// console.log('Hello!');

var myStartButton = $('#startBtn');

console.log(myStartButton)




// add an on click function to my start button
myStartButton.on('click', function() {
    myStartButton.css('background-color', 'red')

    console.log('Hello world')

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
startQuiz();