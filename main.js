document.addEventListener("DOMContentLoaded", function () {
    const homeBtn = document.querySelectorAll("header nav ul li")[0];
    const AgentBtn = document.querySelectorAll("header nav ul li")[1];

    homeBtn.onclick = function () {
      window.location.href = "index.html";
    }

    AgentBtn.onclick = function () {
      goToAgents();
    }

    function goToAgents () {
      window.location.href = "agent.html";
    }

    window.addEventListener("scroll", function () {
      const scrollHeight = window.scrollY; // Amount scrolled vertically
      document.querySelector('.top-header').classList.toggle('scrolled', scrollHeight > 10);        
  });


    const featuredItems = document.querySelectorAll('.featured-content .featured .featured-item');

    Array.from(featuredItems).forEach(item => {
        const moreBtn = item.querySelectorAll('.agent-contact button')[1];
        const closeDetail = item.querySelectorAll('.land-price .close-price-Details button')[1];

        moreBtn.onclick = function () {
          const closestFeauredItem = moreBtn.closest('.featured-item');
          const LandPriceDiv = closestFeauredItem.querySelector(".land-price");
      
          LandPriceDiv.style.display = "flex";
        }

        closeDetail.onclick = function () {
          const closestFeauredItem = moreBtn.closest('.featured-item');
          const LandPriceDiv = closestFeauredItem.querySelector(".land-price");
      
          LandPriceDiv.style.display = "none";
        }
    });

});