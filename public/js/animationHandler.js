///////////////////
//
// Filename: animationHandler.js
// Author: Daniel Long
// Course: ICS4U1
// Description: Handles all element loading animations
//
///////////////////

// Functions
// Plays an animation for an element
function playAnimation(elements, i) {
  
  // Offsetting the element left or right based initially on if
  // it is supposed to fade in right or left
  if (elements[i].dataset.animationType == "fade-in-left") {
 
    elements[i].style.transition = "none";
    elements[i].style.marginLeft = `calc(${elements[i].style.marginLeft || "0px"} + 10px)`;
    
  } else if (elements[i].dataset.animationType == "fade-in-right") {

    elements[i].style.transition = "none";
    elements[i].style.marginLeft = `calc(${elements[i].style.marginLeft || "0px"} - 10px)`;
  }

  // Waiting a set amount of time, then executing the relevant loading animations
  // based on the element's animation type
  setTimeout(() => {
    elements[i].style.transition = "";

    if (elements[i].dataset.animationType == "expand") {
      
      elements[i].style.width = elements[i].parentNode.style.width;
      elements[i].style.height = elements[i].parentNode.style.height;
      
    } else if (elements[i].dataset.animationType == "fade-in-left") {
      
      elements[i].style.marginLeft = `calc(${elements[i].style.marginLeft} - 10px)`;
      elements[i].style.opacity = "1";
      
    } else if (elements[i].dataset.animationType == "fade-in-right") {
      
      elements[i].style.marginLeft = `calc(${elements[i].style.marginLeft} + 10px)`;
      elements[i].style.opacity = "1";
      
    } else if (elements[i].dataset.animationType == "fade-in") {
      elements[i].style.opacity = "1";
    }
  }, elements[i].dataset.animationDelay)
}

// Plays the loading animations for all loaded content
function updateContents() {
  
  var top = window.pageYOffset || document.documentElement.scrollTop;
  let elements;

  // Checking each element of pageContentInfo
  for (var info of pageContentInfo) {

    // If the current scroll position is greater than or equal to the set
    // scroll position of that section, play all relevant loading animations
    // for all the elements that share that section's class
    if (top >= info.scrollPosition && !info.loaded) {
      info.loaded = true;

      elements = document.getElementsByClassName(info.className);

      for (var i = 0; i < elements.length; i++) {
        playAnimation(elements, i);
      }
    }
  }
}

// When the user scrolls, update the contents
window.onscroll = () => {
  updateContents();
}

// Loading initial content
updateContents();