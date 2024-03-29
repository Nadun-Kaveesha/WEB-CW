// Define an array of questions and corresponding placeholders
const questions = [
  { description: "Name :", placeholder: "Please Enter Your Name" },
  { description: "Surname :", placeholder: "Please Enter Your Surname" },
  { description: "Age :", placeholder: "Please Enter Your Age" },
  { description: "Gender :", placeholder: "Please Enter Your Gender" },
  { description: "Agree with the conditions :", placeholder: "Yes or No" },
  { description: "Rational :", placeholder: "Please Enter Your Rationality" },
  { description: "DoA :", placeholder: "Please Enter Your DoA" },
  { description: "Task :", placeholder: "Please Enter Your Task" },
  { description: "Place :", placeholder: "Please Enter Your Place" },
  { description: "Assignment Type :", placeholder: "Please Enter Your Assignment Type" },
  { description: "Area of Study :", placeholder: "Please Enter Your Area of Study" },
  { description: "Highest Degree :", placeholder: "Please Enter Highest Degree Level" },
  { description: "University :", placeholder: "Please Enter Your University / Institute" },
  { description: "Complete Year :", placeholder: "Please Enter Your Completion Year of Study" },
  { description: "Country :", placeholder: "Please Enter Country the University Belongs" },
  { description: "Availability for Volunteering :", placeholder: "Min Hours Per Week " },
  { description: "Surname :", placeholder: "Please Enter Your Surname" },
  { description: "Telephone No. :", placeholder: "Please Enter Your Telephone No." },
  { description: "Availability on Social Media :", placeholder: "Yes or No" },
  { description: "Email :", placeholder: "Please Enter Your Email address" },
];

// Initialize question index and progress index
let questionIndex = 0;
let progressIndex = 0;

// Function to hide or show the task container based on question index
function toggleTaskContainerVisibility() {
  const tasksContainer = document.querySelector("#tasks");
  tasksContainer.style.display = questionIndex > 0 ? "block" : "none";
}

// Function to update input description and placeholder
function updateInputDescriptionAndPlaceholder() {
  const currentQuestion = questions[questionIndex];
  document.getElementById("inputDescription").innerText = currentQuestion.description;
  document.querySelector("#newtask input").placeholder = currentQuestion.placeholder;
  document.getElementById("questionDescription").innerText = `Step 1 Personal Details | Question ${
    questionIndex + 1
  } of ${questions.length}`;
  toggleTaskContainerVisibility();
}

// Function to update the progress bar
function updateProgressBar(value) {
  value = Math.round(value);
  const progressBar = document.querySelector("#progress");
  progressBar.querySelector("#progress__fill").style.width = `${value}%`;
  progressBar.querySelector("#progress__text").textContent = `${value}%`;
}

// Function to initialize progress bar and input fields
function initialize() {
  updateInputDescriptionAndPlaceholder();
  updateProgressBar(progressIndex);

  // Add click event listener for the "Skip" button
  document.querySelector("#skip").addEventListener("click", function () {
    document.querySelector(
      "#tasks"
    ).innerHTML += `<div class="task"><span id="taskname">${questions[questionIndex].description} ?</span></div>`;
    questionIndex++;
    progressIndex -= 5;
    if (questionIndex >= questions.length) {
      document.querySelector("#add").style.display = "none";
      const inputField = document.querySelector("#newtask input");
      inputField.readOnly = true;
      inputField.placeholder = "Press Next to Proceed..";
      inputField.style.width = "100%";
      inputField.style.textAlign = "center";
    }
    updateInputDescriptionAndPlaceholder();
    updateProgressBar(progressIndex);
  });

  // Add click event listener for the "Add" button
  document.querySelector("#add").addEventListener("click", function () {
    const inputValue = document.querySelector("#newtask input").value;
    if (questionIndex <= 19 && inputValue == 0) {
      alert("Please Enter a Valid Input");
    } else {
      document.querySelector(
        "#tasks"
      ).innerHTML += `<div class="task"><span id="taskname">${questions[questionIndex].description} ${inputValue}</span></div>`;
      progressIndex += 5;
      const myProgressBar = document.querySelector("#progress");
      updateProgressBar(progressIndex);
      document.querySelector("#newtask input").value = "";
      questionIndex++;
      if (questionIndex >= questions.length) {
        document.querySelector("#add").style.display = "none";
        const inputField = document.querySelector("#newtask input");
        inputField.readOnly = true;
        inputField.placeholder = "Press Next to Proceed..";
        inputField.style.width = "100%";
        inputField.style.textAlign = "center";
      }
      updateInputDescriptionAndPlaceholder();
    }
  });

  // Add keypress event listener to the input field
  document.querySelector("#newtask input").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.querySelector("#add").click();
    }
  });
}

// Initialize everything when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initialize);
