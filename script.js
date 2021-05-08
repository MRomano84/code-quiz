//Array of quiz questions, possible answers and the correct answer.
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer1: "&lt;js&gt;",
        answer2: "&lt;javascript&gt;",
        answer3: "&lt;script&gt;",
        answer4: "&lt;scripting&gt;",
        correctAnswer: 3
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answer1: "*",
        answer2: "+",
        answer3: "%",
        answer4: "=",
        correctAnswer: 4
    },
    {
        question: "How can you add a comment in JavaScript?",
        answer1: "'Comment'",
        answer2: "//Comment",
        answer3: "&lt;!--Comment--&gt;",
        answer4: "**Comment**",
        correctAnswer: 2
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answer1: "onclick",
        answer2: "onmouseclick",
        answer3: "onmouseover",
        answer4: "onchange",
        correctAnswer: 1
    },
    {
        question: "Which of these words are not reserved in JavaScript?",
        answer1: "package",
        answer2: "const",
        answer3: "function",
        answer4: "calculate",
        correctAnswer: 4
    }
];

//initial Variables 
let lastQuestionIndex = questions.length - 1;
let currentQuestionIndex = 0;
let score = 75;
let timer;

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

function checkQuestion(answer) {
    if (questions[currentQuestionIndex].correctAnswer === answer) {
        currentQuestionIndex++;
    } else {
        score = score - 15;
        currentQuestionIndex++;
    }
    if (currentQuestionIndex > lastQuestionIndex) {
        endGame();
    } else {
        renderQuestion();
    }
}

function startTimer() {
    score = 75;
    timer = setInterval(function () {
        document.getElementById("score").innerHTML = 'Time:' + score;
        score--;
        if (score <= 0) {
            endGame();
        }
    }, 1000);
}
function endGame() {
    clearInterval(timer);
    document.getElementById("score").innerHTML = 'Time:' + score;
    document.getElementById("quiz-end").style.display = 'inline';
    document.getElementById("quiz-questions").style.display = 'none';
    document.getElementById("your-score").innerHTML = 'Your Score: ' + score;
}

function submitScore() {
    document.getElementById("quiz-end").style.display = 'none';
    document.getElementById("highscore").style.display = 'inline';
    document.getElementById("score").style.display = 'none';
    let highScores = localStorage.getItem("initials");
    let initials = document.getElementById("initials").value;
    if (highScores === null) {
        highScores = JSON.stringify([
            {
                initials: initials,
                score: score
            }
        ]);
    } else {
        let highScoresParsed = JSON.parse(highScores);
        highScoresParsed.push({
            initials: initials,
            score: score
        });
        highScores = JSON.stringify(highScoresParsed);
    }
    localStorage.setItem("initials", highScores);
    renderScores();
    document.getElementById("initials").value = "";
}

function renderScores() {
    document.getElementById("display-score").innerHTML = "";
    let parsedScores = JSON.parse(localStorage.getItem("initials"));
    if (parsedScores === null) {
        document.getElementById("display-score").innerHTML = "";
    } else {
        parsedScores.sort((a, b) => {
            return b.score - a.score;
        });
        parsedScores.forEach((score, index) => {
            document.getElementById("display-score").innerHTML += index + 1 + ": " + score.initials + " " + score.score + "<br />";
        });
    }
}

function clearScores() {
    localStorage.clear();
    renderScores();
}

function goBack() {
    document.getElementById("highscore").style.display = 'none';
    document.getElementById("quiz-intro").style.display = 'inline';
}

function viewScores() {
    clearInterval(timer);
    document.getElementById("quiz-intro").style.display = 'none';
    document.getElementById("quiz-questions").style.display = 'none';
    document.getElementById("quiz-end").style.display = 'none';
    document.getElementById("score").style.display = 'none';
    document.getElementById("highscore").style.display = 'inline';
    renderScores();
}
