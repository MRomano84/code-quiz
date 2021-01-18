'use strict';
$(document).ready(function () {

    //initial Variables 
    let quizArrayIndex;
    let remainingTime = 60;
    let highscores = document.getElementById("highscores");
    let beginningScreen = document.getElementsByClassName(".beginningScreen");
    let quizArea = document.getElementsByClassName(".quizArea");
    let header = document.getElementById("header");
    let startQuiz = document.getElementById("startQuiz");
    let timer = document.getElementById("clock");
    let answerResult = document.getElementsByClassName("answerResult");
    let correctIncorrect = document.getElementById("correctIncorrect");
    let newScore;
    let finalScore;
    let userScore;
    let callCountdown;



    //Array of quiz questions, possible answers and the correct answer.
    const quizQuestions = [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            answers: ["1: <js>","2: <javascript>", "3: <script >", "4: <scripting>"],
            correctAnswer: 3
        },
        {
            question: "Which operator is used to assign a value to a variable?",
            answers: ["1: *", "2: +", "3: %", "4: ="],
            correctAnswer: 4
        },
        {
            question: "How can you add a comment in JavaScript?",
            answers: ["1: 'Comment'", "2: //Comment", "3: <!--Comment-->", "4: **Comment**"],
            correctAnswer: 2
        },
        {
            question: "Which event occurs when the user clicks on an HTML element?",
            answers: ["1: onclick", "2: onmouseclick","3: onmouseover", "4: onchange"],
            correctAnswer: 1
        },
        {
            question: "Which of these words are not reserved in JavaScript?",
            answers: ["1: package", "2: const", "3: function", "4: calculate"],
            correctAnswer: 4
        }
    ];
    
    function startGame() {

    }
        
    function displayText() {
        
    }
    
});