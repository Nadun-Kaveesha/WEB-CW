const nodes = document.querySelectorAll('rect');
nodes.forEach(node => {
    node.addEventListener('mouseover', function() {
        this.setAttribute('fill', 'red'); // Change the color on hover
    });

    node.addEventListener('mouseout', function() {
        this.setAttribute('fill', 'blue'); // Revert the color on mouseout
    });

    node.addEventListener('click', function() {    // Redirect to corresponding page when clicked
        
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
        }
    });

    node.setAttribute('aria-label', node.id); // Add alt text for accessibility

});


// Make the SVG responsive
window.addEventListener('resize', function() {
    const svg = document.querySelector('svg');
    const rect = svg.getBoundingClientRect();
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const scaleX = width / rect.width;
    const scaleY = height / rect.height;
    const scale = Math.min(scaleX, scaleY);
    svg.style.transform = `scale(${scale})`;
});


