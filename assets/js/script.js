var rulesBox = document.querySelector(".rulesBox");
var startBtn = document.querySelector(".start #start");
var quizBox = document.querySelector(".quizBox");
var resultBox = document.querySelector(".resultBox")
var countdown= document.querySelector (".timer .countdown")
var answers = document.querySelector (".answers")


let questions = [
    {
    number: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Math Language",
      "Hyper Tool Markup Language",
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

function  startFunction(){
        rulesBox.style = "opacity: 0%";
        quizBox.classList.add("showQuiz");
        showQuestions(0);
    }


var time = 60
var questionNum = 0;
var restart = resultBox.querySelector(".resultBox .restart");

restart.onclick =()=>{
        quizBox.classList.add("showQuiz");
        resultBox.classList.remove("showResult")
        time = 60;
        questionNum = 0;
    }
console.log(questions[0].question)



function showQuestions(index) {
    const questionTag = document.querySelector(".questions");
  
    let askQuestions = '<span>'+ questions[index].question + '</span>';
    let askOptions = '<div class="option"><span>'+ questions[index].options[0] + '<span></div>' +
        '<div class="option"><span>' + questions[index].options[1] + '<span></div>' + 
        '<div class="option"><span>' + questions[index].options[2] + '<span></div>' +
        '<div class="option"><span>' + questions[index].options[3] + '<span></div>';
        questionTag.innerHTML = askQuestions;
        answers.innerHTML = askOptions;

    var option = document.querySelector(".option");

    for (i=0; i < option.length; i++){
            option[i].setAttribute("onclick", "pickOption(this)"); 
    }
    }

   