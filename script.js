
document.getElementById("year").textContent = new Date().getFullYear();

// Dark Mode Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀ Light mode";
    } else {
        themeBtn.textContent = "☾ Dark mode";
    }
});

// Scroll Animation
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

// Animate profile photo when page loads
window.addEventListener("load", function () {
    const photo = document.querySelector(".profile-photo");

    if (photo) {
        photo.style.opacity = "0";
        photo.style.transform = "translateY(30px)";

        setTimeout(function () {
            photo.style.transition = "all 1s ease";
            photo.style.opacity = "1";
            photo.style.transform = "translateY(0)";
        }, 300);
    }
});

document.querySelectorAll(".reveal").forEach(function (element) {
    observer.observe(element);
});
