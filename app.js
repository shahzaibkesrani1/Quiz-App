const ques = [
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    a: "var myVar;",
    b: "let myVar;",
    c: "const myVar;",
    d: "All of the above;",
    correct: "d",
  },
  {
    question:
      "Which method is used to add an element to the end of an array in JavaScript?",

    a: "array.push();",
    b: "array.pop();",
    c: "array.unshift();",
    d: "array.shift();",
    correct: "a",
  },
  {
    question: "What is the result of the expression 2 + 2 in JavaScript?",

    a: "4;",
    b: "22;",
    c: "2;",
    d: "NaN;",
    correct: "a",
  },
  {
    question: "How do you check if a variable is an array in JavaScript?",

    a: "Array.isArray(variable);",
    b: "variable instanceof Array;",
    c: "variable.isArray();",
    d: "typeof variable === 'array';",
    correct: "a",
  },
  {
    question: "What is the purpose of the (this) keyword in JavaScript?",

    a: "It refers to the current HTML element.",
    b: "It refers to the global object.",
    c: "It refers to the parent object.",
    d: "It refers to the current object.",
    correct: "d",
  },
];

const questions = document.getElementById("question");
const options1 = document.getElementById("op1");
const options2 = document.getElementById("op2");
const options3 = document.getElementById("op3");
const options4 = document.getElementById("op4");
var banana = document.querySelectorAll(".ans");
const qwe = document.getElementById("score");
var submit = document.getElementById("next-btn");
var barabar = document.getElementsByTagName("h1");
var score = 0;
var a = 0;
newfun();
function newfun() {
  questions.innerHTML = a + 1 + " ) " + ques[a].question;
  options1.innerHTML = ques[a].a;
  options2.innerHTML = ques[a].b;
  options3.innerHTML = ques[a].c;
  options4.innerHTML = ques[a].d;
  disk();
}

submit.addEventListener("click", () => {
  var xyz = checkquiz();
  if (xyz) {
    if (xyz == ques[a].correct) {
      score += 5;
    }
    a++;
    if (a < ques.length) {
      newfun();
    } else {
      var scoreElement = document.getElementById("score");
      scoreElement.innerHTML = score;
      document.getElementById("display").style.display = "block";
      document.getElementById("none").style.display = "none";
    }
  }
});
function disk() {
  banana.forEach((abcd) => (abcd.checked = false));
}
function checkquiz() {
  var checkans;
  banana.forEach((abcd) => {
    if (abcd.checked) {
      checkans = abcd.id;
    }
  });
  return checkans;
}

function shahzaib() {
  let pakistanFlag = false;

  var logemail = document.getElementById("email").value;
  var logpass = document.getElementById("password").value;
  var hello = localStorage.getItem("users");
  var world = JSON.parse(hello);
  if (logemail !== "" && logpass !== "") {
    for (var i = 0; i < world.length; i++) {
      if (logemail == world[i].email && logpass == world[i].password) {
        pakistanFlag = true;
        alert("Log In Succesfully");
        document.getElementById("log").href = "home.html";
      }
    }
    if (pakistanFlag == false) {
      alert("Invalid Email");
    }
  } else {
    alert("Please Fill Input");
  }
}

// yeh sign up wala hai

function login() {
  var empy = localStorage.getItem("users");
  var variable = empy ? JSON.parse(empy) : [];
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  const users = {
    email: email,
    password: password,
  };
  variable.push(users);
  var a = JSON.stringify(variable);
  localStorage.setItem("users", a);
  location.href = "login.html";
}
