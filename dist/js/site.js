let questions = [
  {
    id: 1,
    question: "How often do you think of your ex?",
    answer: "Random Access Memory",
    options: ["Never", "Once a week", "Every day", "Multiple times a day"],
  },
  {
    id: 2,
    question: "Do you blame yourself?",
    answer: "Central Processing Unit",
    options: ["No", "Somewhat", "Yes", "Absolutely"],
  },
  {
    id: 3,
    question: "How would you describe the way you feel?",
    answer: "Electronic Mail",
    options: [
      "I’ve moved on",
      "I feel somewhat sad but I’ll get over it",
      "I’m hurting",
      "The pain is unbearable",
    ],
  },
  {
    id: 4,
    question: "What was the cause for the breakup?",
    answer: "Electronic Mail",
    options: ["Cheating", "Abuse", "Lack of communication", "Something else"],
  },
  {
    id: 5,
    question: "Are you ready to date again?",
    answer: "Electronic Mail",
    options: ["Absolutely", "In the future", "No time soon", "Never again"],
  },
  {
    id: 6,
    question: "Who broke up with who?",
    answer: "Electronic Mail",
    options: [
      "He broke up with you",
      "You broke up with him",
      "It was mutual",
      "You still don’t know",
    ],
  },
  {
    id: 7,
    question: "Given the chance would you get back with you ex?",
    answer: "Electronic Mail",
    options: ["Absolutely not", "Maybe", "Yeah", "In a minute"],
  },
  {
    id: 8,
    question:
      "You find an expensive piece of jewelry that belongs to your ex you ?",
    answer: "Electronic Mail",
    options: [
      "Donate it",
      "Give it back to them",
      "Keep it to remember them",
      "Break it into a million pieces",
    ],
  },
];

let question_count = 0;
let points = 0;
let Max_Questions = 8;

window.onload = function () {
  show(question_count);
  sessionStorage.clear();
};

function next() {
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  //if (user_answer == questions[question_count].answer) {
  if (
    user_answer === "Never" ||
    user_answer === "No" ||
    user_answer === "I’ve moved on" ||
    user_answer === "Never again" ||
    user_answer === "You broke up with him" ||
    user_answer === "Absolutely not"
  ) {
    points += 5;
  } else if (
    user_answer === "Once a week" ||
    user_answer === "Somewhat" ||
    user_answer === "I feel somewhat sad but I’ll get over it" ||
    user_answer === "No time soon" ||
    user_answer === "It was mutual" ||
    user_answer === "Give it back to them"
  ) {
    points += 4;
  } else if (user_answer === "Donate it" || user_answer === "Maybe") {
    points += 3;
  } else if (
    user_answer === "Every day" ||
    user_answer === "Yes" ||
    user_answer === "I’m hurting" ||
    user_answer === "In the future" ||
    user_answer === "He broke up with you" ||
    user_answer === "You still don’t know" ||
    user_answer === "Break it into a million pieces" ||
    user_answer === "Yeah"
  ) {
    points += 2;
  } else if (
    user_answer === "Multiple times a day" ||
    user_answer === "Absolutely" ||
    user_answer === "The pain is unbearable" ||
    user_answer === "Cheating" ||
    user_answer === "Abuse" ||
    user_answer === "Lack of communication" ||
    user_answer === "Something else" ||
    user_answer === "Keep it to remember them" ||
    user_answer === "In a minute"
  ) {
    points += 1;
  }
  sessionStorage.setItem("points", points);

  console.log(points);

  question_count++;
  show(question_count);
  toggleActive();
  //Update the progress Bar

  const progressBarFull = document.getElementById("progressBarFull");

  progressBarFull.style.width = ` ${(question_count / Max_Questions) * 100}%`;
}

function show(count) {
  //progress text
  const progressText = document.getElementById("progressText");

  progressText.innerText = `Question ${count + 1}/${Max_Questions}`;

  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
let usertimehide = document.querySelector(".quiz_timer");
usertimehide.style.display = "none";
