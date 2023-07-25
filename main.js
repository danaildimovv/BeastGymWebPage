$(document).ready(function() {
    // Add smooth scroll to anchor links
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        const hash = this.hash;
        const targetOffset = $(hash).offset().top;
  
        $('html, body').animate({
          scrollTop: targetOffset
        }, 100); // Set the animation duration in milliseconds (e.g., 800 for 800ms)
      }
    });
  });