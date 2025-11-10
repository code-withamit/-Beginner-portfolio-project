// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.querySelector("ul").classList.toggle("active");
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Simple form submit handler
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message!");
  e.target.reset();
});
// Typing animation
const typingText = document.getElementById("typing-text");
const words = ["Amit", "a Developer", "a Designer", "a Creator"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const displayedText = currentWord.substring(0, charIndex);
  typingText.textContent = displayedText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// Smooth scroll for hero button
const heroBtn = document.querySelector(".hero-btn");
heroBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
});


