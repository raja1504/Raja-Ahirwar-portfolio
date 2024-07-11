// Combined showSlides function
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Check screen size using media query
  if (window.matchMedia("(min-width: 1150px)").matches) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "grid";  
    dots[slideIndex-1].className += " active";
    if (!slideshowPaused) {
      setTimeout(showSlides, 2000); // Change image every 2 seconds if not paused
    }
  } else if (window.matchMedia("(min-width: 360px)").matches) {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    if (!slideshowPaused) {
      setTimeout(showSlides, 2000); // Change slide every 2 seconds if not paused
    }
  }
}

// Initial slideIndex
let slideIndex = 0;
let slideshowPaused = false; // Variable to track slideshow pause state
showSlides(); // Start the slideshow

// Pause the slideshow on mouse enter
document.querySelector('.slideshow-container').addEventListener('mouseenter', () => {
  slideshowPaused = true; // Set slideshowPaused to true to pause the slideshow
});

// Resume the slideshow on mouse leave
document.querySelector('.slideshow-container').addEventListener('mouseleave', () => {
  slideshowPaused = false; // Set slideshowPaused to false to resume the slideshow
  showSlides(); // Start the slideshow again
});