document.addEventListener("DOMContentLoaded", function () {
    const homeBtn =document.querySelectorAll('.left-side-footer .footer-buttons button')[0];
    const PropBtn = document.querySelectorAll('.left-side-footer .footer-buttons button')[1];
  
    homeBtn.onclick = function () {
      window.location.href = "index.html";
    }
  
    PropBtn.onclick = function () {
        window.location.href = "properties.html";
    }
    
      window.addEventListener("scroll", function () {
        const scrollHeight = window.scrollY; // Amount scrolled vertically
        document.querySelector('.top-header').classList.toggle('scrolled', scrollHeight > 10);        
    });

  });