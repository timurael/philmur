function calculateDaysTogether() {
    const startDate = new Date('2022-07-24');
    const currentDate = new Date();
    
    const timeDifference = currentDate - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    return daysDifference;
}

function updateCounter() {
    const daysElement = document.getElementById('days-counter');
    const days = calculateDaysTogether();
    
    daysElement.textContent = days.toLocaleString();
}

// YouTube Player
let player;
let isPlaying = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'QMP-o8WXSPM',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'loop': 1,
            'playlist': 'QMP-o8WXSPM'
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    const musicToggle = document.getElementById('music-toggle');
    const musicIcon = musicToggle.querySelector('.music-icon');
    
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            player.pauseVideo();
            musicToggle.classList.remove('playing');
            musicIcon.textContent = '♪';
            isPlaying = false;
        } else {
            player.playVideo();
            musicToggle.classList.add('playing');
            musicIcon.textContent = '♫';
            isPlaying = true;
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        player.playVideo();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateCounter();
    setInterval(updateCounter, 1000 * 60 * 60 * 24);
});