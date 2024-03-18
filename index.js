document.querySelector("#push").onclick = function () {
    if(document.querySelector('#newtask input').value.length == 0) {
    alert("Please Enter a Valid Input");
    }
    else{
      document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#newtask input").value}
                </span>
            </div>
        `;
        // Clear the input field after adding the task
        document.querySelector("#newtask input").value = "";

    }
}
document.querySelector("#newtask input").addEventListener("keypress", function (event) {
  // Check if the pressed key is Enter
  if (event.keyCode === 13) {
    // Prevent the default behavior of the Enter key
    event.preventDefault();
    // Trigger the click event of the button with id 'push'
    document.querySelector("#push").click();
  }
});