document.getElementById('menu-button').addEventListener('click', function () {
  var menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("scrollButton");
    let isScrolling;
  
    window.addEventListener("scroll", function() {
      // Show the button if not at the top
      if (window.scrollY > 0) {
        scrollButton.classList.remove("opacity-0", "pointer-events-none");
        scrollButton.classList.add("opacity-100");
  
        clearTimeout(isScrolling);
  
        // Hide the button after 2 seconds of no scrolling
        isScrolling = setTimeout(function() {
          scrollButton.classList.remove("opacity-100");
          scrollButton.classList.add("opacity-0", "pointer-events-none");
        }, 2000);
      } else {
        // Hide the button if at the top
        scrollButton.classList.remove("opacity-100");
        scrollButton.classList.add("opacity-0", "pointer-events-none");
      }
    });
  
    scrollButton.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  