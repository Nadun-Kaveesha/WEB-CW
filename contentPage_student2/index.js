document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('a[href="#"]').addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector(".scroll-target").scrollIntoView ({
            behavior : "smooth"
        });
    });
});
