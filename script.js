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

// Create floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '♥';
    heart.style.position = 'absolute';
    heart.style.color = 'rgba(139, 0, 0, 0.2)';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.animation = `floatUp ${Math.random() * 10 + 15}s ease-in-out`;
    heart.style.pointerEvents = 'none';
    
    document.querySelector('.floating-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 25000);
}

// Create aged paper effect
function addAgedEffect() {
    const container = document.querySelector('.newspaper-container');
    const randomStain = Math.random();
    
    if (randomStain < 0.3) {
        const stain = document.createElement('div');
        stain.className = 'random-stain';
        stain.style.position = 'absolute';
        stain.style.width = Math.random() * 100 + 50 + 'px';
        stain.style.height = Math.random() * 100 + 50 + 'px';
        stain.style.background = `radial-gradient(ellipse at center, 
            rgba(139, 69, 19, ${Math.random() * 0.1 + 0.05}) 0%, 
            transparent 70%)`;
        stain.style.borderRadius = '50%';
        stain.style.left = Math.random() * 80 + 10 + '%';
        stain.style.top = Math.random() * 80 + 10 + '%';
        stain.style.filter = `blur(${Math.random() * 10 + 5}px)`;
        stain.style.pointerEvents = 'none';
        
        container.appendChild(stain);
    }
}

// Update counter when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCounter();
    
    // Update counter every day at midnight
    setInterval(updateCounter, 1000 * 60 * 60 * 24);
    
    // Create floating hearts periodically
    setInterval(createFloatingHeart, 3000);
    
    // Add initial aged effects
    addAgedEffect();
    
    // Ensure video plays on mobile devices
    const video = document.querySelector('video');
    if (video) {
        video.play().catch(function(error) {
            console.log('Auto-play was prevented:', error);
        });
    }
    
    // Add typewriter effect to main headline
    const headline = document.querySelector('.main-headline');
    if (headline) {
        const text = headline.textContent;
        headline.textContent = '';
        let index = 0;
        
        function typeWriter() {
            if (index < text.length) {
                headline.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
});

// Add CSS animation for floating hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.5;
        }
        90% {
            opacity: 0.5;
        }
        100% {
            transform: translateY(-100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);