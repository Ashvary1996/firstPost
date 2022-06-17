let slideIndex = 1;

showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let rectangle = document.getElementsByClassName("rectangle");

    if (n > slides.length) { slideIndex = 0 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < rectangle.length; i++) {
        rectangle[i].className = rectangle[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    rectangle[slideIndex - 1].className += " active";
    if (slideIndex == 5) { slideIndex = 0 }
    setTimeout(showSlides, 5000);
    slideIndex++;
}