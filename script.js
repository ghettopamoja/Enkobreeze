document.addEventListener('DOMContentLoaded', function () {
    let isPlayingIntroVid = false;

    window.addEventListener("scroll", function () {
        const scrollHeight = window.scrollY; // Amount scrolled vertically
        document.querySelector('.top-header').classList.toggle('scrolled', scrollHeight > 10);
        document.querySelector('.top-header').scrollTo({
            top: document.querySelector('.top-header').scrollHeight,
            behavior: 'smooth'
        });
        
    });
    
    document.querySelector('.left-side-footer button').onclick = function () {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
        document.querySelector('.search-bar .search-input').style.display = "none";

        setTimeout(function() {
            document.querySelector('.search-bar .search-input').style.display = "block";
            document.querySelector('.search-bar .search-input').classList.add("highlight");
        },1000)
    
        setTimeout(() => {
            document.querySelector('.search-bar .search-input').classList.remove("highlight");
        }, 4000);

        document.querySelector('.search-input select').selectedIndex = 0;
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

        videoElement.src = videoSrc;
        overlayElement.style.display = "flex";

        const playVidBtn = document.querySelectorAll('.video-controls .leftside-controls button')[0];
        const muteVidBtn = document.querySelectorAll('.video-controls .leftside-controls button')[1];

        const SettingVidBtn = document.querySelectorAll('.video-controls .rightside-controls button')[0];
        const fullscreenVidBtn = document.querySelectorAll('.video-controls .rightside-controls button')[1];
        const miniplayerVidBtn = document.querySelectorAll('.video-controls .rightside-controls button')[2];

        const vidProgressBar = document.querySelector('.progess-video-truck .progress-video-bar');
        const closeVidOverlay = document.querySelector('.close-video-overlay');

        playVidBtn.onclick = function () {
            if (videoElement.paused) {
                videoElement.play();
                isPlayingIntroVid = true;
                playVidBtn.innerHTML = "&#10074;&#10074;"; // Pause icon
            } else {
                videoElement.pause();
                isPlayingIntroVid = false;
                playVidBtn.innerHTML = "&#9654;"; // Play icon
            }
        };


        // Add other button logic as needed
        muteVidBtn.onclick = function () {
            videoElement.muted = !videoElement.muted;
            muteVidBtn.innerHTML = videoElement.muted ? "<i class='fas fa-volume-mute'></i>" : "<i class='fas fa-volume-up'></i>";
        };

        fullscreenVidBtn.onclick = function () {
            if (videoElement.requestFullscreen) {
                videoElement.requestFullscreen();
            } else if (videoElement.webkitRequestFullscreen) { // Safari
                videoElement.webkitRequestFullscreen();
            } else if (videoElement.msRequestFullscreen) { // IE/Edge
                videoElement.msRequestFullscreen();
            }
        };

        miniplayerVidBtn.onclick = function () {
            console.log("Mini Player Mode not yet implemented!");
        };


        videoElement.onended = function () {
            // Reset video playback
            videoElement.currentTime = 0;
            vidProgressBar.style.width = "0%";
            isPlayingIntroVid = false;
            playVidBtn.innerHTML = "&#9654;"; // Reset Play icon
        
            // Exit fullscreen if the video was in fullscreen mode
            if (document.fullscreenElement) {
                document.exitFullscreen().catch(err => {
                    console.error("Failed to exit fullscreen:", err);
                });
            }
        };
        
        videoElement.addEventListener("stalled" ,function () {
            createLoadingOverlay(videoElement);
            showLoadingOverlay(videoElement);
        });

        videoElement.addEventListener("error", ()  =>{
            createLoadingOverlay(videoElement);
            showLoadingOverlay(videoElement);
        });

        videoElement.addEventListener("waiting", ()  =>{
            createLoadingOverlay(videoElement);
            showLoadingOverlay(videoElement);
        });

        videoElement.addEventListener("loadstart", ()  =>{
            createLoadingOverlay(videoElement);
            showLoadingOverlay(videoElement);
        });

        videoElement.addEventListener("seeking", ()  =>{
            createLoadingOverlay(videoElement);
            showLoadingOverlay(videoElement);
        });

        videoElement.addEventListener("durationchange", ()  =>{
            createLoadingOverlay(videoElement);
            showLoadingOverlay(videoElement);
        });

        videoElement.addEventListener('progress', () => {
            // Check if enough data is buffered
            const buffered = videoElement.buffered;
            const currentTime = videoElement.currentTime;
            if (buffered.length && buffered.end(0) <= currentTime) {
                showLoadingOverlay(videoElement);
                createLoadingOverlay(videoElement);
            } else {
                hideLoadingOverlay(videoElement);
            }
        });
        

        videoElement.addEventListener('playing', () => {
            hideLoadingOverlay(videoElement);
        });

        videoElement.addEventListener('canplay', () => {
            hideLoadingOverlay(videoElement);
        });

        videoElement.addEventListener('canplaythrough', () => {
            hideLoadingOverlay(videoElement);
        });
        
        videoElement.addEventListener('loadeddata', () => {
            hideLoadingOverlay(videoElement);
        });
        videoElement.addEventListener('seeked', () => {
           hideLoadingOverlay(videoElement);
        });
        

        videoElement.ontimeupdate = function () {
            const percent = (videoElement.currentTime / videoElement.duration) * 100;
            vidProgressBar.style.width = `${percent}%`;
        }

        closeVidOverlay.onclick = function () {
            videoElement.pause();
            videoElement.currentTime = 0;
            vidProgressBar.style.width = 0;
            isPlayingIntroVid = false;
            playVidBtn.innerHTML = "&#9654;"; // Play icon
            overlayElement.style.display = "none";
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
    
})
