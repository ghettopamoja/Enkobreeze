window.addEventListener("scroll", function () {
    const scrollHeight = window.scrollY; // Amount scrolled vertically
    document.querySelector('.top-header').classList.toggle('scrolled', scrollHeight > 10);
});
