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
}

// Function to update the progress bar
function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector("#progress__fill").style.width = `${value}%`;
  progressBar.querySelector("#progress__text").textContent = `${value}%`;
}

// Function to handle click event on the "Add" button
document.querySelector("#add").onclick = function () {
  const inputValue = document.querySelector("#newtask input").value;

  // Update the task with the answer to the current question
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
  progressIndex += 5;

  // If all questions have been asked, hide the "Add" button
  if (questionIndex >= questions.length) {
    document.querySelector("#add").style.display = "none";
    document.getElementById("inputDescription").innerText = "";
    const inputField = document.querySelector("#newtask input");
    inputField.readOnly = true;
    inputField.placeholder = "Press Next to Proceed..";
    inputField.style.width = "100%";
    inputField.style.textAlign = "center";
    
    return;
  }


  // Update input description and placeholder for the next question
  updateInputDescriptionAndPlaceholder();

  // Update the progress bar
  const myProgressBar = document.querySelector("#progress");
  updateProgressBar(myProgressBar, progressIndex);
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
