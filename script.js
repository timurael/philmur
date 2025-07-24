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

document.addEventListener('DOMContentLoaded', function() {
    updateCounter();
    setInterval(updateCounter, 1000 * 60 * 60 * 24);
});