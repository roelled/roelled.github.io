//=====================================//
//==   Scroll Observer for Navbar    ==//
//=====================================//

// Declartion of global variables
const nav = document.getElementById("desktop-nav");
const backUpButton = document.getElementById("back-up");
const h1 = document.querySelector("h1");
const navHeight = nav.getBoundingClientRect().height;

// Function which changes add / removes classes accroding to position
function updateNavColor(entries) {
  
  const [entry] = entries;

  if (!entry.isIntersecting) {
    // Navigationbar additions
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
    // Back Up Button additions
    backUpButton.classList.add("back-up-visible");
    backUpButton.classList.remove("back-up-invisible");
  } 
  else {
    // Navigationbar additions
    nav.classList.add("nav-transparent");
    nav.classList.remove("nav-colored");
    // Back Up Button additions
    backUpButton.classList.add("back-up-invisible");
    backUpButton.classList.remove("back-up-visible");
  }
  
}

// New IntersectionObserver which calls updateNavColor
const headerObserver = new IntersectionObserver(updateNavColor, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});

// Initiates Observer on the first h1 tag in the HTML code
headerObserver.observe(h1)