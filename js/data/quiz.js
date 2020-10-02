class Question {
    constructor(number, image, audio, question, answers) {
        this.number = number;
        this.image = image;
        this.audio = audio;
        this.question = question;
        this.answers = answers;
    }

    getHtml() {
        return `<section class="quiz__container">
                    <header class="quiz__question">
                        <img src="">${this.image}</img>
                        <audio src="">${this.audio}</audio>
                        <h2 class="quiz__question-header">${this.number}. ${this.question}</h2>
                    </header>
                    <div class="quiz__answers">
                        <button class="quiz__answer-btns" data-correct="${this.answers[0].isCorrect}">${this.answers[0].answer}</button>  
                        <button class="quiz__answer-btns" data-correct="${this.answers[1].isCorrect}">${this.answers[1].answer}</button>  
                        <button class="quiz__answer-btns" data-correct="${this.answers[2].isCorrect}">${this.answers[2].answer}</button>  
                        <button class="quiz__answer-btns" data-correct="${this.answers[3].isCorrect}">${this.answers[3].answer}</button>  
                    </div>
                </section>`;
    }

    new Question(
        "1", 
        null, 
        null, 
        "What is the longest river in the world?",
        [
            {answer: "Amazon", isCorrect: false}, 
            {answer: "Amazon", isCorrect: false}, 
            {answer: "Amazon", isCorrect: false},
            {answer: "Amazon", isCorrect: false} 
        ]);
    //       
}

class Answers {
    constructor(answers, isCorrect) {
        this.answers = answers;
        this.isCorrect = isCorrect;
    }
}

// const questions = [
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

export default {
    Question,
    Answers,
}

