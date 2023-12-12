// WELCOME TEXT FADE
window.addEventListener("load", function() {
    var element = document.querySelector(".fade-in-object");
    element.style.opacity = 1;
  });
  // SUMMARY TEXT FADE
window.addEventListener("load", function() {
    var element = document.querySelector(".longFadeIn");
    element.style.opacity = 1;
  });

// ACTIVE TABS
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').
  forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
  });

  
