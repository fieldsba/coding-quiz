var startButton = document.querySelector("#start-button");
var content = document.getElementById('page-content');

startButton.onclick = function() {
    var timer = duration, minutes, seconds;
}

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
        question3();
    }
    
};      //end of question2


var question3 = function() {
    var q1 = document.createElement("ul");
    q1.id = "question";
    q1.textContent = "How do you declare a variable in JavaScript?";
    document.getElementById('quiz-question').appendChild(q1);

    var ul = document.getElementById("quiz-question")
    ans1 = document.createElement("button");
    ans1.classList.add("btn");
    ans1.textContent = "var name;";
    document.getElementById("quiz-question").appendChild(ans1);
    ans1.addEventListener("click", correctAnswer);

    var ans2 = document.querySelector("#answer2");
    ans2 = document.createElement("button");
    ans2.classList.add("btn");
    ans2.textContent = "variable name;";
    document.getElementById("quiz-question").appendChild(ans2);
    ans2.addEventListener("click", incorrectAnswer);

    var ans3 = document.querySelector("#answer3");
    ans3 = document.createElement("button");
    ans3.classList.add("btn");
    ans3.textContent = "v name;";
    document.getElementById("quiz-question").appendChild(ans3);
    ans3.addEventListener("click", incorrectAnswer);

    var ans4 = document.querySelector("#answer4");
    ans4 = document.createElement("button");
    ans4.classList.add("btn");
    ans4.textContent = "createNewVariable: name";
    document.getElementById("quiz-question").appendChild(ans4);
    ans4.addEventListener("click", incorrectAnswer);

    function incorrectAnswer() {
        //timer minus 5 seconds
        clearContent(q1, ans1, ans2, ans3, ans4);
        question4();
    }
    
        function correctAnswer() {
        clearContent(q1, ans1, ans2, ans3, ans4);
        question4();
    }
    
};      //end of question3

var question4 = function() {
    var q1 = document.createElement("ul");
    q1.id = "question";
    q1.textContent = "Which of these operators will assign a value to a variable?";
    document.getElementById('quiz-question').appendChild(q1);

    var ul = document.getElementById("quiz-question")
    ans1 = document.createElement("button");
    ans1.classList.add("btn");
    ans1.textContent = "*";
    document.getElementById("quiz-question").appendChild(ans1);
    ans1.addEventListener("click", incorrectAnswer);

    var ans2 = document.querySelector("#answer2");
    ans2 = document.createElement("button");
    ans2.classList.add("btn");
    ans2.textContent = "=";
    document.getElementById("quiz-question").appendChild(ans2);
    ans2.addEventListener("click", correctAnswer);

    var ans3 = document.querySelector("#answer3");
    ans3 = document.createElement("button");
    ans3.classList.add("btn");
    ans3.textContent = "%";
    document.getElementById("quiz-question").appendChild(ans3);
    ans3.addEventListener("click", incorrectAnswer);

    var ans4 = document.querySelector("#answer4");
    ans4 = document.createElement("button");
    ans4.classList.add("btn");
    ans4.textContent = ":";
    document.getElementById("quiz-question").appendChild(ans4);
    ans4.addEventListener("click", incorrectAnswer);

    function incorrectAnswer() {
        //timer minus 5 seconds
        clearContent(q1, ans1, ans2, ans3, ans4);
        question5();
    }
    
        function correctAnswer() {
        clearContent(q1, ans1, ans2, ans3, ans4);
        question5();
    }
    
};      //end of question4

var question5 = function() {
    var q1 = document.createElement("ul");
    q1.id = "question";
    q1.textContent = "Which of these data types represents either a true or false value?";
    document.getElementById('quiz-question').appendChild(q1);

    var ul = document.getElementById("quiz-question")
    ans1 = document.createElement("button");
    ans1.classList.add("btn");
    ans1.textContent = "String";
    document.getElementById("quiz-question").appendChild(ans1);
    ans1.addEventListener("click", incorrectAnswer);

    var ans2 = document.querySelector("#answer2");
    ans2 = document.createElement("button");
    ans2.classList.add("btn");
    ans2.textContent = "var";
    document.getElementById("quiz-question").appendChild(ans2);
    ans2.addEventListener("click", incorrectAnswer);

    var ans3 = document.querySelector("#answer3");
    ans3 = document.createElement("button");
    ans3.classList.add("btn");
    ans3.textContent = "Boolean";
    document.getElementById("quiz-question").appendChild(ans3);
    ans3.addEventListener("click", correctAnswer);

    var ans4 = document.querySelector("#answer4");
    ans4 = document.createElement("button");
    ans4.classList.add("btn");
    ans4.textContent = "int";
    document.getElementById("quiz-question").appendChild(ans4);
    ans4.addEventListener("click", incorrectAnswer);

    function incorrectAnswer() {
        //timer minus 5 seconds
        clearContent(q1, ans1, ans2, ans3, ans4);
        question6();
    }
    
        function correctAnswer() {
        clearContent(q1, ans1, ans2, ans3, ans4);
        question6();
    }
    
};      //end of question5

var question6 = function() {
    var q1 = document.createElement("ul");
    q1.id = "question";
    q1.textContent = "Which displays the correct syntax of the conditional statement of a for loop?";
    document.getElementById('quiz-question').appendChild(q1);

    var ul = document.getElementById("quiz-question")
    ans1 = document.createElement("button");
    ans1.classList.add("btn");
    ans1.textContent = "for (i=1; i<20)";
    document.getElementById("quiz-question").appendChild(ans1);
    ans1.addEventListener("click", incorrectAnswer);

    var ans2 = document.querySelector("#answer2");
    ans2 = document.createElement("button");
    ans2.classList.add("btn");
    ans2.textContent = "for (i++; i<=20; i=0)";
    document.getElementById("quiz-question").appendChild(ans2);
    ans2.addEventListener("click", incorrectAnswer);

    var ans3 = document.querySelector("#answer3");
    ans3 = document.createElement("button");
    ans3.classList.add("btn");
    ans3.textContent = "for (i<20; i=0; i+=1)";
    document.getElementById("quiz-question").appendChild(ans3);
    ans3.addEventListener("click", incorrectAnswer);

    var ans4 = document.querySelector("#answer4");
    ans4 = document.createElement("button");
    ans4.classList.add("btn");
    ans4.textContent = "for (i=20; i>0; i--)";
    document.getElementById("quiz-question").appendChild(ans4);
    ans4.addEventListener("click", correctAnswer);

    function incorrectAnswer() {
        //timer minus 5 seconds
        clearContent(q1, ans1, ans2, ans3, ans4);
        question7();
    }
    
        function correctAnswer() {
        clearContent(q1, ans1, ans2, ans3, ans4);
        question7();
    }
    
};      //end of question6

var question7 = function() {
    var q1 = document.createElement("ul");
    q1.id = "question";
    q1.textContent = "Which of these is NOT a JavaScript method for extracting part of a String?";
    document.getElementById('quiz-question').appendChild(q1);

    var ul = document.getElementById("quiz-question")
    ans1 = document.createElement("button");
    ans1.classList.add("btn");
    ans1.textContent = "slice(x,y)";
    document.getElementById("quiz-question").appendChild(ans1);
    ans1.addEventListener("click", incorrectAnswer);

    var ans2 = document.querySelector("#answer2");
    ans2 = document.createElement("button");
    ans2.classList.add("btn");
    ans2.textContent = "substring(x,y)";
    document.getElementById("quiz-question").appendChild(ans2);
    ans2.addEventListener("click", incorrectAnswer);

    var ans3 = document.querySelector("#answer3");
    ans3 = document.createElement("button");
    ans3.classList.add("btn");
    ans3.textContent = "substr(x,y)";
    document.getElementById("quiz-question").appendChild(ans3);
    ans3.addEventListener("click", incorrectAnswer);

    var ans4 = document.querySelector("#answer4");
    ans4 = document.createElement("button");
    ans4.classList.add("btn");
    ans4.textContent = "newStr(x,y)";
    document.getElementById("quiz-question").appendChild(ans4);
    ans4.addEventListener("click", correctAnswer);

    function incorrectAnswer() {
        //timer minus 5 seconds
        clearContent(q1, ans1, ans2, ans3, ans4);
        question8();
    }
    
        function correctAnswer() {
        clearContent(q1, ans1, ans2, ans3, ans4);
        question8();
    }
    
};      //end of question7

var question8 = function() {
    var q1 = document.createElement("ul");
    q1.id = "question";
    q1.textContent = "Which of these should you use to add a comment in JavaScript?";
    document.getElementById('quiz-question').appendChild(q1);

    var ul = document.getElementById("quiz-question")
    ans1 = document.createElement("button");
    ans1.classList.add("btn");
    ans1.textContent = "<!--Comment goes here-->";
    document.getElementById("quiz-question").appendChild(ans1);
    ans1.addEventListener("click", incorrectAnswer);

    var ans2 = document.querySelector("#answer2");
    ans2 = document.createElement("button");
    ans2.classList.add("btn");
    ans2.textContent = "//Comment goes here";
    document.getElementById("quiz-question").appendChild(ans2);
    ans2.addEventListener("click", correctAnswer);

    var ans3 = document.querySelector("#answer3");
    ans3 = document.createElement("button");
    ans3.classList.add("btn");
    ans3.textContent = "~Comment goes here~";
    document.getElementById("quiz-question").appendChild(ans3);
    ans3.addEventListener("click", incorrectAnswer);

    var ans4 = document.querySelector("#answer4");
    ans4 = document.createElement("button");
    ans4.classList.add("btn");
    ans4.textContent = "/*Comment goes here*/";
    document.getElementById("quiz-question").appendChild(ans4);
    ans4.addEventListener("click", correctAnswer);

    function incorrectAnswer() {
        //timer minus 5 seconds
        clearContent(q1, ans1, ans2, ans3, ans4);
        question9();
    }
    
        function correctAnswer() {
        clearContent(q1, ans1, ans2, ans3, ans4);
        question9();
    }
    
};      //end of question8

var question9 = function() {
    var q1 = document.createElement("ul");
    q1.id = "question";
    q1.textContent = "In which HTML element do we put the JavaScript?";
    document.getElementById('quiz-question').appendChild(q1);

    var ul = document.getElementById("quiz-question")
    ans1 = document.createElement("button");
    ans1.classList.add("btn");
    ans1.textContent = "<script>";
    document.getElementById("quiz-question").appendChild(ans1);
    ans1.addEventListener("click", correctAnswer);

    var ans2 = document.querySelector("#answer2");
    ans2 = document.createElement("button");
    ans2.classList.add("btn");
    ans2.textContent = "<js>";
    document.getElementById("quiz-question").appendChild(ans2);
    ans2.addEventListener("click", incorrectAnswer);

    var ans3 = document.querySelector("#answer3");
    ans3 = document.createElement("button");
    ans3.classList.add("btn");
    ans3.textContent = "<javascript>";
    document.getElementById("quiz-question").appendChild(ans3);
    ans3.addEventListener("click", incorrectAnswer);

    var ans4 = document.querySelector("#answer4");
    ans4 = document.createElement("button");
    ans4.classList.add("btn");
    ans4.textContent = "<body>";
    document.getElementById("quiz-question").appendChild(ans4);
    ans4.addEventListener("click", incorrectAnswer);

    function incorrectAnswer() {
        //timer minus 5 seconds
        clearContent(q1, ans1, ans2, ans3, ans4);
        question10();
    }
    
        function correctAnswer() {
        clearContent(q1, ans1, ans2, ans3, ans4);
        question10();
    }
    
};      //end of question9

var question10 = function() {
    var q1 = document.createElement("ul");
    q1.id = "question";
    q1.textContent = "How does one become a successful programmer?";
    document.getElementById('quiz-question').appendChild(q1);

    var ul = document.getElementById("quiz-question")
    ans1 = document.createElement("button");
    ans1.classList.add("btn");
    ans1.textContent = "Practice";
    document.getElementById("quiz-question").appendChild(ans1);
    ans1.addEventListener("click", correctAnswer);

    var ans2 = document.querySelector("#answer2");
    ans2 = document.createElement("button");
    ans2.classList.add("btn");
    ans2.textContent = "Practice";
    document.getElementById("quiz-question").appendChild(ans2);
    ans2.addEventListener("click", correctAnswer);

    var ans3 = document.querySelector("#answer3");
    ans3 = document.createElement("button");
    ans3.classList.add("btn");
    ans3.textContent = "Practice";
    document.getElementById("quiz-question").appendChild(ans3);
    ans3.addEventListener("click", correctAnswer);

    var ans4 = document.querySelector("#answer4");
    ans4 = document.createElement("button");
    ans4.classList.add("btn");
    ans4.textContent = "Practice";
    document.getElementById("quiz-question").appendChild(ans4);
    ans4.addEventListener("click", correctAnswer);

    function incorrectAnswer() {
        //timer minus 5 seconds
        clearContent(q1, ans1, ans2, ans3, ans4);
        //endQuiz();
    }
    
        function correctAnswer() {
        clearContent(q1, ans1, ans2, ans3, ans4);
        //endQuiz();
    }
    
};      //end of question9

function clearContent(q1, ans1, ans2, ans3, ans4) {
    q1.parentNode.removeChild(q1);
    ans1.parentNode.removeChild(ans1);
    ans2.parentNode.removeChild(ans2);
    ans3.parentNode.removeChild(ans3);
    ans4.parentNode.removeChild(ans4);
}


startButton.addEventListener("click", startQuiz);