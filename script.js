
// var buttonHelper = document.getElementById("helper-open");
// var divHelper = document.getElementById("helper");
var buttonPrev = document.getElementById("prev");
var buttonNext = document.getElementById("next");

var slides = Array.from(document.getElementsByClassName("slide"));
console.log(slides);
var slideIndex = 0;

// var funcOpenHelper = function(){
//   buttonHelper.classList.remove("on-top");
//   divHelper.classList.add("on-top");
// }

var funcPrev = function(){
  if (slideIndex > 0){
    slides[slideIndex].classList.remove("slide-visible");
    slideIndex = slideIndex - 1;
    funcPauseAllAudio();
  }
}
var funcNext = function(){
  if (slideIndex < slides.length - 1){
    slideIndex = slideIndex + 1;
    slides[slideIndex].classList.add("slide-visible");
    funcPauseAllAudio();
  }
}
var funcKeyDown = function(event){
  console.log(event);
  if (event.code == 'ArrowLeft'){
    funcPrev();
  }
  if (event.code == 'ArrowRight'){
    funcNext();
  }
}

var funcPauseAllAudio = function(){
  var audioElms = Array.from(document.getElementsByTagName('audio'));
  audioElms.forEach(function (ae){
    ae.pause();
  });
}



// buttonHelper.addEventListener('click', funcOpenHelper);
if (buttonPrev != null){
  buttonPrev.addEventListener('click', funcPrev);
}
if (buttonNext != null){
  buttonNext.addEventListener('click', funcNext);
}
document.addEventListener('keydown', funcKeyDown);
console.log("hello world")
