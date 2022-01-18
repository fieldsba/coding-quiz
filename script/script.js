var startButton = document.querySelector("#start-button");
var content = document.getElementById('page-content');

var startQuiz = function(event) {
    event.preventDefault();
    content.parentNode.removeChild(content);
    question1();
};

var question1 = function() {
    var q1 = document.querySelector("#question");
    q1.textContent = "Which is the correct syntax for calling a function named myFunction?";
    document.getElementById('quiz-question').appendChild(q1);

    var ul = document.getElementById("quiz-question")
    ans1 = document.createElement("button");
    ans1.classList.add("btn");
    ans1.textContent = "myfunction();";
    document.getElementById("quiz-question").appendChild(ans1);
    ans1.addEventListener("click", incorrectAnswer);

    var ans2 = document.querySelector("#answer2");
    ans2 = document.createElement("button");
    ans2.classList.add("btn");
    ans2.textContent = "function myFunction;";
    document.getElementById("quiz-question").appendChild(ans2);
    ans2.addEventListener("click", incorrectAnswer);

    var ans3 = document.querySelector("#answer3");
    ans3 = document.createElement("button");
    ans3.classList.add("btn");
    ans3.textContent = "call myFunction()";
    document.getElementById("quiz-question").appendChild(ans3);
    ans3.addEventListener("click", incorrectAnswer);

    var ans4 = document.querySelector("#answer4");        //correct answer
    ans4 = document.createElement("button");
    ans4.classList.add("btn");
    ans4.textContent = "myfunction()";
    document.getElementById("quiz-question").appendChild(ans4);
    ans4.addEventListener("click", correctAnswer);

    function incorrectAnswer() {
    //timer minus 5 seconds
    clearContent(q1, ans1, ans2, ans3, ans4);
    question2();
}

    function correctAnswer() {
    clearContent(q1, ans1, ans2, ans3, ans4);
    question2();
}



};      //end of question1

var question2 = function() {
    var q1 = document.createElement("ul");
    q1.id = "question";
    q1.textContent = "If you want the code in a loop to execute at least once, which type of loop should you use?";
    document.getElementById('quiz-question').appendChild(q1);

    var ul = document.getElementById("quiz-question")
    ans1 = document.createElement("button");
    ans1.classList.add("btn");
    ans1.textContent = "while";
    document.getElementById("quiz-question").appendChild(ans1);
    ans1.addEventListener("click", incorrectAnswer);

    var ans2 = document.querySelector("#answer2");
    ans2 = document.createElement("button");
    ans2.classList.add("btn");
    ans2.textContent = "do-while";
    document.getElementById("quiz-question").appendChild(ans2);
    ans2.addEventListener("click", correctAnswer);

    var ans3 = document.querySelector("#answer3");
    ans3 = document.createElement("button");
    ans3.classList.add("btn");
    ans3.textContent = "for";
    document.getElementById("quiz-question").appendChild(ans3);
    ans3.addEventListener("click", incorrectAnswer);

    var ans4 = document.querySelector("#answer4");
    ans4 = document.createElement("button");
    ans4.classList.add("btn");
    ans4.textContent = "foreach";
    document.getElementById("quiz-question").appendChild(ans4);
    ans4.addEventListener("click", incorrectAnswer);

    function incorrectAnswer() {
        //timer minus 5 seconds
        clearContent(q1, ans1, ans2, ans3, ans4);
        question3();
    }
    
        function correctAnswer() {
        clearContent(q1, ans1, ans2, ans3, ans4);
        question2();
    }
    
};      //end of question2


var question3 = function() {
    var q1 = document.createElement("ul");
    q1.id = "question";
    //q1.classList.add("questions");
    q1.textContent = "How do you declare a variable in JavaScript?";
    document.getElementById('quiz-question').appendChild(q1);

    var ul = document.getElementById("quiz-question")
    ans1 = document.createElement("button");
    ans1.classList.add("btn");
    //ans1.classList.add("answers");
    ans1.textContent = "var name;";
    document.getElementById("quiz-question").appendChild(ans1);
    ans1.addEventListener("click", correctAnswer);

    var ans2 = document.querySelector("#answer2");
    ans2 = document.createElement("button");
    ans2.classList.add("btn");
    //ans2.classList.add("answers");
    ans2.textContent = "variable name;";
    document.getElementById("quiz-question").appendChild(ans2);
    ans2.addEventListener("click", incorrectAnswer);

    var ans3 = document.querySelector("#answer3");
    ans3 = document.createElement("button");
    ans3.classList.add("btn");
    //ans3.classList.add("answers");
    ans3.textContent = "v name;";
    document.getElementById("quiz-question").appendChild(ans3);
    ans3.addEventListener("click", incorrectAnswer);

    var ans4 = document.querySelector("#answer4");
    ans4 = document.createElement("button");
    ans4.classList.add("btn");
    //ans3.classList.add("answers");
    ans4.textContent = "createNewVariable: name";
    document.getElementById("quiz-question").appendChild(ans4);
    ans4.addEventListener("click", incorrectAnswer);

    function incorrectAnswer() {
        //timer minus 5 seconds
        clearContent(q1, ans1, ans2, ans3, ans4);
        //question4();
    }
    
        function correctAnswer() {
        clearContent(q1, ans1, ans2, ans3, ans4);
        //question4();
    }
    
};      //end of question3


function clearContent(q1, ans1, ans2, ans3, ans4) {
    q1.parentNode.removeChild(q1);
    ans1.parentNode.removeChild(ans1);
    ans2.parentNode.removeChild(ans2);
    ans3.parentNode.removeChild(ans3);
    ans4.parentNode.removeChild(ans4);
}


startButton.addEventListener("click", startQuiz);