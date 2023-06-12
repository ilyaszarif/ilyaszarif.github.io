// logo.js
document.addEventListener("DOMContentLoaded", function() {
  var logo = document.querySelector(".logo");
  var textElement = logo.querySelector(".text");
  var line = logo.querySelector(".line");
  var text = textElement.textContent;

  // Animate the logo
  var animationDelay = 200; // Adjust this value to control the animation speed
  var currentCharIndex = 0;

  function animateLogo() {
    var currentChar = text[currentCharIndex];

    if (currentChar === " ") {
      textElement.innerHTML += "&nbsp;";
    } else {
      textElement.textContent += currentChar;
    }

    currentCharIndex++;

    if (currentCharIndex < text.length) {
      setTimeout(animateLogo, animationDelay);
    } else {
      line.style.width = "100%";
      setTimeout(function() {
        line.style.width = "0";
        textElement.textContent = "";
        animateLogo();
      }, 1000);
    }
  }

  animateLogo();
});
