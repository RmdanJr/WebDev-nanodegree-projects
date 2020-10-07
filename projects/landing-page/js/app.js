/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const navm = document.getElementById("navbar__list");
const section = document.querySelectorAll("section");
const secs = document.getElementsByTagName("section");
const nav_list = document.querySelector("ul");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
let inViewport = function (elemnt) {
  let bounding = elemnt.getBoundingClientRect();
  return (
    bounding.top <= 50 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function buildNav() {
  for (let item of secs) {
    let li = document.createElement("li");
    li.className = "menu__item";
    li.innerHTML = `<a href="#${item.id}" class="menu__link">${item.dataset.nav}</a>`;
    navm.appendChild(li);
  }
}

// Add class 'active' to section when near top of viewport

function isActive() {
  for (let item of secs) {
    window.addEventListener("scroll", function (e) {
      e.preventDefault();
      if (inViewport(item)) {
        item.classList.add("your-active-class");
      } else {
        item.classList.remove("your-active-class");
      }
    });
    {
      once: true;
    }
  }
}

// this helper function is used to check if "section" is in the viewport
// Scroll to anchor ID using scrollTO event
function scrollToSection() {
  //Select links
  let navLinks = document.querySelectorAll("a");

  //Loop over links
  navLinks.forEach(function (navLink) {
    //Add listener on each link
    navLink.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNav();

// Scroll to section on link click
scrollToSection();

// Set sections as active
isActive();
