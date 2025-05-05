/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"), // Get the navigation menu
  navToggle = document.getElementById("nav-toggle"), // Get the menu open button (hamburger icon)
  navClose = document.getElementById("nav-close"); // Get the menu close button (X icon)

/* Menu show */
// If the toggle button exists
if (navToggle) {
  // When clicked, add the 'show-menu' class to display the nav menu
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
// If the close button exists
if (navClose) {
  // When clicked, remove the 'show-menu' class to hide the nav menu
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link"); // Select all nav links

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu"); // Re-select nav menu inside the function
  // When any nav link is clicked, remove the 'show-menu' class (closes mobile menu)
  navMenu.classList.remove("show-menu");
};
// Add click event listener to each nav link
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header"); // Select the header element
  // If the page is scrolled down 50px or more, add 'scroll-header' class to add a shadow
  // Otherwise, remove it
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
// Add the scroll event listener to the window
window.addEventListener("scroll", scrollHeader);

/*=============== GSAP ANIMATION ===============*/
// Animate the first image to move down from -100px over 2 seconds
gsap.from(".h-img-1", { duration: 2, y: -100 });

// Create a GSAP timeline for h-img-2 animation sequence
let tl1 = gsap.timeline();
tl1
  .from(".h-img-2", {
    duration: 1,
    x: -400, // Move from far left
    y: -50, // Slightly move down
    rotation: 32, // Start with rotated angle
    scale: 0.5, // Start smaller
  })
  .to(".h-img-2", {
    duration: 1,
    rotation: 15, // Rotate a bit less
    scale: 1.2, // Scale up
  })
  .to(".h-img-2", {
    duration: 1,
    rotation: 0, // Return to normal rotation
    scale: 1, // Return to original scale
  });

// Another GSAP timeline for h-img-3
let tl2 = gsap.timeline();
tl2
  .from(".h-img-3", {
    duration: 1,
    x: 50, // Move right
    y: -50, // Move up
    rotation: 30, // Rotate
  })
  .to(".h-img-3", {
    duration: 5,
    rotation: 360, // Full rotation animation
  });

// Animate h-img-4 to drop in from above and scale down
gsap.from(".h-img-4", {
  duration: 5,
  y: -100,
  scale: 1.3,
});

// Animate h-img-5 to rise from below
gsap.from(".h-img-5", {
  duration: 3,
  y: 100,
});
