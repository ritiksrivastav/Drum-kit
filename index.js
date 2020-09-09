for(var i=0;i<document.querySelectorAll(".drum").length;++i){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
      var drumClick = this.innerHTML;
      buttonAnimation(drumClick);
      switch (drumClick) {
          case "w":
              var sTom1 = new Audio('sounds/tom-1.mp3');
              sTom1.play();              
              break;
          case "a":
              var sTom2 = new Audio('sounds/tom-2.mp3');
              sTom2.play();              
              break;
          case "s":
              var sTom3 = new Audio('sounds/tom-3.mp3');
              sTom3.play();              
              break;
          case "d":
              var sTom4 = new Audio('sounds/tom-4.mp3');
              sTom4.play();              
              break;            
          case "j":
              var sSnare = new Audio('sounds/snare.mp3');
              sSnare.play();              
              break;
          case "k":
              var sKick = new Audio('sounds/kick-bass.mp3');
              sKick.play();              
              break;
          case "l":
              var sCrash = new Audio('sounds/crash.mp3');
              sCrash.play();              
              break;
          default:
              break;
      }
    }
    );
}
/* **********************************************KEYBOARD PRESS******************************************* */
document.addEventListener("keydown",function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
    }
);
function makeSound(key){
    switch (key) {
        case "w":
            var sTom1 = new Audio('sounds/tom-1.mp3');
            sTom1.play();              
            break;
        case "a":
            var sTom2 = new Audio('sounds/tom-2.mp3');
            sTom2.play();              
            break;
        case "s":
            var sTom3 = new Audio('sounds/tom-3.mp3');
            sTom3.play();              
            break;
        case "d":
            var sTom4 = new Audio('sounds/tom-4.mp3');
            sTom4.play();              
            break;            
        case "j":
            var sSnare = new Audio('sounds/snare.mp3');
            sSnare.play();              
            break;
        case "k":
            var sKick = new Audio('sounds/kick-bass.mp3');
            sKick.play();              
            break;
        case "l":
            var sCrash = new Audio('sounds/crash.mp3');
            sCrash.play();              
            break;
        default:
            break;
    }
}
function buttonAnimation(currentKey){
   var activeButton = document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}