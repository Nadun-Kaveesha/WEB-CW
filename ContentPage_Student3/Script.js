//Function to make the jump to bottom link work
const scrollToBottomLink = document.getElementById("scrollToBottom");
const footer = document.querySelector("footer");

scrollToBottomLink.addEventListener("click", (event) => {
  event.preventDefault(); 
  footer.scrollIntoView({ behavior: "smooth" });
});

// Function to detect display scale
function getDisplayScale() {
  const mediaQuery = window.matchMedia("(resolution: 1dppx)");
  if (mediaQuery && mediaQuery.media === "(resolution: 1dppx)") {
    return 1; // 100% scale
  } else {
    // If unable to detect, assume 100% scale
    return 1;
  }
}

// Function to set page height to 150vh if display scale is 100%
function setPageHeight() {
  const scale = getDisplayScale();
  const homeContainer = document.querySelector("home-container");

  if (scale === 1) {
    homeContainer.style.height = "1050vh";
  } else if (scale === 1.25) {
    homeContainer.style.height = "1150vh";
  }
}

// Call the setPageHeight function when the page loads
window.onload = setPageHeight;


