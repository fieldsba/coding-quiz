var startButton = document.querySelector("#start-button");
var content = document.getElementById('page-content');

var startQuiz = function(event) {
    event.preventDefault();
    content.parentNode.removeChild(content);
    question1();
};

var question1 = function() {
    var q1 = document.querySelector("#question");
    q1.classList.add("questions");
    q1.textContent = "Which is the correct syntax for calling a function named myFunction?";
    document.getElementById('quiz-content').appendChild(q1);

    var ans1 = document.querySelector("#answer1");
    ans1.classList.add("btn");
    ans1.classList.add("answers");
    ans1.textContent = "myfunction();";
    document.getElementById('quiz-content').appendChild(ans1);
    ans1.addEventListener("click", incorrectAnswer);

    var ans2 = document.querySelector("#answer2");
    ans2.classList.add("btn");
    ans2.classList.add("answers");
    ans2.textContent = "function myFunction;";
    document.getElementById('quiz-content').appendChild(ans2);

    var ans3 = document.querySelector("#answer3");
    ans3.classList.add("btn");
    ans3.classList.add("answers");
    ans3.textContent = "call myFunction()";
    document.getElementById('quiz-content').appendChild(ans3);

    var ans4 = document.querySelector("#answer4");        //correct answer
    ans4.classList.add("btn");
    ans4.classList.add("answers");
    ans4.textContent = "myfunction()";
    document.getElementById('quiz-content').appendChild(ans4);

    var incorrectAnswer = function() {
         //timer - 5s
        //var element = document.getElementsById('quiz-content');
        //clearContent('quiz-content');
        document.getElementById('quiz-content').removeChild(q1);
    }

};      //end of question1



startButton.addEventListener("click", startQuiz);