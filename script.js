'use strict';
$(document).ready(function() {
    //Array of quiz questions:
    const quizQuestions = [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            answers: {
                a: "<js>",
                b: "<javascript>",
                c: "<script",
                d: "<scripting>"
            },
            correctAnswer: "c"
        },
        {
            question: "Which operator is used to assign a value to a variable?",
            answers: {
                a: "*",
                b: "+",
                c: "%",
                d: "="
            },
            correctAnswer: "d"
        },
        {
            question: "How can you add a comment in JavaScript?",
            answers: {
                a: "'Comment'",
                b: "//Comment",
                c: "<!--Comment-->",
                d: "**Comment**"
            },
            correctAnswer: "b"
        },
        {
            question: "Which event occurs when the user clicks on an HTML element?",
            answers: {
                a: "onclick",
                b: "onmouseclick",
                c: "onmouseover",
                d: "onchange"
            },
            correctAnswer: "a"
        },
        {
            question: "Which of these words are not reserved in JavaScript?",
            answers: {
                a: "package",
                b: "const",
                c: "function",
                d: "calculate"
            },
            correctAnswer: "d"
        }
    ];
    //jQuery hooks for HTML elements
    const questionContainer = $("div.questions");
    const answerContainer = $("div.answers");
    const resultsContanier = $("div.results");

    //Beginning of the quiz
    function startQuiz() {

        //Store output
        let qOutput = [];
        
        quizQuestions.forEach(function(currentQuestion, questionNumber) {
            let answers = [];

            for(letter in currentQuestion.answers) {
                //add button for each answer
                answers.push(
                    `<label><input class="answerButton" type="button" name="question${questionNumber}" value=${letter}">${letter} : 
                    ${currentQuestion.answers[letter]}</label>`
                );
            }

            //Put question and it's answers to the output
            qOutput.push(
                `<div class"question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        });

        questionContainer.innerHTML = qOutput.join('');
    }

        function showAnwers() {

        }



    }


});
