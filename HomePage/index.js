if (window.innerWidth <= 720) {
function toggleDropdown() {
    var dropdown = document.getElementById("navDropdown") ;
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block" ;
    } else {
        dropdown.style.display = "none" ;
    }
}

var navLink = document.querySelectorAll(".NavigationBar ul li a") ;
navLink.forEach(function(navLink) {
    navLink.addEventListener("click",function() {
        var dropdown = document.getElementById("navDropdown");
        dropdown.style.display = "none" ;
    });
});

}