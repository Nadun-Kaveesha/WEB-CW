// Define an array of questions and corresponding placeholders
const questions = [
    { description: "Name :", placeholder: "Please Enter Your Name" },
    { description: "Surname :", placeholder: "Please Enter Your Surname" },
    { description: "Age :", placeholder: "Please Enter Your Age" },
    { description: "Gender :", placeholder: "Please Enter Your Gender" },
    { description: "Agree with the conditions :", placeholder: "Yes or No" }
];

// Initialize question index
let questionIndex = 0;

// Function to update input description and placeholder
function updateInputDescriptionAndPlaceholder() {
    const currentQuestion = questions[questionIndex];
    document.getElementById("inputDescription").innerText = currentQuestion.description;
    document.querySelector("#newtask input").placeholder = currentQuestion.placeholder;
}

// Add click event listener to the "Add" button
document.querySelector("#add").onclick = function () {
    const inputValue = document.querySelector('#newtask input').value;
    
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

    // If all questions have been asked,hiding the add button
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
}

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
