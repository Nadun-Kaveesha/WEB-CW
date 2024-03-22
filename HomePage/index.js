if (window.innerWidth <= 720) {
  function toggleDropdown() {
    var dropdown = document.getElementById("navDropdown");
    if (dropdown.style.display === "none") {
      dropdown.style.display = "block";
    } else {
      dropdown.style.display = "none";
    }
  }

  var navLink = document.querySelectorAll(".NavigationBar ul li a");
  navLink.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      var dropdown = document.getElementById("navDropdown");
      dropdown.style.display = "none";
    });
  });
}

//Redirecting to relevent html files
document.getElementById("About us").addEventListener("click", function () {
  window.location.href = "/Team/Team.html";
});

document.querySelector(".UserProfile").addEventListener("click", function () {
  window.location.href = "/UserProfile/UserProfile.html";
});

document.getElementById("Home").addEventListener("click", function () {
  window.location.href = "HomePage.html";
});

document.getElementById("Shop").addEventListener("click", function () {
  window.location.href = "/Shop/Shop.html";
});

document.getElementById("Site Map").addEventListener("click", function () {
  window.location.href = "/Sitemap/Sitemap.html";
});

document.getElementById("Gallery").addEventListener("click", function () {
  window.location.href = "/Gallery/Gallery.html";
});

