function openModal(modal){
    modal.style.display = 'block';
}
function closeModal(close){
    close.style.display = 'none';
}


mountain = document.getElementById("mountain");
temple = document.getElementById("temple");
waterfall = document.getElementById("waterfall");

// mountain
    function mountainHover(season){
        season.style.width = "100%";
        temple.style.width = "0%";
        waterfall.style.width = "0%";
    }
    function mountainOut(season){
        season.style.width = "33%";
        temple.style.width = "33%";
        waterfall.style.width = "33%";
        winter.style.width = "33%";
    }
// temple
    function templeHover(season){
        season.style.width = "100%";
        mountain.style.width = "0%";
        waterfall.style.width = "0%";
    }
    function templeOut(season){
        season.style.width = "33%";
        mountain.style.width = "33%";
        waterfall.style.width = "33%";
        winter.style.width = "33%";
    }
// waterfall
    function waterfallHover(season){
        season.style.width = "100%";
        mountain.style.width = "0%";
        temple.style.width = "0%";
    }
    function waterfallOut(season){
        season.style.width = "33%";
        mountain.style.width = "33%";
        temple.style.width = "33%";
        winter.style.width = "33%";
    }

    let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


