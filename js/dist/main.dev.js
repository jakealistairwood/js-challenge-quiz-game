"use strict";

var _data = _interopRequireDefault(require("./data/data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import * from "./data/quiz";
// import questions from "./data/quiz";

/* ====================================================================================
*                                    Variables
==================================================================================== */
var answerA = document.getElementById('quiz__answer-a');
var answerB = document.getElementById('quiz__answer-b');
var answerC = document.getElementById('quiz__answer-c');
var answerD = document.getElementById('quiz__answer-d'); // const answerBtns = document.querySelectorAll('.quiz__answer-btns');

var userAnswers = [answerA, answerB, answerC, answerD];
var userScore = document.querySelector('.user__score');
var totalScore = document.querySelector('.current__score');
var secondsRemaining = document.querySelector('.clock__seconds-remaining').innerHTML;
/* ====================================================================================
*                      Create HTML render for each questions 
==================================================================================== */

var getQuizContent = function getQuizContent(questionsObject) {
  return "\n    <section class=\"quiz__container\">\n        <header class=\"quiz__question\">\n            <img src=\"\">".concat(_data["default"].image, "</img>\n            <audio src=\"\">").concat(_data["default"].audio, "</audio>\n            <h2 class=\"quiz__question-header\">").concat(_data["default"].number, ". ").concat(_data["default"].question, "</h2>\n        </header>\n        <div class=\"quiz__answers\">\n            <button class=\"quiz__answer-btns\">").concat(_data["default"][0].answers[0].answer, "</button>  \n            <button class=\"quiz__answer-btns\">").concat(_data["default"][0].answers[1].answer, "</button>  \n            <button class=\"quiz__answer-btns\">").concat(_data["default"][0].answers[2].answer, "</button>  \n            <button class=\"quiz__answer-btns\">").concat(_data["default"][0].answers[3].answer, "</button>  \n        </div>\n    </section>\n    ");
};
/* ====================================================================================
*                                Generate Random Answer 
==================================================================================== */


var randomAnswer = function randomAnswer() {
  userAnswers[Math.round(Math.random() * (userAnswers.length - 1))];
};

console.log(randomAnswer); // console.log(questions[i].answers[i].isCorrect);

/* ====================================================================================
*                                   Countdown Timer 
==================================================================================== */

var questionCountdown = setInterval(function () {
  secondsRemaining--;
  document.querySelector('.clock__seconds-remaining').innerHTML = secondsRemaining;

  if (secondsRemaining <= 3) {
    document.querySelector('.clock__seconds-remaining').style.color = "#EF233C";
  }

  if (secondsRemaining <= 0) {
    clearInterval(questionCountdown);
    document.querySelector('.clock__seconds-remaining').innerHTML = "Time's Up....";
    document.body.style.backgroundImage = "linear-gradient(to right, #fd746c, #fe7b6a, #ff8269, #ff8968, #ff9068)";
    document.querySelector('.clock__seconds-remaining').style.color = "#FFF";
  }
}, 1000);
/* ====================================================================================
*                                   Score Counter
==================================================================================== */

var currentUserScore = function currentUserScore() {
  var userScore = document.querySelector('.user__score').innerHTML;
  userScore++;
  document.querySelector('.user__score').innerHTML = userScore;
};

var currentTotalScore = function currentTotalScore() {
  var totalScore = document.querySelector('.current__score').innerHTML;
  totalScore++;
  document.querySelector('.current__score').innerHTML = totalScore;
};
/* ====================================================================================
*                               Validate User Answers
==================================================================================== */
// const validateAnswer = (questions) => {
//     if (userAnswer.)
// }


var validateAnswer = function validateAnswer(selectedAnswer) {
  var isCorrect = selectedAnswer.dataset.correct; // if selected answer is the right answer

  if (isCorrect == "true") {
    // toggle a class to indicate if this answer was right or wrong
    currentUserScore();
    selectedAnswer.style.backgroundColor = "#60A561";
    document.querySelector('.clock__seconds-remaining').innerHTML = "Future quizmaster over here";
  } else {
    selectedAnswer.style.backgroundColor = "#ff8269";
    document.querySelector('.clock__seconds-remaining').innerHTML = "Better luck next time";
  }

  currentTotalScore();
};
/* ====================================================================================
*                                  Array Iterator 
==================================================================================== */


var bindAnswerEventListeners = function bindAnswerEventListeners() {
  for (var index = 0; index < userAnswers.length; index++) {
    userAnswers[index].addEventListener('click', function (event) {
      validateAnswer(event.target);
      userAnswers.disabled = true;
      clearInterval(questionCountdown);
    });
  }
}; // 0. Add event listeners for when the user answers the question


bindAnswerEventListeners(); // 1. Get the data from the data.js file
// 2. Convert this data into an array of Question objects
// const questionArr = questions.map(question => {
//     return new Object(a, b, c)
// })
// 3. Render all of these questions into the innerHtml on the page

var questionContainer = document.getElementById('the html element which i want to render into');
/* ===============================================================================================================
*
*                                           PSEUDO CODE
*
=============================================================================================================== */

/* Functions to make to make the website dynamic
*
*   1. Score counter that will update with each question, get the first question wrong it will update as 0/1. 
*   If you get the next question right it will appear as 1/2 and so on .....
*
*
*   2. On page load, a countdown clock will run down from 10s to 0. 
        - At 3s the clock will change red == DONE ==
        - When it reaches 0s it will automatically choose one of the answers for the user and display "Time's up..."
        - Countdown will need to stop at 0s also. == DONE ==
*
*   
*   3. Answer interactions 
        - Regardless of whether user chooses the right/wrong answer, 
*       - If the user clicks on the wrong answer:
                -  It will toggle a class list of red to the answer, highlighting the user got the answer wrong.
                -  Need to write code that will check the answer to the data object value isCorrect. Wrong if false. 
                -  If false, don't update the left side of score counter, but update the right side. 
                -  It will still show the correct answer by toggling background colour. 

        - If user answer correct:
                - Toggle a class to change answer background colour to green
                - Update clock at bottom with a message "e.g. Whizz Kid.... Congratulations etc!!"
                - Update both left and right side of score counter

        - In both cases: 
                - When user has clicked an answer it will freeze the clock.
                - Lock out any more click events, until next question loaded.
                - Add page opacity to darken background. 

    4. Update HTML to display next question. 
*/