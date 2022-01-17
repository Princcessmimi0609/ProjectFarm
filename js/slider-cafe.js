var responsiveSlider = function() {

var slider = document.getElementById("slider-cafe");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementById("slideWrap-cafe");
var count = 1;
var items = slideList.querySelectorAll("li").length;
var prev = document.getElementById("prev-cafe");
var next = document.getElementById("next-cafe");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});


var nextSlide = function() {
  if(count < items) {
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  else if(count = items) {
    slideList.style.left = "0px";
    count = 1;
  }
};



var prevSlide = function() {
  if(count > 1) {
    count = count - 2;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  else if(count = 1) {
    count = items - 1;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
};


next.addEventListener("click", function() {
  nextSlide();
});


prev.addEventListener("click", function() {
  prevSlide();
});

setInterval(function() {
  nextSlide()
}, 10000);

};

window.onload = function() {
responsiveSlider();  
}