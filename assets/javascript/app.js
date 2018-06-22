(function() {


//     var time = 5;
// var timer;

// function timer() {
//     if (time >= 1) {
//        time--
//        console.log(time);
//    $("#time").html(time);
//    }
//    }

//    $("#start").on("click", function(){
//     console.log("click");
//     timer = setInterval(timer, 1000);
//     $("#quiz").html(myQuestions[0].question)
//     for (var i=0; i<4; i++){
    
//     var isChecked = $('#rdSelect:checked').val()?true:false;
//     }
//     })
    
  function buildQuiz() {

    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {

        const answers = [];

      for (letter in currentQuestion.answers) {
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
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
    } else {
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
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
        b: "Cocteau Twins",
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

  buildQuiz();

  submitButton.addEventListener("click", showResults);
})();