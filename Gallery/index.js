document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.photo');
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modal-content");
    var closeModalButton = document.querySelector('.close');
    var colorPicker = document.getElementById('colorPicker'); //to select the color picker
    var fontSelector = document.getElementById('fontSelector'); //to select the font selector

    // function to update the background color of modal content
    function updateModalBackgroundColor(color) {
        modalContent.style.backgroundColor = color;
    }

    // function to update the font of modal content
    function updateModalFont(font) {                                
        modalContent.style.setProperty('--font-family', font); // to set the font = font;
    }

    images.forEach(function(image) {
        image.addEventListener('click', function() {
            var title = this.getAttribute('data-title');
            var imageSrc = this.getAttribute('data-image');
            var description = this.getAttribute('data-description');

            modal.style.display = "block";
            modalContent.innerHTML = `
                <h2>${title}</h2>
                <img class="modal-image" src="${imageSrc}" alt="${title}">
                <p class="modal-description">${description}</p>
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

    // event listener for when the color picker value changes
    colorPicker.addEventListener('input', function() {
        // set the background color of modal content to the chosen color
        updateModalBackgroundColor(colorPicker.value);
    });

    // event listener for when the font selector value changes
    fontSelector.addEventListener('change', function() {
        // set the font of modal content to the selected font
        updateModalFont(fontSelector.value);
    });
});
