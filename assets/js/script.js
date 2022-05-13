var rulesBox = document.querySelector(".rulesBox");
var startBtn = document.querySelector(".start #start");
var quizBox = document.querySelector(".quizBox");
var resultBox = document.querySelector(".resultBox");
var countdown= document.querySelector (".timer .countdown");
var answers = document.querySelector (".answers");
var nextButton = document.querySelector (".nextButton");
var userScore = document.querySelector(".score");



let questions = [
    {
    number: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Markup Language",
      "Hyper Tool Math Language",
      "Hyper Text Mini Language",
      "Hyper Tool Multi Language"
    ]},

    {
    number: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Cascading Style Sheet",
      "Controlled Style Sheet",
      "Calculated Style Sheet",
      "Configured Style Sheet"
    ]},

    {
    number: 3,
    question: "What does API stand for?",
    answer: "Application Programming Interface",
    options: [
      "Add-on Program Interface",
      "Application Programming Interface",
      "Apple Programming Interface",
      "Anti Programming Interface"
    ]},
    {
    number: 4,
    question: "jQuery is a library for which language?",
    answer: "Javascript",
    options: [
      "HTML",
      "CSS",
      "Python",
      "Javascript"
    ]},
    {
    number: 5,
    question: "Which language is not covered in this course?",
    answer: "Python",
    options: [
      "HTML",
      "Javascript",
      "Python",
      "Css"
    ]},];

var time = 60
var questionNum = 0;
var restart = resultBox.querySelector(".resultBox .restart");

    

function  startFunction(){
        rulesBox.style = "opacity: 0%";
        quizBox.classList.add("showQuiz");
        showQuestions(0);
        startTimer(time);
        countdown.innerHTML = time;
    }



function showQuestions(index) {
    const questionTag = document.querySelector(".questions");
  
    let askQuestions = '<h1>'+ questions[index].question + '</h1>';
    let askOptions = '<div class="option" ><p>'+ questions[index].options[0] + '</p></div>' +
        '<div class="option"><p>' + questions[index].options[1] + '</p></div>' + 
        '<div class="option"><p>' + questions[index].options[2] + '</p></div>' +
        '<div class="option"><p>' + questions[index].options[3] + '</p></div>';
        questionTag.innerHTML = askQuestions;
        answers.innerHTML = askOptions;

    var option = document.querySelectorAll(".option");

    for (i=0; i < option.length; i++){
            option[i].setAttribute("onclick", "pickOption(this)"); }
};

function startTimer(){
    var timeLeft = setInterval(function() {
        if (time > 1){
            time--;
            countdown.textContent = time;
        } else{
            clearInterval(timeLeft)
            countdown.textContent = '0';
            showResults();
        }
    }, 1000);
   
};

function pickOption(option){
    var userAnswer = option.textContent;
    var correctAnswer = questions[questionNum].answer;

    if (userAnswer == correctAnswer){
        nextQuestion();
    } else {
        time -= 10;
        nextQuestion();
    }
};

function showResults(){
    quizBox.classList.remove("showQuiz");
    resultBox.classList.add("showResult");
    userScore.innerHTML = "Your score is " + time;
    countdown.textContent = '';
}

function nextQuestion(){
    if (questionNum < questions.length - 1){
        questionNum++;
        showQuestions(questionNum);

    } else{
        showResults();
    }
};

restart.onclick =()=>{
    quizBox.classList.add("showQuiz");
    resultBox.classList.remove("showResult")
    time = 60;
    questionNum = 0;
    showQuestions(questionNum);
    startTimer(time);
}




