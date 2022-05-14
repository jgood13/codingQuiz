var rulesBox = document.querySelector(".rulesBox");
var startBtn = document.querySelector(".start #start");
var quizBox = document.querySelector(".quizBox");
var resultBox = document.querySelector(".resultBox");
var countdown= document.querySelector (".timer .countdown");
var answers = document.querySelector (".answers");
var nextButton = document.querySelector (".nextButton");
var userScore = document.querySelector(".score");
var leaderboard = document.querySelector(".leaderboard")
var restart = resultBox.querySelector(".resultBox .restart");
var time = 60
var questionNum = 0;
var timeLeft;

var questions = [
    {
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: ["Hyper Text Markup Language",
      "Hyper Tool Math Language",
      "Hyper Text Mini Language",
      "Hyper Tool Multi Language"
    ]},

    {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: ["Cascading Style Sheet",
      "Controlled Style Sheet",
      "Calculated Style Sheet",
      "Configured Style Sheet"
    ]},

    {
    question: "What does API stand for?",
    answer: "Application Programming Interface",
    options: ["Add-on Program Interface",
      "Application Programming Interface",
      "Apple Programming Interface",
      "Anti Programming Interface"
    ]},
    {
    question: "jQuery is a library for which language?",
    answer: "Javascript",
    options: ["HTML",
      "CSS",
      "Python",
      "Javascript"
    ]},
    {

    question: "Which language is not covered in this course?",
    answer: "Python",
    options: ["HTML",
      "Javascript",
      "Python",
      "Css"
    ]},];

function  startFunction(){
        time = 60;
        rulesBox.style = "display: none";
        quizBox.classList.add("showQuiz");
        showQuestions(0);
        startTimer(time);
        countdown.innerHTML = time;
    }


function showQuestions(index) {
    const questionTag = document.querySelector(".questions");
  
    let askQuestions = '<h1>'+ questions[index].question + '</h1>';
    let askOptions = '<p class="option">'+ questions[index].options[0] + '</p>' +
        '<p class="option">' + questions[index].options[1] + '</p>' + 
        '<p class="option">' + questions[index].options[2] + '</p>' +
        '<p class="option">' + questions[index].options[3] + '</p>';
        questionTag.innerHTML = askQuestions;
        answers.innerHTML = askOptions;

    var option = document.querySelectorAll(".option");

    for (i=0; i < option.length; i++){
            option[i].setAttribute("onclick", "pickOption(this)"); }
};

function startTimer(){
        timeLeft = setInterval(function() {
        if (time > 0){
            time--;
            countdown.textContent = time;
        // } else if(time > 0 && userScore > 0){
            
        //     clearInterval(timeLeft);
        //     showResults();
        } else {
            clearInterval(timeLeft)
            countdown.textContent = '0';
            quizBox.classList.remove("showQuiz")
            rulesBox.setAttribute("style", "display:block")
            alert("You ran out of time! Try again.")
        }
    }, 1000);
};

function pickOption(option){
    var userAnswer = option.textContent;
    var correctAnswer = questions[questionNum].answer;

    if (userAnswer == correctAnswer){
        alert("You answered this question right!")
        nextQuestion();
    } else {
        alert("You answered this question wrong!")
        time -= 10;
        nextQuestion();
    }
};

function nextQuestion(){
    if (questionNum < questions.length - 1){
        questionNum++;
        showQuestions(questionNum);

    } else{
        showResults();
    }
};

function showResults(){
    clearInterval(timeLeft)
    quizBox.classList.remove("showQuiz");
    resultBox.classList.add("showResult");
    userScore.innerHTML = "Your score is " + time;
    countdown.textContent = '';
    saveScore();
}

restart.onclick =()=>{
    quizBox.classList.add("showQuiz");
    resultBox.classList.remove("showResult")
    time = 60;
    questionNum = 0;
    showQuestions(questionNum);
    startTimer(time);
}

function saveScore(){
    var currentScore = JSON.parse(localStorage.getItem('scores')) || []
    var userinfo = prompt("Please enter your initials")
    var score = userScore.innerHTML
    var userobj ={
        initals: userinfo,
        score: score
    }
    currentScore.push(userobj)

    localStorage.setItem('scores', JSON.stringify(currentScore))

    renderScore();
};

function renderScore() {
    var currentScores = JSON.parse(localStorage.getItem('scores'))
    leaderboard.innerHTML= ''
    for (i=0; i < currentScores.length; i++){
        let newScore = document.createElement("div")
        newScore.textContent = currentScores[i].initals + ": " + currentScores[i].score
        leaderboard.append(newScore)
    }  
}

renderScore();