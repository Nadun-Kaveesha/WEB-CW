//function to make the bottom of the page jump to bottom.
const scrollToBottomLink = document.getElementById("scrollToBottom");
const footer = document.querySelector("footer");

scrollToBottomLink.addEventListener("click", (event) => {
  event.preventDefault(); 
  footer.scrollIntoView({ behavior: "smooth" });
});

//to detect display scale
function getDisplayScale() {
  const mediaQuery = window.matchMedia("(resolution: 1dppx)");
  if (mediaQuery && mediaQuery.media === "(resolution: 1dppx)") {
    return 1; // 100% s cale
  } else {
    // If not able to detect, assume 100% scale
    return 1;
  }
}

// function to set page height to 150vh ,if display s cale = 100%
function setPageHeight() {
  const scale = getDisplayScale();
  const homeContainer = document.querySelector("home-container");

  if (scale === 1) {
    homeContainer.style.height = "1050vh";
  } else if (scale === 1.25) {
    homeContainer.style.height = "1150vh";
  }
}

// call the setPageHeight function when page loads
window.onload = setPageHeight;


