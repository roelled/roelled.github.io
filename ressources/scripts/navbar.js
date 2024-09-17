//=====================================//
//==   Scroll Observer for Navbar    ==//
//=====================================//

// Declartion of global variables
const desktopNav = document.getElementById("desktop-nav");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavItems = document.getElementById("nav-mobile-items");
const backUpButton = document.getElementById("back-up");
const h1 = document.querySelector("h1");
const desktopNavHeight = desktopNav.getBoundingClientRect().height;

// Function which changes add / removes classes accroding to position
function updateNavColor(entries) {
  
  const [entry] = entries;

  if (!entry.isIntersecting) {
    // Desktop Navigationbar additions
    desktopNav.classList.add("nav-colored");
    desktopNav.classList.remove("nav-transparent");
    // Back Up Button additions
    backUpButton.classList.add("back-up-visible");
    backUpButton.classList.remove("back-up-invisible");
    // Mobile Navigationbar additions
    mobileNav.classList.add("nav-colored");
    mobileNav.classList.remove("nav-transparent");
    // Mobile Navigationbar Items additions
    mobileNavItems.classList.add("nav-colored");
    mobileNavItems.classList.remove("nav-transparent");
  } 
  else {
    // Desktop Navigationbar additions
    desktopNav.classList.add("nav-transparent");
    desktopNav.classList.remove("nav-colored");
    // Back Up Button additions
    backUpButton.classList.add("back-up-invisible");
    backUpButton.classList.remove("back-up-visible");
    // Mobile Navigationbar additions
    mobileNav.classList.add("nav-transparent");
    mobileNav.classList.remove("nav-colored");
    // Mobile Navigationbar Items additions
    mobileNavItems.classList.add("nav-transparent");
    mobileNavItems.classList.remove("nav-colored");
  }
  
}

// New IntersectionObserver which calls updateNavColor
const headerObserver = new IntersectionObserver(updateNavColor, {
  root: null,
  threshold: 0,
  rootMargin: `-${desktopNavHeight}px`
});

// Initiates Observer on the first h1 tag in the HTML code
headerObserver.observe(h1)


//=====================================//
//==  Burger Menu for Mobile Navbar  ==//
//=====================================//

const burgerMenuButton = document.getElementById("fold-menu-button");
const navigationItems = document.getElementById("nav-mobile-items");

burgerMenuButton.addEventListener("click", function() {

  if (navigationItems.style.display === "none"){
    navigationItems.style.display = "block";
  }
  else{
    navigationItems.style.display = "none";
  }

});