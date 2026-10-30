console.log("script.js connected!");
let buttons = document.querySelectorAll(".btn");
let useranswer = {};
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    let questionId = this.getAttribute("data-question");
    let answerValue = this.getAttribute("data-answer");
    useranswer[questionId] = answerValue;
    console.log(useranswer);
  });
  positve = 0;
  negative = 0;

  if (questionId === "q1" && answerValue === "positive") {positve += 1;}
  if (questionId === "q1" && answerValue === "negative") {negative += 1;}
  if (questionId === "q2" && answerValue === "positive") {positve += 1;}
  if (questionId === "q2" && answerValue === "negative") {negative += 1;}
  if (questionId === "q3" && answerValue === "positive") {positve += 1;} 
  if (questionId === "q3" && answerValue === "negative") {negative += 1;}

  if (positve > negative) {
    result = console.log("You are a positive person!");
  }
  else if (negative > positve)  {
    result = console.log("You are a negative person!");
  }
  else result = console.log("You are a neutral person!")})
  