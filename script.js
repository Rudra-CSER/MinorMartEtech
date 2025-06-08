const slides = document.querySelectorAll('#carousel-item li')
const slideCount = images.length;
let counter = 0;

setInterval((e) => {
    // e.preventDefault()
    slides[counter].classList.remove('active');
    counter = (counter+1 ) % slideCount;
    // if(counter === slideCount){
    //     counter = 0 ;
    // }
 slides[counter].classList.add('active')
},2000)