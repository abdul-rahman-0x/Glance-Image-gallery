// --- DOM Elements ---
const slides = document.querySelectorAll(".slide");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const dotsContainer = document.getElementById("dots-container");
const navbar = document.getElementById("navbar");
const preloader = document.getElementById("preloader");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// --- 1. Preloader & Theme ---
window.addEventListener("load", () => {
    preloader.style.opacity = "0";
    setTimeout(() => (preloader.style.display = "none"), 500);
});

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeToggle.innerHTML = body.classList.contains("dark-mode")
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});

// --- 2. Mobile Navigation FIX ---
hamburger.addEventListener("click", () => {
    // 1. Open/Close the menu
    navLinks.classList.toggle("active");

    // 2. Animate the Hamburger to Cross
    hamburger.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active'); // Turn Cross back to Hamburger
    });
});
window.addEventListener("scroll", () => {
    navbar.classList.toggle("sticky", window.scrollY > 50);
});

// --- 3. Slider Logic (Works for 7 slides) ---
let slideInterval;
const auto = true;
const intervalTime = 5000;

// Create dots dynamically
slides.forEach((_, idx) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (idx === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

const changeSlide = (direction) => {
    const current = document.querySelector(".slide.current");
    const currentDot = document.querySelector(".dot.active");
    current.classList.remove("current");
    currentDot.classList.remove("active");

    let nextSlide;
    if (direction === "next") {
        nextSlide =
            current.nextElementSibling &&
            current.nextElementSibling.classList.contains("slide")
                ? current.nextElementSibling
                : slides[0];
    } else {
        nextSlide = current.previousElementSibling
            ? current.previousElementSibling
            : slides[slides.length - 1];
    }

    const nextIndex = Array.from(slides).indexOf(nextSlide);
    nextSlide.classList.add("current");
    dots[nextIndex].classList.add("active");
};

const goToSlide = (index) => {
    document.querySelector(".slide.current").classList.remove("current");
    document.querySelector(".dot.active").classList.remove("active");
    slides[index].classList.add("current");
    dots[index].classList.add("active");
    resetInterval();
};

nextButton.addEventListener("click", () => {
    changeSlide("next");
    resetInterval();
});
prevButton.addEventListener("click", () => {
    changeSlide("prev");
    resetInterval();
});

const resetInterval = () => {
    clearInterval(slideInterval);
    if (auto)
        slideInterval = setInterval(() => changeSlide("next"), intervalTime);
};
if (auto) resetInterval();

// --- 4. Gallery Load More Functionality ---
const loadMoreBtn = document.getElementById("load-more-btn");
let itemsToShow = 4; // How many to show per click

loadMoreBtn.addEventListener("click", () => {
    const hiddenItems = document.querySelectorAll(".gallery-item.hidden");

    // Show the next 4 items
    for (let i = 0; i < itemsToShow; i++) {
        if (hiddenItems[i]) {
            hiddenItems[i].classList.remove("hidden");
        }
    }

    // Hide button if no more items
    if (document.querySelectorAll(".gallery-item.hidden").length === 0) {
        loadMoreBtn.style.display = "none";
    }
});

// --- 5. Lightbox ---
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".gallery-grid").forEach((grid) => {
    grid.addEventListener("click", (e) => {
        // Event delegation to handle even new "loaded" items
        const btn = e.target.closest(".open-lightbox");
        if (btn) {
            const imgUrl = btn
                .closest(".gallery-item")
                .querySelector("img").src;
            lightboxImg.src = imgUrl;
            lightbox.classList.add("active");
        }
    });
});

document
    .querySelector(".close-lightbox")
    .addEventListener("click", () => lightbox.classList.remove("active"));
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.classList.remove("active");
});
