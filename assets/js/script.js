var buttonsdiv = document.querySelector(".start");
var rulesBox = document.querySelector(".startBtn");
var startBtn = document.querySelector(".start #start");
var quizBox = document.querySelector(".quizBox");
var resultBox = document.querySelector(".resultBox")
var countdown= document.querySelector (".timer .countdown")
var answers = document.querySelector (".answers")


var questions = [
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
    answer: "Structured Query Language",
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

    startBtn.onclick = ()=>{
        rulesBox.classList.add("hideRules");
        quizBox.classList.add("showQuiz");
    }