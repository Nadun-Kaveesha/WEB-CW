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
    { description: "Complete Year :", placeholder: "Please Enter Your Completion YoS" },
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

// Function to get question description based on question set index
function getQuestionDescription(setIndex) {
  switch (setIndex) {
    case 0:
      return "Personal Details";
    case 1:
      return "Volunteering Tasks";
    case 2:
      return "Qualifications";
    case 3:
      return "Availability and Tasks";
    default:
      return "";
  }
}

// Initialize question index and progress index
let questionIndex = 0;
let questionSetIndex = 0;
let progressIndex = 0;
// Define an array to store question-answer pairs
let questionAnswers = [];

//Function to hide the task container if there is no inputs
function toggleTaskContainerVisibility() {
  if (questionIndex > 0) {
    document.querySelector("#tasks").style.display = "block";
    document.querySelector("#task-description").style.visibility = "visible";
  } else {
    document.querySelector("#tasks").style.display = "none";
    document.querySelector("#task-description").style.visibility = "visible";
  }
}

// Function to update input description and placeholder
function updateInputDescriptionAndPlaceholder() {
  const currentQuestion = questionSets[questionSetIndex][questionIndex];
  document.getElementById("inputDescription").textContent = currentQuestion.description;
  document.querySelector("#newtask input").placeholder = currentQuestion.placeholder;
  //updating the question description
  document.getElementById("questionDescription").innerText = `Step ${
    questionSetIndex + 1
  } ${getQuestionDescription(questionSetIndex)} | Question ${questionIndex + 1} of ${
    questionSets[questionSetIndex].length
  }`;
  // Toggle task container visibility
  toggleTaskContainerVisibility();
}

// Function to update the progress bar
function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector("#progress__fill").style.width = `${value}%`;
  progressBar.querySelector("#progress__text").textContent = `${value}%`;
}

// Function to handle click event on the "Skip" button
document.querySelector("#skip").onclick = function () {
  alert("You can edit the skipped details later !");
  questionAnswers.push({
    question: questionSets[questionSetIndex][questionIndex].description,
    answer: "Skipped",
  });
  document.querySelector("#task-container").innerHTML += `
      <div class="task">
        <span id="taskname">
          ${questionSets[questionSetIndex][questionIndex].description} ${"?"}
        </span>
      </div>
    `;
  // Move to the next question
  questionIndex++;

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
    // Add the question and its answer to the list
    questionAnswers.push({
      question: questionSets[questionSetIndex][questionIndex].description,
      answer: inputValue,
    });
    document.querySelector("#task-container").innerHTML += `
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

    // If all questions of a certain questionSet have been asked, hide the "Add" button and do others things
    if (questionIndex >= questionSets[questionSetIndex].length) {
      document.querySelector("#add").style.display = "none";
      document.getElementById("inputDescription").innerText = "";
      const inputField = document.querySelector("#newtask input");
      inputField.readOnly = true;
      inputField.placeholder =
        questionSetIndex + 1 < questionSets.length
          ? "Press Next to Proceed.."
          : "Please Press Next to See the Form of Details!";
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

// Function to handle click event on the "Next" button
document.querySelector("#next").onclick = function () {
  if (questionIndex >= questionSets[questionSetIndex].length) {
    if (questionSetIndex + 1 < questionSets.length) {
      // Move to the next question set
      questionSetIndex++;
      questionIndex = 0;
      document.querySelector("#task-container").innerHTML = "";
      document.querySelector("#add").style.display = "inline-block";
      document.getElementById("inputDescription").innerText = "";
      const inputField = document.querySelector("#newtask input");
      inputField.readOnly = false;
      inputField.style.width = "70%";
      document.getElementById("task-description").innerText =
        getQuestionDescription(questionSetIndex);
    } else {
      // If all questions in all question sets are asked, display the form and hide the continer
      document.querySelector(".home-container").style.display = "none";
      document.querySelector(".form-container").style.display = "block";

      // Print all questions and answers in the form
      printQuestionsAndAnswers();

      return;
    }
  }
  // Update input description and placeholder for the next question
  updateInputDescriptionAndPlaceholder();
};

//adding the task heading(description)
document.getElementById("task-description").innerText = getQuestionDescription(questionSetIndex);

//printing the Q&As in form
let editingQuestion = null;

function printQuestionsAndAnswers() {
  const form = document.querySelector("#form");
  form.innerHTML = ""; // Clear previous content
  questionSets.forEach((questionSet, index) => {
    form.innerHTML += `
      <h4 id="task-description-form">
        ${getQuestionDescription(index)}
      </h4>`;
    questionSet.forEach((question) => {
      const answerObj = questionAnswers.find((qa) => qa.question === question.description);
      const answer = answerObj ? answerObj.answer : "Skipped";
      form.innerHTML += `
        <div class="task">
          <span id="taskname-${question.description}" data-question="${question.description}">
            ${question.description} 
            <span class="answer-span" id="answer-${question.description}">
              <span class="editable-answer" contenteditable="true">${answer}</span>
            </span>
          </span>
        </div>
      `;
    });
  });

  // Adding buttons
  form.innerHTML += `
    <div>
      <button id="editButton" type="button">Edit <i class='bx bxs-edit'></i></button>
      <button id="submitForm" type="button" style="display: none;" >Save <i class='bx bxs-save' ></i></button>
    </div>
  `;

  // Add event listener for the "Edit" button
  document.getElementById("editButton").addEventListener("click", enableEditing);
}

// Function to enable editing of answers
function enableEditing() {
  const form = document.querySelector("#form");
  const editableAnswers = form.querySelectorAll(".editable-answer");
  editingQuestion = null;

  // Show the "Submit" button and hide the "Edit" button
  document.getElementById("submitForm").style.display = "inline-block";
  document.getElementById("editButton").style.display = "none";

  // Add event listener for the "Submit" button
  document.getElementById("submitForm").addEventListener("click", submitForm);

  // Add event listeners for editable spans
  editableAnswers.forEach((span) => {
    span.contentEditable = "true"; // Make the span editable
    span.style.border = "1px solid blue"; // Add a blue border to indicate editability
    span.addEventListener("input", function () {
      editingQuestion = span.parentNode.parentNode.dataset.question;
    });
  });
}

//  function to handle form submission
function submitForm() {
  const form = document.querySelector("#form");
  const editableAnswers = form.querySelectorAll(".editable-answer");

  // Remove event listeners from editable spans
  editableAnswers.forEach((span) => {
    span.contentEditable = "false";
    span.style.border = "none"; // Removed the blue border to indicate uneditability

    span.removeEventListener("input", enableEditing);
  });

  // Hide the "Submit" button and show the "Edit" button
  document.getElementById("submitForm").style.display = "none";
  document.getElementById("editButton").style.display = "inline-block";
}

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

document.querySelector(".form-container").style.display = "none";


                                  //The part below is for the css modifications
// Get the footer element
const footer = document.querySelector('footer');

// Function to check the display style of form-container and adjust the margin-top of the footer
function adjustFooterMarginTop() {
  const formContainer = document.querySelector('.form-container');
  if (formContainer.style.display === "block") {
    // If form-container is displayed, set margin-top of footer to 58%
    footer.style.marginTop = '58%';
  } else {
    // If form-container is not displayed, set margin-top of footer to 40%
    footer.style.marginTop = '40%';
  }
}

// Add event listener to check for changes in the display style of form-container
// and adjust the margin-top of the footer accordingly
document.addEventListener('DOMContentLoaded', function () {
  adjustFooterMarginTop(); // Initially adjust margin-top based on form-container's display style
  window.addEventListener('resize', adjustFooterMarginTop); // Listen for window resize events
  // Listen for changes in the display style of form-container
  const observer = new MutationObserver(adjustFooterMarginTop);
  observer.observe(document.querySelector('.form-container'), { attributes: true });
});



