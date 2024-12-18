document.addEventListener('DOMContentLoaded', function () {
    const sectionLContainer = document.querySelector('.section-for-legalities');
    const allSectionForLegalities = document.querySelectorAll('.section-for-legalities section');
    const LigalitiesLink = document.querySelectorAll('.legalities-tips .content-advice a');
    const ctaBtn = document.querySelector('.hero-section .cta-area .cta-actions button');
    const heroVids =  document.querySelectorAll('.locations ul li');
    const heroVidContainer = document.querySelector('.locations ul');
    const homeBtn = document.querySelectorAll("header nav ul li")[0];
    const AgentBtn = document.querySelectorAll("header nav ul li")[1];
    const selectContainer = document.querySelector('.search-bar .search-input');
    const selectItems = selectContainer.querySelector("select");
    const propReviewContainer = document.querySelector('.properties-preview');


    let currentIntroVideo = null;

    let isPlayingAdVideo = false;
    let isMini = false;
    let currentSectVideo = null;
    let currentHeroVid = 0;

    let currentquoteIndex = 0;


    const landQuotes = [
        "Land: the timeless companion that grows with you and for you.",
        "To be rooted is perhaps the most important and least recognized need of the human soul.",
        "The best investment on Earth is earth.",
        "Land really is the best art.",
        "Land is not merely soil; it is a fountain of energy flowing through a circuit of life.",
        "The best investment on Earth is Earth itself.",
        "Owning land is about owning a piece of history and a promise of the future.",
        "They aren’t making more land; treasure every acre you have.",
        "A plot of land is a blank canvas for dreams yet to unfold.",
        "To own land is to own a portion of the world's beauty.",
        "Land connects us to our roots and secures our future.",
        "Your land today, their legacy tomorrow.",
        "In every acre lies infinite possibilities.",
        "Every inch of land tells a story waiting to be written.",
        "Invest in land, it’s the one thing they’re not making any more of.",
        "Land is the foundation of every great dream.",
        "A piece of land is a timeless treasure that appreciates with every sunrise."
    ];
    
    const landOwnership = [
        "Freehold",          // Full ownership with no time limit
        "Leasehold",         // Ownership for a specific duration (e.g., 99 years)
        "Customary",         // Based on local customs or traditions
        "Commonhold",        // Shared ownership of communal areas
        "Co-Ownership",      // Joint or shared ownership between parties
        "Trust Ownership",   // Held by a trustee on behalf of beneficiaries
        "Government/Public", // Owned by the government for public use
        "License",           // Temporary rights to use the land
        "Condominium",       // Ownership of a unit with shared areas
        "Easement",          // Right to use another's land for specific purposes
        "Life Estate"        // Ownership limited to a person's lifetime
    ];

    const landTypes = [
        "Residential",   // Land for housing or living purposes
        "Commercial",    // Land for businesses, shops, or offices
        "Agricultural",  // Land used for farming or growing crops
        "Industrial",    // Land for factories, warehouses, etc.
        "Recreational",  // Land for parks, sports facilities, etc.
        "Mixed-Use",     // Land for a mix of residential, commercial, and sometimes industrial use
        "Vacant",        // Unused land, typically for future development
        "Forested",      // Land covered with trees, often used for timber or conservation
        "Waterfront",    // Land bordering water bodies
        "Conservation",  // Land preserved for environmental or wildlife protection
        "Farmland"       // Land specifically used for farming
    ];
    
    const landConditions = [
        "Cleared and Leveled",  // Land prepared for construction or use
        "Wooded",               // Land with trees and vegetation
        "Uncleared",            // Land that has not been cleared yet
        "Flood-Prone",          // Land prone to flooding or water damage
        "Fenced",               // Land that is enclosed by a fence
        "Sloped",               // Land with an incline or slope
        "Rocky",                // Land with rocks or uneven surfaces
        "Muddy",                // Land that is wet or boggy
        "Paved",                // Land that is covered with asphalt or concrete
        "Irrigated"             // Land with an irrigation system for water supply
    ];
    
    

    const locations = [
        {
            town: "Kerarapon",
            selectValue: "kerarapon",
            placeImage: ["img1.jpg", "img15.jpg", "img16.jpg"],
            estimatedAcres: "200 Acres",
            NearbySchools: ["Kerarapon Secondary", "Domus", "Bethel Primary", "Serare Primary"],
            NearbyChurches: ["AIC Church", "Kerarapon Catholic Parish"],
            NearbyShopingCenter: ["Umoja Center", "The Hub"],
            NearbyHospitals: ["Kerarapon Hospital", "Kiserian Hospital", "Ngong Hospital"],
            region: "Kajiado County",
            population: "12,000",
            distanceFromCityCenter: "15 km from Nairobi",
            averageLandPrice: "3 Million Ksh per Acre",
            keyFeatures: ["Quiet environment", "Scenic views", "Proximity to nature reserves"],
            majorRoadsNearby: ["Ngong Road", "Karen-Ngong Bypass"],
            transportationOptions: ["Matatus", "Motorbikes", "Taxis"],
            landUtilization: "Residential",
            securityLevel: "High",
            internetProviders: ["Safaricom Fiber", "Faiba"],
            averageClimate: "Cool and breezy",
            historicalSites: ["Ngong Hills"]
        },
        {
            town: "Ngong",
            selectValue: "ngong",
            placeImage: ["img12.jpg"],
            estimatedAcres: "500 Acres",
            NearbySchools: ["PCEA Secondary", "Ngong Township"],
            NearbyChurches: ["AIC Church", "Kerarapon Catholic Parish"],
            NearbyShopingCenter: ["Umoja Center", "The Hub"],
            NearbyHospitals: ["Karen Hospital", "St David Ngong Hospital"],
            region: "Kajiado County",
            population: "50,000",
            distanceFromCityCenter: "20 km from Nairobi",
            averageLandPrice: "2.5 Million Ksh per Acre",
            keyFeatures: ["Cool climate", "Hilly terrain", "Close to Ngong Hills"],
            majorRoadsNearby: ["Ngong Road", "Magadi Road"],
            transportationOptions: ["Matatus", "Buses", "Motorbikes"],
            landUtilization: "Mixed-use (Residential and Farming)",
            securityLevel: "Moderate",
            internetProviders: ["Safaricom Fiber", "Zuku", "Faiba"],
            averageClimate: "Cool and windy",
            historicalSites: ["Ngong Hills", "Olepolos"]
        },

        {
            town: "Kibiko",
            selectValue: "kibiko",
            placeImage: ["img17.jpg"],
            estimatedAcres: "400 Acres",
            NearbySchools: ["Kibiko Secondary", "Kibiko Primary"],
            NearbyChurches: ["AIC Church", "Kerarapon Catholic Parish"],
            NearbyShopingCenter: ["Umoja Center", "The Hub"],
            NearbyHospitals: ["Karen Hospital", "St David Ngong Hospital"],
            region: "Kajiado County",
            population: "8,000",
            distanceFromCityCenter: "25 km from Nairobi",
            averageLandPrice: "2 Million Ksh per Acre",
            keyFeatures: ["Quiet environment", "Panoramic views", "Ideal for residential development"],
            majorRoadsNearby: ["Ngong-Suswa Road"],
            transportationOptions: ["Matatus", "Motorbikes"],
            landUtilization: "Residential and light farming",
            securityLevel: "High",
            internetProviders: ["Safaricom Fiber", "Faiba"],
            averageClimate: "Cool and sunny",
            historicalSites: ["Ngong Hills Forest", "Kibiko Caves"]
        },

        {
            town: "Kimuka",
            selectValue: "kimuka",
            placeImage: ["img2.jpg"],
            estimatedAcres: "700 Acres",
            NearbySchools: ["PCEA Kimuka", "Kibiko Primary"],
            NearbyChurches: ["AIC Church", "Kerarapon Catholic Parish"],
            NearbyShopingCenter: ["Umoja Center", "The Hub"],
            NearbyHospitals: ["Karen Hospital", "St David Ngong Hospital"],
            region: "Kajiado County",
            population: "12,000",
            distanceFromCityCenter: "30 km from Nairobi",
            averageLandPrice: "1.8 Million Ksh per Acre",
            keyFeatures: ["Spacious land", "Ideal for agricultural and residential projects", "Great views of Ngong Hills"],
            majorRoadsNearby: ["Ngong-Kimuka Road", "Magadi Road"],
            transportationOptions: ["Matatus", "Motorbikes", "Private Vehicles"],
            landUtilization: "Residential, Agricultural, and Commercial",
            securityLevel: "Moderate",
            internetProviders: ["Safaricom Fiber", "Zuku", "Faiba"],
            averageClimate: "Warm and sunny",
            historicalSites: ["Ngong Hills", "Kimuka Market"]
        },
        {
            town: "Maroroi",
            selectValue: "maroroi",
            placeImage: ["img18.jpg"],
            estimatedAcres: "20 Acres",
            NearbySchools: ["Ol-Maroroi Secondary", "Maroroi Primary"],
            NearbyChurches: ["AIC Church", "Kerarapon Catholic Parish"],
            NearbyShopingCenter: ["Umoja Center", "The Hub"],
            NearbyHospitals: ["Karen Hospital", "St David Ngong Hospital"],
            region: "Kajiado County",
            population: "3,000",
            distanceFromCityCenter: "45 km from Nairobi",
            averageLandPrice: "1 Million Ksh per Acre",
            keyFeatures: ["Serene environment", "Ideal for farming or small-scale residential development", "Scenic views of the Great Rift Valley"],
            majorRoadsNearby: ["Magadi Road", "Oloolua Road"],
            transportationOptions: ["Matatus", "Buses", "Private Vehicles"],
            landUtilization: "Agricultural and Residential",
            securityLevel: "Moderate",
            internetProviders: ["Safaricom", "Zuku"],
            averageClimate: "Hot and dry",
            historicalSites: ["Ngong Hills", "Oloolua Forest"]
        },
        {
            town: "Saikeri",
            selectValue: "saikeri",
            placeImage: ["img18.jpg"],
            estimatedAcres: "800 Acres",
            NearbySchools: ["Saikeri Secondary", "Saikeri Primary"],
            NearbyChurches: ["AIC Church", "Kerarapon Catholic Parish"],
            NearbyShopingCenter: ["Umoja Center", "The Hub"],
            NearbyHospitals: ["Karen Hospital", "St David Ngong Hospital"],
            region: "Kajiado County",
            population: "7,500",
            distanceFromCityCenter: "50 km from Nairobi",
            averageLandPrice: "1.5 Million Ksh per Acre",
            keyFeatures: ["Ideal for mixed-use development", "Peaceful environment with beautiful views of the Great Rift Valley", "High agricultural potential"],
            majorRoadsNearby: ["Magadi Road", "Saikeri Road"],
            transportationOptions: ["Matatus", "Private Vehicles", "Motorbikes"],
            landUtilization: "Agricultural, Residential, and Commercial",
            securityLevel: "Moderate",
            internetProviders: ["Safaricom", "Zuku", "Faiba"],
            averageClimate: "Warm and dry",
            historicalSites: ["Saikeri Hill", "Olorgesailie Prehistoric Site"]
        },
        {
            town: "Kiserian",
            selectValue: "kiserian",
            placeImage: ["img10.jpg","img9.jpg"],
            estimatedAcres: "1000 Acres",
            NearbySchools: ["Timan Primary", "Naromoru Primary", "Gategi Secondary"],
            NearbyChurches: ["AIC Church", "St Mary Catholic Parish"],
            NearbyShopingCenter: ["Tuskys Center", "Jiji"],
            NearbyHospitals: ["Karen Hospital", "St David Ngong Hospital"],
            region: "Kajiado County",
            population: "25,000",
            distanceFromCityCenter: "25 km from Nairobi",
            averageLandPrice: "2.5 Million Ksh per Acre",
            keyFeatures: ["Great for residential and commercial developments", "Well connected with major roads", "Close proximity to Nairobi makes it ideal for commuters"],
            majorRoadsNearby: ["Nairobi-Namanga Road", "Kiserian-Matasia Road"],
            transportationOptions: ["Matatus", "Private Vehicles", "Buses"],
            landUtilization: "Residential, Agricultural, and Commercial",
            securityLevel: "High",
            internetProviders: ["Safaricom", "Zuku", "Faiba"],
            averageClimate: "Mild and temperate",
            historicalSites: ["Ngong Hills", "Kiserian Market"],
            
        }
    ];        

     const lands = [
        {
            landID: "EnkoBreezeProperties_1",
            landSize: "50 X 100",
            landImages: [],
            landLocation: "Kerarapon",
            landAssignedAgents: [],
            landPrice: "3 Million Ksh",
            landInstallment: "6 Months",
            landDiscount: "35%",
            landTitleNumber: "KTN/1234/5678",
            landDescription: "Prime residential plot with beautiful views and proximity to key amenities.",
            landType: "Residential",
            landAmenities: ["Water", "Electricity", "Proximity to schools"],
            landCoordinates: { latitude: -1.3456, longitude: 36.7890 },
            landOwnershipStatus: "Freehold",
            landAccessibility: "Tarmac road 200 meters away",
            landProximity: "5 minutes to Karen Shopping Center",
            landDocuments: ["Title Deed", "Survey Plan", "Tax Compliance Certificate"],
            landView: "Mountain view",
            landCondition: "Cleared and leveled",
            landPaymentPlanDetails: { totalInstallments: 6, installmentAmount: "500,000 Ksh", firstPayment: "1 Million Ksh" },
            landLegalIssues: "None",
            landNeighbors: "Surrounded by gated residential homes",
            landFloodRisk: "Low",
            landClimate: "Warm and dry"
        }
    ];     
   
    
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

   // Create an IntersectionObserver to observe when the heroVidContainer is in the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // The heroVidContainer is in the viewport
                console.log('heroVidContainer is in the viewport');
                // You can trigger any actions here, for example:
                currentHeroVid = (currentHeroVid + 1) % heroVids.length;
                scrollToCurrentHeroVid(currentHeroVid);
            } else {
                // The heroVidContainer is out of the viewport
                console.log('heroVidContainer is out of the viewport');
            }
        });
    }, { threshold: 0.9 });  // 90% of the element must be visible to trigger


    if (window.innerWidth >= 801) {
        setTimeout(function () {
            // Start observing the heroVidContainer if observer is defined
            if (observer) {
                observer.observe(heroVidContainer);
            } else {
                console.error("Observer is not defined.");
            }
        }, 5000);
    }
    
    
 
    // Function to scroll the container to the current hero video
    function scrollToCurrentHeroVid(index) {
        const targetVid = heroVids[index];

            heroVidContainer.scrollTo({
                left: targetVid.offsetLeft  - 300, // Scroll to the target item
                behavior: 'smooth', // Smooth scrolling
            });     
    }
    
    (function () {
        const quoteArea = document.getElementById("quoteId");
        quoteArea.textContent = landQuotes[currentquoteIndex];
        setInterval(function () {
            currentquoteIndex = (currentquoteIndex + 1) % landQuotes.length;
            quoteArea.textContent = landQuotes[currentquoteIndex];
        },10000)
    })();

    selectItems.oninput  = function () {
        displayLocalinfo(selectItems.value);
    }


    function displayLocalinfo(val) {
        const propTitle = propReviewContainer.querySelector(".title-location h2");
        const morePropBtn = propReviewContainer.querySelectorAll('.title-location .title-buttons button')[0];
        const collapseProp = propReviewContainer.querySelectorAll('.title-location .title-buttons button')[1];
        const propImage = propReviewContainer.querySelector(".property-desc .left-desc img");
        const overlayText = propReviewContainer.querySelector('.property-desc .left-desc .overlay-text');
        const moreInfoDiv = propReviewContainer.querySelector('.property-desc .center-dec');
        
        const nearbyDivs = propReviewContainer.querySelectorAll('.property-desc .right-desc .nearbies');
    
        const foundedProp = locations.find(prop => prop.selectValue === val);
    
        if (foundedProp) {
            propTitle.innerHTML = `<h2>We have estimated <span>${foundedProp.estimatedAcres}</span> Acres in <span>${foundedProp.town}</span></h2>`;
            overlayText.innerHTML = `<h3>${foundedProp.town}</h3>`;
            propImage.src = foundedProp.placeImage[0];
            const otherDetails =  [
                {text:"Region", desc:foundedProp.region },
                {text:"Estimated Population", desc:foundedProp.population}, 
                {text:"Distance", desc:foundedProp.distanceFromCityCenter},
                {text:"Avarage Land Prices", desc:foundedProp.averageLandPrice},
                {text:"Land Utilization", desc:foundedProp.landUtilization},
                {text:"Security Level", desc:foundedProp.securityLevel},
            ]
    
            const propertyDetails = [
                { name: "Schools nearby", data: foundedProp.NearbySchools, targetDiv: nearbyDivs[0] },
                { name: "Churches or Mosques nearby", data: foundedProp.NearbyChurches, targetDiv: nearbyDivs[1] },
                { name: "Shopping centers nearby", data: foundedProp.NearbyShopingCenter, targetDiv: nearbyDivs[2] },
                { name: "Hospitals and Dispensaries nearby", data: foundedProp.NearbyHospitals, targetDiv: nearbyDivs[3] },
                { name: "Key Features", data: foundedProp.keyFeatures, targetDiv: nearbyDivs[4] },
                { name: "Major roads", data: foundedProp.majorRoadsNearby, targetDiv: nearbyDivs[5] },
                { name: "Means of transport available", data: foundedProp.transportationOptions, targetDiv: nearbyDivs[6] },
                { name: "Internet Providers available", data: foundedProp.internetProviders, targetDiv: nearbyDivs[7] },
                { name: "Historical Sites", data: foundedProp.historicalSites, targetDiv: nearbyDivs[8] }
            ];
    
            // Iterate over the property details and add content if data is present
            propertyDetails.forEach(property => {
                if (property.data.length > 0) {
                    addContentOfProperty(property.targetDiv, `${property.name} in ${foundedProp.town}`, property.data);
                }
            });

            addOtherDetails(otherDetails, moreInfoDiv, foundedProp.town);
        }
    
        propReviewContainer.style.display = "flex";
        propReviewContainer.scrollIntoView({ behavior: "smooth", block: "center" });
    
        collapseProp.onclick = function () {
            propReviewContainer.style.display = "none";
            selectItems.selectedIndex = 0;
        }
    
        morePropBtn.onclick = function () {
            goToProperties();
        }
    }
    

    function addContentOfProperty (div,h2Message, facility) {
        div.querySelector('h2').textContent = "";
        div.querySelector('h2').textContent = h2Message;
        const container = div.querySelector('ul');
        createLiArr(facility, container);
    }

    function createLiArr(arr, container) {
        container.innerHTML = "";

        arr.forEach(li => {
            const newLi = document.createElement('li');
            newLi.innerHTML = `<i class="fas fa-exclamation-circle"></i><span>${li}</span>`;
            container.appendChild(newLi);
        })
    }

    function addOtherDetails(arr,container, town) {
        container.querySelector("h2").textContent = "";
        container.querySelector("ul").innerHTML = "";

        container.querySelector("h2").textContent = `Details for ${town}`;

        arr.forEach(item => {
            const newLi = document.createElement('li');

            const titleDiv = document.createElement('div');
            titleDiv.className = 'item-title';
            titleDiv.textContent = item.text;

            const descDiv = document.createElement('div');
            descDiv.className = 'item-desc';
            descDiv.textContent = item.desc;

            newLi.appendChild(titleDiv);
            newLi.appendChild(descDiv);

            container.querySelector("ul").appendChild(newLi);
        })
        
    }

    window.addEventListener("scroll", function () {
        const scrollHeight = window.scrollY; // Amount scrolled vertically
        document.querySelector('.top-header').classList.toggle('scrolled', scrollHeight > 10);        
    });

    

    homeBtn.onclick = function () {
      goToProperties();
    }

    ctaBtn.onclick = function () {
        goToProperties();
    }

    AgentBtn.onclick = function () {
        goToAgents();
    }

    function goToProperties () {
        window.location.href = "properties.html";
    }

    function goToAgents () {
        window.location.href = "agent.html";
    }
    
    document.querySelector('.left-side-footer .footer-buttons button').onclick = function () {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
        selectContainer.style.display = "none";

        setTimeout(function() {
            selectContainer.style.display = "block";
            selectContainer.classList.add("highlight");
        },1000)
    
        setTimeout(() => {
            selectContainer.classList.remove("highlight");
        }, 4000);

       selectItems.selectedIndex = 0;

        sectionLContainer.style.display = "none";
        propReviewContainer.style.display = "none";
        LigalitiesLink.forEach(a => {a.classList.remove("active")});
        stopCurrenSectVideo();
    }

    function defaultPage (state) {
        document.querySelector('.hero-section').style.display = state ? "flex" : "none" ;
        document.querySelector('.legalities-tips').style.display = state ? "flex" : "none" ;
    }

    setTimeout(function () {
        defaultPage (true);
    },4000);

    document.querySelectorAll('.locations ul li .control-icon span').forEach(span => {
        span.onclick = function () {
            const liElement = span.closest('li'); // Correctly target the `li` element
            const videoSrc = liElement.getAttribute("data-video");
            if (videoSrc) {
                displayVideo(videoSrc);
            } else {
                console.error("No video source found!");
            }
        };
    });

    
    

    function displayVideo (videoSrc) {
        const videoElement = document.querySelector('.left-content .video-container video');
        const overlayElement = document.querySelector('.introVideos-overlay');
        const videoContainer = document.querySelector('.left-content');

        videoElement.src = videoSrc;
        overlayElement.style.display = "flex";

        const vidControls = videoContainer.querySelector('.video-controls');
        const progresstruck = videoContainer.querySelector('.progess-video-truck');
        const playVidBtn = document.querySelectorAll('.video-controls .leftside-controls button')[0];
        const muteVidBtn = document.querySelectorAll('.video-controls .leftside-controls button')[1];

        const SettingVidBtn = document.querySelectorAll('.video-controls .rightside-controls button')[0];
        const fullscreenVidBtn = document.querySelectorAll('.video-controls .rightside-controls button')[1];
        const miniplayerVidBtn = document.querySelectorAll('.video-controls .rightside-controls button')[2];

        const vidProgressBar = document.querySelector('.progess-video-truck .progress-video-bar');
        const closeVidOverlay = document.querySelector('.close-video-overlay');


        currentIntroVideo = videoElement;
        currentIntroVideo.play();
        isPlayingIntroVid = true;
        playVidBtn.innerHTML = "&#10074;&#10074;"; // Pause icon

       stopCurrenSectVideo();

       

        playVidBtn.onclick = function () {
            if (videoElement.paused) {
                currentIntroVideo.play();
                isPlayingIntroVid = true;
                playVidBtn.innerHTML = "&#10074;&#10074;"; // Pause icon
            } else {
                currentIntroVideo.pause();
                isPlayingIntroVid = false;
                playVidBtn.innerHTML = "&#9654;"; // Play icon
            }
        };


        // Add other button logic as needed
        muteVidBtn.onclick = function () {
            currentIntroVideo.muted = !videoElement.muted;
            muteVidBtn.innerHTML = currentIntroVideo.muted ? "<i class='fas fa-volume-mute'></i>" : "<i class='fas fa-volume-up'></i>";
        };

        videoElement.onclick = function () {
            if(videoElement.classList.contains('mini-player')) {
                exitMiniPlayer(videoElement, progresstruck, vidControls);
                
                isMini = false;
            }

            else{
                progresstruck.style.display = "block";
                vidControls.style.display = "flex";
            }

        }

        fullscreenVidBtn.onclick = function () {
            if (videoElement.requestFullscreen) {
                currentIntroVideo.requestFullscreen();
            } else if (videoElement.webkitRequestFullscreen) { // Safari
                currentIntroVideo.webkitRequestFullscreen();
            } else if (videoElement.msRequestFullscreen) { // IE/Edge
                currentIntroVideo.msRequestFullscreen();
            }
        };

        miniplayerVidBtn.onclick = function () {
            isMini = !isMini;
            if(isMini){
                enableMiniPlayer(videoElement,videoContainer, progresstruck, vidControls);
                
            }
            else{
                exitMiniPlayer(videoElement, progresstruck, vidControls);
                progresstruck.style.display = "block";
                vidControls.style.display = "flex";
            }
            
        };


        currentIntroVideo.onended = function () {
            // Reset video playback
            currentIntroVideo.currentTime = 0;
            vidProgressBar.style.width = "0%";
            isPlayingIntroVid = false;
            playVidBtn.innerHTML = "&#9654;"; // Reset Play icon
        
            // Exit fullscreen if the video was in fullscreen mode
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(err => {
                    console.error("Failed to exit fullscreen:", err);
                });
            }

            if(videoElement.classList.contains('mini-player')) {
                exitMiniPlayer(videoElement, progresstruck, vidControls);
                
                isMini = false;
            }

            progresstruck.style.display = "block";
            vidControls.style.display = "flex";
        };
        
        currentIntroVideo.addEventListener("stalled" ,function () {
            createLoadingOverlay(videoElement);
            showLoadingOverlay(videoElement);

            if(videoElement.classList.contains('mini-player')) {
                exitMiniPlayer(videoElement, progresstruck, vidControls);
                
                isMini = false;
            }
        });

        currentIntroVideo.addEventListener("error", ()  =>{
            createLoadingOverlay(videoElement);
            showLoadingOverlay(videoElement);
        });

        currentIntroVideo.addEventListener("waiting", ()  =>{
            createLoadingOverlay(videoElement);
            showLoadingOverlay(videoElement);
        });

        currentIntroVideo.addEventListener("loadstart", ()  =>{
            createLoadingOverlay(videoElement);
            showLoadingOverlay(videoElement);
        });

        currentIntroVideo.addEventListener("seeking", ()  =>{
            createLoadingOverlay(videoElement);
            showLoadingOverlay(videoElement);
        });

        currentIntroVideo.addEventListener("durationchange", ()  =>{
            createLoadingOverlay(videoElement);
            showLoadingOverlay(videoElement);

            if(videoElement.classList.contains('mini-player')) {
                exitMiniPlayer(videoElement, progresstruck, vidControls);
                
                isMini = false;
            }
        });

        currentIntroVideo.addEventListener('progress', () => {
            // Check if enough data is buffered
            const buffered = currentIntroVideo.buffered;
            const currentTime = currentIntroVideo.currentTime;
            if (buffered.length && buffered.end(0) <= currentTime) {
                showLoadingOverlay(videoElement);
                createLoadingOverlay(videoElement);
            } else {
                hideLoadingOverlay(videoElement);
            }
        });
        

        currentIntroVideo.addEventListener('playing', () => {
            hideLoadingOverlay(videoElement);
        });

        currentIntroVideo.addEventListener('canplay', () => {
            hideLoadingOverlay(videoElement);
        });

        currentIntroVideo.addEventListener('canplaythrough', () => {
            hideLoadingOverlay(videoElement);
        });
        
        currentIntroVideo.addEventListener('loadeddata', () => {
            hideLoadingOverlay(videoElement);
        });
        currentIntroVideo.addEventListener('seeked', () => {
           hideLoadingOverlay(videoElement);
        });
        

        currentIntroVideo.ontimeupdate = function () {
            const percent = (videoElement.currentTime / currentIntroVideo.duration) * 100;
            vidProgressBar.style.width = `${percent}%`;
        }

        closeVidOverlay.onclick = function () {
            currentIntroVideo.pause();
            currentIntroVideo.currentTime = 0;
            vidProgressBar.style.width = 0;
            isPlayingIntroVid = false;
            playVidBtn.innerHTML = "&#9654;"; // Play icon
            overlayElement.style.display = "none";

            if(videoElement.classList.contains('mini-player')) {
                exitMiniPlayer(videoElement, progresstruck, vidControls);
                progresstruck.style.display = "block";
                vidControls.style.display = "flex";
                isMini = false;

            }

            progresstruck.style.display = "block";
            vidControls.style.display = "flex";

        }
    }

    // Function to enable mini player
    function enableMiniPlayer(videoElement,videoContainer, progresstruck, vidControls) {
        console.log("Entering Mini Player Mode");
    
        // Add 'mini-player' class to trigger CSS changes
        videoElement.classList.add('mini-player');
        videoContainer.classList.add('mini-player-active');
        progresstruck.style.display = "none";
        vidControls.style.display = "none";
       
    
        // Optionally, pause or play video when switching to mini player
        videoElement.play();
    }

    // Function to exit mini player mode
    function exitMiniPlayer(videoElement, progresstruck, vidControls) {
        videoElement.classList.remove('mini-player');
        videoContainer.classList.remove('mini-player-active');
        videoContainer.classList.add("default");
        progresstruck.style.display = "block";
        vidControls.style.display = "flex";
    }


    function stopCurrenSectVideo() {
        if(currentSectVideo && !currentSectVideo.paused) {
            currentSectVideo.pause();
            allSectionForLegalities.forEach(sect => {
                const playBtn = sect.querySelectorAll(".leftside-section  .cta-buttons button")[0];
                playBtn.textContent = "Play Video";
            });

            currentSectVideo.currentTime = 0;
           
            isPlayingAdVideo = false;
        }
    }

    function createLoadingOverlay(videoElement) {
        // Create overlay container
        const overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
    
        // Create spinner
        const spinner = document.createElement('div');
        spinner.className = 'spinner';
    
        // Append spinner to overlay
        overlay.appendChild(spinner);
    
        // Append overlay to the parent of the video element
        videoElement.parentElement.appendChild(overlay);
    
        return overlay; // Return the created overlay for further use
    }
    
    function showLoadingOverlay(videoElement) {
        const overlay = videoElement.parentElement.querySelector('.loading-overlay');
        if (overlay) {
            overlay.classList.add('visible');
        }
    }
    
    function hideLoadingOverlay(videoElement) {
        const overlay = videoElement.parentElement.querySelector('.loading-overlay');
        if (overlay) {
            overlay.classList.remove('visible');
        }
    }

    
    LigalitiesLink.forEach(anchor => {
        
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            // Set sectionLContainer to be visible
            sectionLContainer.style.display = "flex";

            LigalitiesLink.forEach(a => {a.classList.remove("active")});
    
            // Loop through all sections and hide them
            allSectionForLegalities.forEach(sect => {
                sect.style.display = "none"; // Hide all sections first
            });
            
            anchor.classList.add("active");

            // Find the corresponding section based on the anchor's href
            const targetSection = document.querySelector(anchor.getAttribute("href"));
            if (targetSection) {
                targetSection.style.display = "flex"; // Show the target section
                targetSection.scrollIntoView({
                    behavior:"smooth",
                    block: "center"
                })
            }

            stopCurrenSectVideo();
        });
    });

    

    allSectionForLegalities.forEach(sect => {
        const sectVideo = sect.querySelector(".leftside-section .video-preview-section video");
        const playBtn = sect.querySelectorAll(".leftside-section  .cta-buttons button")[0];
        const propBtn = sect.querySelectorAll(".leftside-section  .cta-buttons button")[1];
        const closeBtn = sect.querySelectorAll(".leftside-section  .cta-buttons button")[3];


        playBtn.onclick = function () {
            isPlayingAdVideo = !isPlayingAdVideo;
            playBtn.classList.toggle("active", isPlayingAdVideo);
            currentSectVideo = sectVideo;

            if(isPlayingAdVideo) {
                currentSectVideo.play();
                playBtn.textContent = "Pause Video";
            }
            else{
                currentSectVideo.pause();
                playBtn.textContent = "Play Video";
            }


            currentSectVideo.addEventListener("stalled" ,function () {
                createLoadingOverlay(sectVideo);
                showLoadingOverlay(currentSectVideo);
            });
        
           currentSectVideo.addEventListener("error", ()  =>{
                createLoadingOverlay(currentSectVideo);
                showLoadingOverlay(currentSectVideo);
            });
        
           currentSectVideo.addEventListener("waiting", ()  =>{
                createLoadingOverlay(currentSectVideo);
                showLoadingOverlay(currentSectVideo);
            });
        
           currentSectVideo.addEventListener("loadstart", ()  =>{
                createLoadingOverlay(currentSectVideo);
                showLoadingOverlay(currentSectVideo);
            });
        
           currentSectVideo.addEventListener("seeking", ()  =>{
                createLoadingOverlay(currentSectVideo);
                showLoadingOverlay(currentSectVideo);
            });
        
           currentSectVideo.addEventListener("durationchange", ()  =>{
                createLoadingOverlay(currentSectVideo);
                showLoadingOverlay(currentSectVideo);
            });
        
           currentSectVideo.addEventListener('playing', () => {
                hideLoadingOverlay(currentSectVideo);
                
            });
        
           currentSectVideo.addEventListener('canplay', () => {
                hideLoadingOverlay(currentSectVideo);
            });
        
           currentSectVideo.addEventListener('canplaythrough', () => {
                hideLoadingOverlay(currentSectVideo);
            });
            
           currentSectVideo.addEventListener('loadeddata', () => {
                hideLoadingOverlay(currentSectVideo);
            });

           currentSectVideo.addEventListener('seeked', () => {
               hideLoadingOverlay(currentSectVideo);
            });

            currentSectVideo.addEventListener('ended' , () => {
                currentSectVideo.pause();
                playBtn.textContent = "Play Video";
                isPlayingAdVideo = false
            })
        }

        closeBtn.onclick = function () {
            sectionLContainer.style.display = "none";
            LigalitiesLink.forEach(a => {a.classList.remove("active")});
        }

        propBtn.onclick = function () {
            stopCurrenSectVideo();
            goToProperties();
        }
    });
    

    document.querySelector('.email-input span').addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form submission
        const email = document.querySelector('#email').value;
    
        // Check if email is not empty and valid
        if (email && validateEmail(email)) {
            document.querySelector('.footer-news-letter .email-name-input h3').textContent = email;
            // Hide the input and show the thank you message
            document.querySelector('.email-input').style.display = 'none';
            document.querySelector('.footer-news-letter').style.display = "flex";
        } else {
            alert("Please enter a valid email address.");
        }
    });
    
    // Validate email format (simple regex)
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
    
    document.querySelector(".footer-news-letter .close-news-letter").onclick = function () {
        // Reset view
        document.querySelector('.footer-news-letter .email-name-input').style.display = "flex";
        document.querySelector('.footer-news-letter .thank-you-message').style.display = "none";
        document.querySelector('.footer-news-letter').style.display = "flex"; // Hide the entire container
        document.querySelector(".footer-news-letter .close-news-letter").style.display = "none"; // Show input again
    }

    document.querySelector('.footer-news-letter .email-name-input button').onclick = function () {
        document.querySelector('.footer-news-letter .email-name-input').style.display = "none";
        document.querySelector('.footer-news-letter .thank-you-message').style.display = "block";
        document.querySelector(".footer-news-letter .close-news-letter").style.display = "flex";
        document.querySelector('.footer-news-letter').style.display = "none";
        document.querySelector('.email-input').style.display = 'block';
    }
    
    
})
