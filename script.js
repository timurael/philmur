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

// Update counter when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCounter();
    
    // Update counter every day at midnight
    setInterval(updateCounter, 1000 * 60 * 60 * 24);
});

// Ensure video plays on mobile devices
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video');
    if (video) {
        video.play().catch(function(error) {
            console.log('Auto-play was prevented:', error);
        });
    }
});