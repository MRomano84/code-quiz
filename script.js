'use strict';
$(document).ready(function() {

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

    const questionContainer = $("div.questions");
    const answers = $("div.answers");
    const results = $("div.results");

    

});
