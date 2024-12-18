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

      function showLoadingDiv(state) {
        const loadingDiv = document.querySelector('.loading-page-overlay');
        
        if (state) {
            loadingDiv.style.display = 'flex'; // Show the overlay
        } else {
            // Wait for 5 seconds before hiding the overlay
            setTimeout(() => {
                loadingDiv.style.display = 'none'; // Hide the overlay after 5 seconds
            }, 5000); // 5000 milliseconds = 5 seconds
        }
    }

    showLoadingDiv(false);
  });
