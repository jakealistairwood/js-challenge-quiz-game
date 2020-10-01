"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    key: "getHtml",
    value: function getHtml() {
      return "<section class=\"quiz__container\">\n                    <header class=\"quiz__question\">\n                        <img src=\"\">".concat(this.image, "</img>\n                        <audio src=\"\">").concat(this.audio, "</audio>\n                        <h2 class=\"quiz__question-header\">").concat(this.number, ". ").concat(this.question, "</h2>\n                    </header>\n                    <div class=\"quiz__answers\">\n                        <button class=\"quiz__answer-btns\" data-correct=\"").concat(this.answers[0].isCorrect, "\">").concat(this.answers[0].answer, "</button>  \n                        <button class=\"quiz__answer-btns\" data-correct=\"").concat(this.answers[1].isCorrect, "\">").concat(this.answers[1].answer, "</button>  \n                        <button class=\"quiz__answer-btns\" data-correct=\"").concat(this.answers[2].isCorrect, "\">").concat(this.answers[2].answer, "</button>  \n                        <button class=\"quiz__answer-btns\" data-correct=\"").concat(this.answers[3].isCorrect, "\">").concat(this.answers[3].answer, "</button>  \n                    </div>\n                </section>");
    }
  }]);

  return Question;
}();

var Answers = function Answers(id, answers, isCorrect) {
  _classCallCheck(this, Answers);

  this.number = number;
  this.answers = answers;
  this.isCorrect = isCorrect;
}; // const questions = [
//     {
//         number: "1",
//         image: null,
//         audio: null,
//         question: "What is the longest river in the world?",
//         answers: [{
//             id: "A",
//             answer: "Amazon", 
//             isCorrect: false
//         }, 
//         {
//             id: "B",
//             answer: "Mississippi", 
//             isCorrect: false
//         }, 
//         {
//             id: "C",
//             answer: "Danube", 
//             isCorrect: false
//         },
//         {
//             id: "D",
//             answer: "Nile",
//             isCorrect: true
//         }]
//     },
//     {
//         number: "2",
//         question: "Name the track: ",
//         image: null,
//         audio: undefined,
//         answers: [{
//             answer: "Amazon", 
//             isCorrect: false
//         }, 
//         {
//             answer: "Mississippi", 
//             isCorrect: false
//         }, 
//         {
//             answer: "Danube", 
//             isCorrect: false
//         },
//         {
//             answer: "Nile",
//             isCorrect: true
//         }]
//     },
//     {
//         number: "3",
//         image: null,
//         audio: null,
//         question: "What's the capital city of Denmark?",
//         answers: [{
//             answer: "Oslo", 
//             isCorrect: false
//         }, 
//         {
//             answer: "Roskilde", 
//             isCorrect: false
//         }, 
//         {
//             answer: "Copenhagen", 
//             isCorrect: true
//         },
//         {
//             answer: "Stockholm",
//             isCorrect: false
//         }]
//     },
//     {
//         number: "2.",
//         question: "Name the track: ",
//         answers: [{
//             answer: "Amazon", 
//             isCorrect: false
//         }, 
//         {
//             answer: "Mississippi", 
//             isCorrect: false
//         }, 
//         {
//             answer: "Danube", 
//             isCorrect: false
//         },
//         {
//             answer: "Nile",
//             isCorrect: true
//         }]
//     },
//     {
//         number: "2.",
//         question: "Name the track: ",
//         answers: [{
//             answer: "Amazon", 
//             isCorrect: false
//         }, 
//         {
//             answer: "Mississippi", 
//             isCorrect: false
//         }, 
//         {
//             answer: "Danube", 
//             isCorrect: false
//         },
//         {
//             answer: "Nile",
//             isCorrect: true
//         }]
//     }
// ]


var _default = {
  Question: Question,
  Answers: Answers
};
exports["default"] = _default;