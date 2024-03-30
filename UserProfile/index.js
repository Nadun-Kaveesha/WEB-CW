// Define question sets
const questionSets = [
  [
    { description: "Name :", placeholder: "Please Enter Your Name" },
    { description: "Surname :", placeholder: "Please Enter Your Surname" },
    { description: "Age :", placeholder: "Please Enter Your Age" },
    { description: "Gender :", placeholder: "Please Enter Your Gender" },
    { description: "Agree with the conditions :", placeholder: "Yes or No" },
  ],
  [
    { description: "Rational :", placeholder: "Please Enter Your Rationality" },
    { description: "DoA :", placeholder: "Please Enter Your DoA" },
    { description: "Task :", placeholder: "Please Enter Your Task" },
    { description: "Place :", placeholder: "Please Enter Your Place" },
    { description: "Assignment Type :", placeholder: "Please Enter Your Assignment Type" },
  ],
  [
    { description: "Area of Study :", placeholder: "Please Enter Your Area of Study" },
    { description: "Highest Degree :", placeholder: "Please Enter Highest Degree Level" },
    { description: "University :", placeholder: "Please Enter Your University / Institute" },
    { description: "Complete Year :", placeholder: "Please Enter Your Completion Year of Study" },
    { description: "Country :", placeholder: "Please Enter Country the University Belongs" },
  ],
  [
    { description: "Availability for Volunteering :", placeholder: "Min Hours Per Week " },
    { description: "Surname :", placeholder: "Please Enter Your Surname" },
    { description: "Telephone No. :", placeholder: "Please Enter Your Telephone No." },
    { description: "Availability on Social Media :", placeholder: "Yes or No" },
    { description: "Email :", placeholder: "Please Enter Your Email address" },
  ],
];

// Initialize question index and progress index
let questionIndex = 0;
let questionSetIndex = 0;
let progressIndex = 0;

// Define the delay in milliseconds (e.g., 2000 milliseconds = 2 seconds)
const delayInMillis = 2000;

// Function to refresh the page after a delay
function refreshPageWithDelay() {
  // Set a timeout to reload the page after the specified delay
  setTimeout(function() {
    // Reload the page
    location.reload();
  }, delayInMillis);
}


//Function to hide the task container if there is no inputs
function toggleTaskContainerVisibility() {
  if (questionIndex > 0) {
    document.querySelector("#tasks").style.display = "block";
  } else {
    document.querySelector("#tasks").style.display = "none";
  }
}

// Function to update input description and placeholder
function updateInputDescriptionAndPlaceholder() {
  const currentQuestion = questionSets[questionSetIndex][questionIndex];
  document.getElementById("inputDescription").innerText = currentQuestion.description;
  document.querySelector("#newtask input").placeholder = currentQuestion.placeholder;
  document.getElementById("questionDescription").innerText = `Step ${
    questionSetIndex + 1
  } Personal Details | Question ${questionIndex + 1} of ${questionSets[questionSetIndex].length}`;

  // Toggle task container visibility
  toggleTaskContainerVisibility();
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

      isFirstClick = false; // Set the flag to false after the first click
    }
  };
}

// Function to handle click event on the "Skip" button
document.querySelector("#skip").onclick = function () {
  document.querySelector("#tasks").innerHTML += `
      <div class="task">
        <span id="taskname">
          ${questionSets[questionSetIndex][questionIndex].description} ${"?"}
        </span>
      </div>
    `;
  // Move to the next question
  questionIndex++;

  // Adjust progress index by subtracting 5
  progressIndex -= 5;

  // If all questionSets have been asked, hide the "Add" button


  // Update input description and placeholder for the next question
  updateInputDescriptionAndPlaceholder();

  // Toggle task container visibility
  toggleTaskContainerVisibility();
};

// Function to handle click event on the "Add" button
document.querySelector("#add").onclick = function () {
  // Update the task with the answer to the current question
  const inputValue = document.querySelector("#newtask input").value;
  if (questionIndex <= 4 && inputValue == 0) {
    alert("Please Enter a Valid Input");
  } else {
    document.querySelector("#tasks").innerHTML += `
      <div class="task">
        <span id="taskname">
          ${questionSets[questionSetIndex][questionIndex].description} ${inputValue}
        </span>
      </div>
    `;
    progressIndex += 5;
    const myProgressBar = document.querySelector("#progress");
    updateProgressBar(myProgressBar, progressIndex);

    // Clear the input field after adding the answer
    document.querySelector("#newtask input").value = "";

    // Move to the next question
    questionIndex++;

    // If all questionSets have been asked, hide the "Add" button
    if (questionIndex >= questionSets[questionSetIndex].length) {
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

    // Toggle task container visibility
    toggleTaskContainerVisibility();
  }
};



// Initialize the click event listener for the "Next" button
document.querySelector("#next").onclick =function(){
  if (questionIndex >= questionSets[questionSetIndex].length) {
      questionSetIndex++;
      questionIndex = 0;
      document.querySelector("#tasks").innerHTML = "";
      //inputField.style.width = "70%";
      document.querySelector("#add").style.display = "inline-block";
      document.getElementById("inputDescription").innerText = "";
      const inputField = document.querySelector("#newtask input");
      inputField.readOnly = false;
  }

  // Update input description and placeholder for the next question
  updateInputDescriptionAndPlaceholder();
};


















// Initialize input description and placeholder for the first question
updateInputDescriptionAndPlaceholder();

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
