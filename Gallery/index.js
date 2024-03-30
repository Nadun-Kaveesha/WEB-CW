// JavaScript for modal functionality
document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.image-box');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modal-content");
    var closeModalButton = document.querySelector('.close');

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            var title = this.getAttribute('data-title');
            var imageSrc = this.getAttribute('data-image');
            var description = this.getAttribute('data-description');

            modal.style.display = "block";
            modalContent.innerHTML = `
                <h2>${title}</h2>
                <img src="${imageSrc}" alt="${title}">
                <p>${description}</p>
            `;
        });
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
