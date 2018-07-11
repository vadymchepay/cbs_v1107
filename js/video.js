window.onload = function() {

    // Video
    var video = document.getElementById("video");

    // Buttons
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute-video");
    var fullScreenButton = document.getElementById("full-screen");

    // Sliders
    var seekBar = document.getElementById("seek-bar");

    video.addEventListener("click", function() {
        video.pause();
        playButton.style.visibility = "visible";
    });

    // Event listener for the play/pause button
    playButton.addEventListener("click", function() {
        console.log('run');
        if (video.paused == true) {
            video.play();
            playButton.style.visibility = "hidden";
        } else {
            video.pause();
            playButton.style.visibility = "visible";
        }
    });

    // Event listener for the play/pause button
    muteButton.addEventListener("click", function() {
        if (video.muted == true) {
            video.muted = false;
            muteButton.innerHTML = "<img src=\"img/video/volume_on.png\">"
        } else {
            video.muted = true;
            muteButton.innerHTML = "<img src=\"img/video/volume_on.png\">"
        }
    });
    // Event listener for the seek bar
    seekBar.addEventListener("change", function() {
        // Calculate the new time
        var time = video.duration * (seekBar.value / 100);

        // Update the video time
        video.currentTime = time;
    });
    // Update the seek bar as the video plays
    video.addEventListener("timeupdate", function() {
        // Calculate the slider value
        var value = (100 / video.duration) * video.currentTime;

        // Update the slider value
        seekBar.value = value;
        seekBar.style.background = "-webkit-gradient(linear, left top, right top, color-stop("+value+"%, #d3164e), color-stop("+value+"%, #d7d7d7))";
        seekBar.style.background = "-moz-linear-gradient(left center, #d3164e 0%, #d3164e"+value+"%, #d7d7d7"+value+"%, #d7d7d7 100%)";
    });
    // Pause the video when the slider handle is being dragged
    seekBar.addEventListener("mousedown", function() {
        video.pause();
    });

    // Play the video when the slider handle is dropped
    seekBar.addEventListener("mouseup", function() {
        video.play();
    });
};