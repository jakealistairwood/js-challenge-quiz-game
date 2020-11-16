"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import questions from "./data/data.js";
// import { Question, questionOneData, questionTwoData } from "./data/quiz";
// import Question from "./data/quiz";
// import * from "./data/quiz";
// import questions from "./data/quiz";
// import questionOneData from "./data/data";
// import Question from "./data/data";
// import { Question, questionOneData } from "./data/data";

/* ====================================================================================
*                                    Variables
==================================================================================== */
var answerA = document.getElementById('quiz__answer-a');
var answerB = document.getElementById('quiz__answer-b');
var answerC = document.getElementById('quiz__answer-c');
var answerD = document.getElementById('quiz__answer-d');
var answerBtns = document.querySelectorAll('.quiz__answer-btns');
var userAnswers = [answerA, answerB, answerC, answerD];
var userScore = document.querySelector('.user__score');
var totalScore = document.querySelector('.current__score');
var secondsRemaining = document.querySelector('.clock__seconds-remaining').innerHTML;
/* ====================================================================================
*                      Create HTML render for each questions 
==================================================================================== */
// const getQuizContent = (questionsObject) => {
//     return `
//     <section class="quiz__container">
//         <header class="quiz__question">
//             <img src="">${questions.image}</img>
//             <audio src="">${questions.audio}</audio>
//             <h2 class="quiz__question-header">${questions.number}. ${questions.question}</h2>
//         </header>
//         <div class="quiz__answers">
//             <button class="quiz__answer-btns">${questions[0].answers[0].answer}</button>  
//             <button class="quiz__answer-btns">${questions[0].answers[1].answer}</button>  
//             <button class="quiz__answer-btns">${questions[0].answers[2].answer}</button>  
//             <button class="quiz__answer-btns">${questions[0].answers[3].answer}</button>  
//         </div>
//     </section>
//     `;
// }

/* ====================================================================================
*                               Questions Data 
==================================================================================== */

var Question =
/*#__PURE__*/
function () {
  function Question(number, image, audio, question, answers) {
    _classCallCheck(this, Question);

    this.number = number;
    this.image = image;
    this.audio = audio;
    this.question = question;
    this.answers = answers;
  }

  _createClass(Question, [{
    key: "getHTML",
    value: function getHTML() {
      return "\n        <section class=\"quiz__container\">\n            <header class=\"quiz__question\">\n                <img src=\"\">".concat(this.image, "</img>\n                <audio src=\"\">").concat(this.audio, "</audio>\n                <h2 class=\"quiz__question-header\">").concat(this.number, ". ").concat(this.question, "</h2>\n            </header>\n            <div class=\"quiz__answers\">\n                <button class=\"quiz__answer-btns\" data-correct=\"").concat(this.answers[0].isCorrect, "\">").concat(this.answers[0].answer, "</button>  \n                <button class=\"quiz__answer-btns\" data-correct=\"").concat(this.answers[1].isCorrect, "\">").concat(this.answers[1].answer, "</button>  \n                <button class=\"quiz__answer-btns\" data-correct=\"").concat(this.answers[2].isCorrect, "\">").concat(this.answers[2].answer, "</button>  \n                <button class=\"quiz__answer-btns\" data-correct=\"").concat(this.answers[3].isCorrect, "\">").concat(this.answers[3].answer, "</button>  \n            </div>\n        </section>");
    }
  }]);

  return Question;
}();

var questionOneData = new Question("1", null, null, "What is the longest river in the world?", [{
  answer: "Amazon",
  isCorrect: false
}, {
  answer: "Mississippi",
  isCorrect: false
}, {
  answer: "Danube",
  isCorrect: false
}, {
  answer: "Nile",
  isCorrect: true
}]).getHTML();
var questionTwoData = new Question("2", null, null, "What is the Capital City of Denmark?", [{
  answer: "Roskilde",
  isCorrect: false
}, {
  answer: "Stockholm",
  isCorrect: false
}, {
  answer: "Copenhagen",
  isCorrect: true
}, {
  answer: "Oslo",
  isCorrect: false
}]).getHTML();
var questionThreeData = new Question("3", null, null, "In which US State would you find Yosemite National Park?", [{
  answer: "Wyoming",
  isCorrect: false
}, {
  answer: "Alaska",
  isCorrect: false
}, {
  answer: "California",
  isCorrect: true
}, {
  answer: "Montana",
  isCorrect: false
}]).getHTML();
var questionFourData = new Question("4", null, null, "Rome was the first city in the world to reach a population of 1 million. Which became the second in 1810?", [{
  answer: "London",
  isCorrect: true
}, {
  answer: "Paris",
  isCorrect: false
}, {
  answer: "New York",
  isCorrect: true
}, {
  answer: "Mumbai",
  isCorrect: false
}]).getHTML();
console.log(questionOneData);
console.log(questionTwoData);
console.log(questionThreeData);
var questionDataArray = [questionOneData, questionTwoData, questionThreeData, questionFourData];
console.log(questionDataArray);
var questionChange = setInterval(function () {
  for (var i = 0; i < questionDataArray.length; i++) {
    var questionContainer = document.querySelector('.quiz__container').innerHTML;
    return;
  }
}, 1500); // console.log(questionChange);

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
    disableBtns();
    currentTotalScore();
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
*                                  Disable Buttons
==================================================================================== */


var disableBtns = function disableBtns() {
  answerA.disabled = true;
  answerB.disabled = true;
  answerC.disabled = true;
  answerD.disabled = true;
};
/* ====================================================================================
*                               Validate User Answers
==================================================================================== */


var validateAnswer = function validateAnswer(selectedAnswer) {
  var isCorrect = selectedAnswer.dataset.correct; // if selected answer is the right answer

  if (isCorrect == "true") {
    // toggle a class to indicate if this answer was right or wrong
    currentUserScore();
    selectedAnswer.style.backgroundColor = "#60A561";
    document.querySelector('.clock__seconds-remaining').innerHTML = "Quizmaster in the making...";
  } else {
    selectedAnswer.style.backgroundColor = "#ff8269";
    document.querySelector('.clock__seconds-remaining').innerHTML = "Better luck next time...";
  }

  currentTotalScore();
  disableBtns();
};
/* ====================================================================================
*                                  Array Iterator 
==================================================================================== */


var bindAnswerEventListeners = function bindAnswerEventListeners() {
  for (var index = 0; index < userAnswers.length; index++) {
    userAnswers[index].addEventListener('click', function (event) {
      validateAnswer(event.target);
      clearInterval(questionCountdown);
    });
  }
};

bindAnswerEventListeners();
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
                -  It will toggle a class list of red to the answer, highlighting the user got the answer wrong. == DONE ==
                -  Need to write code that will check the answer to the data object value isCorrect. Wrong if false. 
                -  If false, don't update the left side of score counter, but update the right side. 
                -  It will still show the correct answer by toggling background colour. 

        - If user answer correct:
                - Toggle a class to change answer background colour to green == DONE ==
                - Update clock at bottom with a message "e.g. Whizz Kid.... Congratulations etc!!" == DONE ==
                - Update both left and right side of score counter == DONE ==

        - In both cases: 
                - When user has clicked an answer it will freeze the clock. == DONE ==
                - Lock out any more click events, until next question loaded. == DONE ==
                - Add page opacity to darken background. 

    4. Update HTML to display next question. 
*/