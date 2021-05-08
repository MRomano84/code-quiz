'use strict';
$(document).ready(function () {

    //initial Variables 
    let lastQuestionIndex = questions.length - 1;
    let currentQuestionIndex = 0;
    let score = 75;
    let timer;



    //Array of quiz questions, possible answers and the correct answer.
    const questions = [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            answer1: "1: <js>",
            answer2: "2: <javascript>",
            answer3: "3: <script >",
            answer4: "4: <scripting>",
            correctAnswer: "3"
        },
        {
            question: "Which operator is used to assign a value to a variable?",
            answer1: "1: *",
            answer2: "2: +",
            answer3: "3: %",
            answer4: "4: =",
            correctAnswer: "4"
        },
        {
            question: "How can you add a comment in JavaScript?",
            answer1: "1: 'Comment'",
            answer2: "2: //Comment",
            answer3: "3: <!--Comment-->",
            answer4: "4: **Comment**",
            correctAnswer: "2"
        },
        {
            question: "Which event occurs when the user clicks on an HTML element?",
            answer1: "1: onclick",
            answer2: "2: onmouseclick",
            answer3: "3: onmouseover",
            answer4: "4: onchange",
            correctAnswer: "1"
        },
        {
            question: "Which of these words are not reserved in JavaScript?",
            answer1: "1: package",
            answer2: "2: const",
            answer3: "3: function",
            answer4: "4: calculate",
            correctAnswer: "4"
        }
    ];

    function startQuiz() {
        currentQuestionIndex = 0;
        document.getElementById("quiz-intro").style.display = "none";
        document.getElementById("quiz-questions").style.display = "inline";
        startTimer();
        document.getElementById("score").style.display = "block";
        renderQuestion();
    }
    // startQuiz.addEventListener("click", function() {
    //     quizArrayIndex = 0;
    //     hideStart[0].style.display = "none";
    //     timer();
    //     showQuestion();
    // });

    function renderQuestion() {
        let q = questions[currentQuestionIndex];
        document.getElementById("question").innerHTML = questions[currentQuestionIndex].question;
        document.getElementById("answer1").innerHTML = questions[currentQuestionIndex].answer1;
        document.getElementById("answer2").innerHTML = questions[currentQuestionIndex].answer2;
        document.getElementById("answer3").innerHTML = questions[currentQuestionIndex].answer3;
        document.getElementById("answer4").innerHTML = questions[currentQuestionIndex].answer4;
    }

    // viewScores.addEventListener('click', function () {
    //     hideStart[0].style.display = "none";
    //     getScore();
    //     scoreBoard();
    // });
    
    // function timer() {
    //     callCountdown = setTimeout(countdown, 1000);
    //     if (remainingTime < 1 || quizArrayIndex > quizQuestions.length - 1) {
    //         endGame();
    //     };
    // };
        
    // function countdown() {
    //     remainingTime--;
    //     clock.textContent = remainingTime;
    //     timer();
    // }

    // function showQuestion() {
    //     if (quizArrayIndex < quizQuestions.length && remainingTime > 0) {
    //         let questionTitle = document.createElement('h2');
    //         questionTitle.innerHTML = quizQuestions[quizArrayIndex].question;
    //         quizArea[0].append(questionTitle);
    //         for (let i = 0; i < quizQuestions[quizArrayIndex].answers.length; i++) {
    //             let button = document.createElement('button');
    //             button.innerHTML = quizQuestions[quizArrayIndex].answers[i];
    //             button.setAttribute('data-index', i);
    //             button.classList.add('selectionBtn');
    //             quizArea[0].append(button);
    //         };
    //     } else {
    //         endGame();
    //     };
    //     changeQuestion();
    // };

    // function changeQuestion() {
    //     let button = document.querySelectorAll('.choseButton');
    //     for (let j = 0; j < button.length; j++) {
    //         button[j].addEventListener("click", function (event) {
    //             let correctAns = quizQuestions[quizArrayIndex].correctAnswer;
    //             let choice = parseInt(event.target.getAttribute('data-index'));
    //             if (choice === correctAns) {
    //                 remainingTime = remainingTime + 5;
    //                 clock.textContent = remainingTime;
    //                 answerResult.textContent = 'Correct!';
    //                 correctIncorrect.style.display = 'block';
    //                 hideResult();
    //             } else {
    //                 timeRemaining = timeRemaining - 5;
    //                 clock.textContent = timeRemaining;
    //                 answerResult.textContent = 'Incorrect!';
    //                 correctIncorrect.style.display = 'block';
    //                 hideResult();
    //             };
    //             quizArrayIndex++;
    //             quizArea[0].innerHTML = '';
    //             showQuestion();
    //         });
    //     }
    // };

    // function hideResult() {
    //     setTimeout(function () {
    //         answerResult.textContent = '';
    //         correctIncorrect.style.display = 'none';
    //     }, 1500);
    // };

    // function endGame() {
    //     clearTimeout(callCountdown);
    //     quizArea[0].innerHTML = '';
    //     if (remainingTime < 1) {
    //         finalScore = 0;
    //     } else {
    //         finalScore = remainingTime;
    //     };
    //     clock.textContent = remainingTime;
    // };

    // function checkScore() {
    //     let submitBtn = document.getElementById('initialsSubmit');
    //     submitBtn.addEventListener('click', function (event) {
    //         event.preventDefault();
    //         getScore();
    //         let initialsInput = document.getElementById("initialsInput");
    //         let initialsText = String(initialsInput.value.trim());
    //         function checkInput() {
    //             if (initialsText.length > 3) {
    //                 correctIncorrect.textContent = 'Only 3 letters allowed!';
    //                 return
    //             } else if (initialsText === "") {
    //                 correctIncorrect.textContent = 'Please enter your initials!';
    //                 return
    //             } else {
    //                 answerResult.style.display = 'none';
    //                 setScore();
    //                 scoreboard();
    //             }
    //         }
    //         checkInput();
    //     })
    // };

    // function setScore() {
    //     let userName = String(initialsInput.value).toUpperCase();
    //     newScore = {
    //         "name": userName,
    //         "score": finalScore
    //     };
    //     userScores.push(newScore);
    //     localStorage.setItem("userScores", JSON.stringify(userScores));
    // };

    // function getScore() {
    //     if (localStorage.getItem('userScores') !== null) {
    //         userScores = JSON.parse(localStorage.getItem('userScores'));
    //     } else {
    //         userScores = [];
    //     };
    // };

    // //Need scoreboard function...
    // function scoreboard();{

    // };

    
});
