function getHoveredClass() {
    var hoveredElements = document.querySelectorAll(':hover'),
        hoveredElement  = hoveredElements[hoveredElements.length - 1];

    if (hoveredElement.classList.contains('s-1')) {
      return "s-1";
    }else if(hoveredElement.classList.contains('s-2')){
        return "s-2";
    }else if(hoveredElement.classList.contains('s-3')){
        return "s-3";
    }else if(hoveredElement.classList.contains('s-4')){
        return "s-4";
    }else{
        hoveredElement.classList ;
    }
  }
//   this function will be returning the hovered element class name
function move() {
    var className = getHoveredClass() ;
    var child ;
    var percentageElem ;

    var percentage = 0;
    if(className == "s-1"){
        percentage = 95 ;
        child = document.getElementById("progressbar-1");
        percentageElem =document.getElementById("skillPercentage-1");
    }else if(className == "s-2"){
        percentage = 90 ;
        child = document.getElementById("progressbar-2");
        percentageElem =document.getElementById("skillPercentage-2");
    }else if(className == "s-3"){
        percentage = 50 ;
        child = document.getElementById("progressbar-3");
        percentageElem =document.getElementById("skillPercentage-3");
    }else if(className == "s-4"){
        percentage = 95 ;
        child = document.getElementById("progressbar-4");
        percentageElem =document.getElementById("skillPercentage-4");
    }else{
        // None
    }

    var width =0;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= percentage) {
          clearInterval(id);
        } else {
          width++;
          child.style.width = width  + '%';
          percentageElem.innerHTML = width * 1  + '%';
        }
      }
  }
// Check for mobile user agent
var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
if (mobile) {
    alert("Best to view in Desktop Mode!!!");
} else {
}
