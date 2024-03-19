// Define an array of questions and corresponding placeholders
const questions = [
  { description: "Name :", placeholder: "Please Enter Your Name" },
  { description: "Surname :", placeholder: "Please Enter Your Surname" },
  { description: "Age :", placeholder: "Please Enter Your Age" },
  { description: "Gender :", placeholder: "Please Enter Your Gender" },
  { description: "Agree with the conditions :", placeholder: "Yes or No" },
];

// Initialize question index and progress index
let questionIndex = 0;
let progressIndex = 0;

// Function to update input description and placeholder
function updateInputDescriptionAndPlaceholder() {
  const currentQuestion = questions[questionIndex];
  document.getElementById("inputDescription").innerText = currentQuestion.description;
  document.querySelector("#newtask input").placeholder = currentQuestion.placeholder;
  document.getElementById("questionDescription").innerText = `Step 1 Personal Details | Question ${questionIndex + 1} of ${questions.length}`;
}


// Function to update the progress bar
function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector("#progress__fill").style.width = `${value}%`;
  progressBar.querySelector("#progress__text").textContent = `${value}%`;
}

// Function to increment the progressbar and proceed to next page
function initializeProgressBarIncrement() {
  let isFirstClick = true; // Flag to track the first click

  document.querySelector("#next").onclick = function () {
    if (isFirstClick) {
      // Update the progress bar only on the first click
      progressIndex += 25;
      const myProgressBar = document.querySelector("#progress");
      updateProgressBar(myProgressBar, progressIndex);
      isFirstClick = false; // Set the flag to false after the first click
    }
  };
}

// Function to handle click event on the "Skip" button
document.querySelector("#skip").onclick = function () {
  document.querySelector("#tasks").innerHTML += `
      <div class="task">
        <span id="taskname">
          ${questions[questionIndex].description} ${"?"}
        </span>
      </div>
    `;
  // Move to the next question
  questionIndex++;

  // Adjust progress index by subtracting 5
  progressIndex -= 5;

  // If all questions have been asked, hide the "Add" button
  if (questionIndex >= questions.length) {
    document.querySelector("#add").style.display = "none";
    document.getElementById("inputDescription").innerText = "";
    const inputField = document.querySelector("#newtask input");
    inputField.readOnly = true;
    inputField.placeholder = "Press Next to Proceed..";
    inputField.style.width = "100%";
    inputField.style.textAlign = "center";
    initializeProgressBarIncrement();
    return;
  }

  // Update input description and placeholder for the next question
  updateInputDescriptionAndPlaceholder();
};


// Function to handle click event on the "Add" button
document.querySelector("#add").onclick = function () {
  // Update the task with the answer to the current question
  const inputValue = document.querySelector("#newtask input").value;
  if (inputValue ==0){
    alert("Please Enter a Valid Input");
  }else{
    document.querySelector("#tasks").innerHTML += `
      <div class="task">
        <span id="taskname">
          ${questions[questionIndex].description} ${inputValue}
        </span>
      </div>
    `;

    // Clear the input field after adding the answer
    document.querySelector("#newtask input").value = "";

    // Move to the next question
    questionIndex++;

    // If all questions have been asked, hide the "Add" button
    if (questionIndex >= questions.length) {
      document.querySelector("#add").style.display = "none";
      document.getElementById("inputDescription").innerText = "";
      const inputField = document.querySelector("#newtask input");
      inputField.readOnly = true;
      inputField.placeholder = "Press Next to Proceed..";
      inputField.style.width = "100%";
      inputField.style.textAlign = "center";
      initializeProgressBarIncrement();
      return;
    }

  // Update input description and placeholder for the next question
  updateInputDescriptionAndPlaceholder();
  }
};

// Add keypress event listener to the input field
document.querySelector("#newtask input").addEventListener("keypress", function (event) {
  // Check if the pressed key is Enter
  if (event.keyCode === 13) {
    // Prevent the default behavior of the Enter key
    event.preventDefault();
    // Trigger the click event of the "Add" button
    document.querySelector("#add").click();
  }
});

// Initialize input description and placeholder for the first question
updateInputDescriptionAndPlaceholder();

// Initialize the progress bar
const myProgressBar = document.querySelector("#progress");
updateProgressBar(myProgressBar, progressIndex);
