const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}


// ====== Project Overlay Click Event ====== //

const projectDiv = document.querySelectorAll(".project");
const employeeProjectOverlay = document.getElementById("employeeCardContainer");
const musicalHangmanProjectOverlay = document.getElementById("musicalHangmanCardContainer");
const closeProjectOverlay = document.querySelectorAll(".project-close");


// Employee Directory Project Card //
for (let i = 0; i < projectDiv.length; i++) {
  projectDiv[i].addEventListener('click', () => {
    employeeProjectOverlay.classList.remove("hidden");
    musicalHangmanProjectOverlay.classList.remove("hidden");
  });
};

// ===== Project Close Event Listener ====== //

for (let i = 0; i < closeProjectOverlay.length; i++) {
  closeProjectOverlay[i].addEventListener('click', () => {
    console.log("hey");
  });
};