// LIST OF THE REQUIRED ATTRIBUTES
// Implementing jQuery
let imgSlides = document.querySelectorAll('.carousel-slides .carousel');
let nextButton = document.querySelector('.nextBtn');
let prevButton = document.querySelector('.prevBtn');
let dots = document.querySelectorAll('.dot');

// Init the counter
let counter = 0;

// This method is used to move to the upcoming carousel when the next button is clicked
nextButton.addEventListener('click', moveNext);
function moveNext(){
    // The syntax below is used to add animation to hide the current carousel
    imgSlides[counter].style.animation = 'nextOne 0.5s ease-in forwards';
    // Check if it's the last carousel, set the counter var to 0
    if(counter >= imgSlides.length - 1){
        counter = 0;
    } else {
        counter++; // If it's not, increment the counter var by 1
    }
    // The syntax below is used to add animation to display the upcoming carousel
    imgSlides[counter].style.animation = 'nextTwo 0.5s ease-in forwards';
    // Init and update the dot indicator
    dotIndicators();
}

// This method is used to move to the previous carousel when the prev button is clicked
prevButton.addEventListener('click', movePrev);
function movePrev(){
    //The syntax below is used to add animation to hide the current carousel
    imgSlides[counter].style.animation = 'prevOne 0.5s ease-in forwards';
    // Check if it's the first slide, set the counter according to the last carousel index
    if(counter == 0){
        counter = imgSlides.length - 1;
    } else {
        counter--; // If it's not, decrement the counter var by 1
    }
    // The syntax below is used to add animation to display the previous carousel
    imgSlides[counter].style.animation = 'prevTwo 0.5s ease-in forwards';
    // Init and update the dot indicator
    dotIndicators();
}

// This method is used to move to the next slide automatically by 3s
function ImgAutoSlide(){
    // set the timer by 3s
    deleteInterval = setInterval(setTimer, 3000);
    function setTimer(){
        moveNext(); // Move to the upcoming 
        dotIndicators(); // Init and update the dot indicator
    }
}
// Perform the auto sliding animation
ImgAutoSlide();

// The code below is used to pause the automatic sliding animation when the user directs the mouse all over the carousel
const carouselWrapper = document.querySelector('.carousel-wrapper');
carouselWrapper.addEventListener('mouseover', function(){
    // Pause the sliding animation
    clearInterval(deleteInterval); 
});
// Resume the sliding animation
carouselWrapper.addEventListener('mouseout', ImgAutoSlide);

// This method is used to update the active dot indicator according to the image index 
function dotIndicators(){
    for(let i = 0; i < dots.length; i++){
        // Remove the active class according to the carousel index
        dots[i].className = dots[i].className.replace(' active', '');
    }
    // Attach the active class according to the carousel index
    dots[counter].className += ' active';
}

// This method is used to switch carousel once the dot is clicked
function changeImages(currentImage){
    currentImage.classList.add('active'); // Add the active class to the clicked dot indicator
    let imageAttr = currentImage.getAttribute('my-attr'); // Fetch the index of the clicked dot indicator
    if(imageAttr > counter){
        // Add animation to hide the current carousel
        imgSlides[counter].style.animation = 'nextOne 0.5s ease-in forwards';
        counter = imageAttr;
        // Add animation to display the upcoming carousel
        imgSlides[counter].style.animation = 'nextTwo 0.5s ease-in forwards';
    } else if(imageAttr == counter){
        // Perform nothing if the clicked dot corresponds to the current carousel
        return;
    } else {
        // Add animation to hide the current carousel
        imgSlides[counter].style.animation = 'prevOne 0.5s ease-in forwards';
        counter = imageAttr;
        // Add animation to display the previous carousel
        imgSlides[counter].style.animation = 'prevTwo 0.5s ease-in forwards';
    }
    // Init and update the dot indicator
    dotIndicators(); 
}