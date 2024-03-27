if (window.innerWidth <= 720) {
    function toggleDropdown() {
      var dropdown = document.getElementById("navDropdown");
      if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
      } else {
        dropdown.style.display = "none";
      }
    }
  }
  

function gotoHome() {
  window.location.href = "/HomePage/HomePage.html"
}

