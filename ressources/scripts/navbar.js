//=====================================
//==   Scroll Observer for Navbar    ==
//=====================================

// Declartion of global variables
const nav = document.getElementById("desktop-nav");
const header = document.querySelector("header");
const navHeight = nav.getBoundingClientRect().height;

// Function which changes add / removes classes accroding to position
function updateNavColor(entries) {
  
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
  } 
  else {
    nav.classList.add("nav-transparent");
    nav.classList.remove("nav-colored");
  }
  
}

// New IntersectionObserver which calls updateNavColor
const headerObserver = new IntersectionObserver(updateNavColor, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});

// Initiates Observer on header tag in the HTML code
headerObserver.observe(header)