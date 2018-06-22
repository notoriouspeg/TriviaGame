

(function(){

var time = 5;
var timer;

function timer() {
    if (time >= 1) {
       time--
       console.log(time);
   $("#time").html(time);
   }
   }

   $("#start").on("click", function(){
    console.log("click");
    timer = setInterval(timer, 1000);
    $("#quiz").html(myQuestions[0].question)
    for (var i=0; i<4; i++){
    
    var isChecked = $('#rdSelect:checked').val()?true:false;
    }
    })

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
      question: "Which 80's band's members were named Simon, Nick, John, Andy and Roger??",
      answers: {
        a: "Wham!",
        b: "Scriti Politi",
        c: "Duran Duran"
      },
      correctAnswer: "c"
    },
    {
      question: "Who sang the hit 'Tainted Love'?",
      answers: {
        a: "Bananarama",
        b: "Cocteu Twins",
        c: "Soft Cell"
      },
      correctAnswer: "c"
    },
    {
      question: "Who sang the party hit 'Rock Lobster'?",
      answers: {
        a: "B52's",
        b: "Blondie",
        c: "Sting",
      },
      correctAnswer: "a"
    }
  ];

function buildQuiz(){
    const output = [];
  
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        const answers = [];
  
        for(letter in currentQuestion.answers){
  
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    quizContainer.innerHTML = output.join('');
  }

  myQuestions.forEach( (currentQuestion, questionNumber) => {
    // here goes the code we want to run for each question
  });

function showResults(){}

// we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for(letter in currentQuestion.answers){

  // ...add an html radio button
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

quizContainer.innerHTML = output.join('');

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = 'input[name=question'+questionNumber+']:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer===currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
  }

  // gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;
  
      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  // if answer is correct
if(userAnswer===currentQuestion.correctAnswer){
    // add to the number of correct answers
    numCorrect++;
  
    // color the answers green
    answerContainers[questionNumber].style.color = 'lightgreen';
  }
  // if answer is wrong or blank
  else{
    // color the answers red
    answerContainers[questionNumber].style.color = 'red';
  }
// add this question and its answers to the output
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		var output = [];
        var answers;
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

})();

//Game reset
// startGame();
