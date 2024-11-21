
document.querySelector(".menu-toggle").addEventListener("click", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
});

document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 150) {
            section.classList.add("reveal");
        }
    });
});
