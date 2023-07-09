function togglemenu() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " nav--open";
    } else {
      x.className = "nav";
    }
    var element = document.getElementById("menu-toggle");
    element.classList.toggle("menu-toggle--open");
  }
  window.onload = function(){
    setTimeout(function(){
      document.getElementById("fadein").remove();
    },1000);
  };

  
  let darkModeButton = document.getElementById('dark-mode');
  
  function switchDarkMode() {
    let element = document.querySelector("body");
    let text = document.querySelector("h2");
    let header = document.querySelector(".logo a");
   let nav = document.querySelector(".nav-li");
   let second = document.querySelector(".second-nav");
   element.classList.toggle("dark-mode-js");
    header.classList.toggle("dark-mode-js");
    nav.classList.toggle("dark-mode-js");
    text.classList.toggle("dark-mode-js");
    second.classList.toggle("dark-mode-js");
  }

  function toggleText() {
    if (darkModeButton.innerHTML == "Dark Mode") {
        darkModeButton.innerHTML = "Light Mode";
    } else if (darkModeButton.innerHTML == "Light Mode") {
        darkModeButton.innerHTML = "Dark Mode";
    } else {
        null
    }
  }

  darkModeButton.addEventListener("click", toggleText);
  darkModeButton.addEventListener("click", switchDarkMode);
