// Get references to the image and audio elements
const musicControl = document.getElementById('music-control');
const backgroundMusic = document.getElementById('background-music');

// Add a click event listener to the image
musicControl.addEventListener('click', function () {
    if (backgroundMusic.paused) {
        // If the audio is paused, play it
        backgroundMusic.play();
    } else {
        // If the audio is playing, pause it
        backgroundMusic.pause();
    }
});
