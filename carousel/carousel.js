// LIST OF THE REQUIRED ATTRIBUTES
// Implementing jQuery
let imgSlides = document.querySelectorAll('.carousel-slides .carousel');
let nextButton = document.querySelector('.nextBtn');
let prevButton = document.querySelector('.prevBtn');
let dots = document.querySelectorAll('.dot');

// Init the counter
let counter = 0;

nextButton.addEventListener('click', moveNext);
function moveNext(){
    imgSlides[counter].style.animation = 'nextOne 0.5s ease-in forwards';
    if(counter >= imgSlides.length - 1){
        counter = 0;
    } else {
        counter++;
    }
    imgSlides[counter].style.animation = 'nextTwo 0.5s ease-in forwards';
    dotIndicators();
}

prevButton.addEventListener('click', movePrev);
function movePrev(){
    imgSlides[counter].style.animation = 'prevOne 0.5s ease-in forwards';
    if(counter == 0){
        counter = imgSlides.length - 1;
    } else {
        counter--;
    }
    imgSlides[counter].style.animation = 'prevTwo 0.5s ease-in forwards';
    dotIndicators();
}

function ImgAutoSlide(){
    deleteInterval = setInterval(setTimer, 3000);
    function setTimer(){
        moveNext();
        dotIndicators();
    }
}
ImgAutoSlide();

const carouselWrapper = document.querySelector('.carousel-wrapper');
carouselWrapper.addEventListener('mouseover', function(){
    clearInterval(deleteInterval);
});
carouselWrapper.addEventListener('mouseout', ImgAutoSlide);

function dotIndicators(){
    for(let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

function changeImages(currentImage){
    currentImage.classList.add('active');
    let imageAttr = currentImage.getAttribute('attr');
    if(imageAttr > counter){
        imgSlides[counter].style.animation = 'nextOne 0.5s ease-in forwards';
        counter = imageAttr;
        imgSlides[counter].style.animation = 'nextTwo 0.5s ease-in forwards';
    } else if(imageAttr == counter){
        return;
    } else {
        imgSlides[counter].style.animation = 'prevOne 0.5s ease-in forwards';
        counter = imageAttr;
        imgSlides[counter].style.animation = 'prevTwo 0.5s ease-in forwards';
    }
    dotIndicators();
}