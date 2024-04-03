const nodes = document.querySelectorAll('rect, text'); // Select all rectangles and texts
nodes.forEach(node => {
    node.addEventListener('mouseover', function() {
        if (this.tagName === 'rect') { // Check if the element is a rectangle
            this.setAttribute('fill', 'rgb(13,152,186)'); // Change the color on hover
        } else if (this.tagName === 'text') { // Check if the element is a text
            this.previousElementSibling.setAttribute('fill', 'rgb(13,152,186)'); // Change the color of the rectangle on hover
        }
    });

    node.addEventListener('mouseout', function() {
        if (this.tagName === 'rect') {
            this.setAttribute('fill', 'rgb(144,238,238)'); // back to the exsited the color on mouseout
        } else if (this.tagName === 'text') {
            this.previousElementSibling.setAttribute('fill', 'rgb(144,238,238)'); // return the color of the rectangle on mouseout
        }
    });

    node.addEventListener('click', function() {    // redirect to corresponding page when clicked
        if (this.tagName === 'rect') {
            if (this.id === 'Home') {
                window.location.href = '/HomePage/HomePage.html';
            } else if (this.id === 'Gallery') {
                window.location.href = '/Gallery/Gallery.html';
            } else if (this.id === 'Shop') {
                window.location.href = '/Shop/Shop.html';
            } else if (this.id === 'Feedback') {
                window.location.href = '/Feedback/Feedback.html';
            } else if (this.id === 'About us') {
                window.location.href = '/Team/Team.html';
            } else if (this.id === 'Site Map') {
                window.location.href = '/Sitemap/Sitemap.html';
            } else if (this.id === 'UserProfile') {
                window.location.href = '/UserProfile/UserProfile.html';
            }
        } else if (this.tagName === 'text') {
            const rect = this.previousElementSibling;
            if (rect.id === 'Home') {
                window.location.href = '/HomePage/HomePage.html';
            } else if (rect.id === 'Gallery') {
                window.location.href = '/Gallery/Gallery.html';
            } else if (rect.id === 'Shop') {
                window.location.href = '/Shop/Shop.html';
            } else if (rect.id === 'Feedback') {
                window.location.href = '/Feedback/Feedback.html';
            } else if (rect.id === 'About us') {
                window.location.href = '/Team/Team.html';
            } else if (rect.id === 'Site Map') {
                window.location.href = '/Sitemap/Sitemap.html';
            } else if (rect.id === 'UserProfile') {
                window.location.href = '/UserProfile/UserProfile.html';
            }
        }
    });

    node.setAttribute('aria-label', node.id); // Add alt text for accessibility

});
