const targetDate = new Date();
targetDate.setMonth(targetDate.getMonth() + 2);

const updateCountdown = () => {
const now = new Date().getTime();
const diff = targetDate - now;

const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((diff % (1000 * 60)) / 1000);

document.getElementById("months").innerText = months;
document.getElementById("days").innerText = days;
document.getElementById("hours").innerText = hours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;
};

setInterval(updateCountdown, 1000);

// Synopsis box interaction
document.addEventListener('DOMContentLoaded', function() {
    const synopsisBox = document.querySelector('.synopsis-box');
    
    if (synopsisBox) {
        // Handle click/tap
        synopsisBox.addEventListener('click', function() {
            this.classList.toggle('active');
            this.setAttribute('aria-expanded', this.classList.contains('active'));
        });

        // Handle keyboard interaction
        synopsisBox.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });

        // Close on click outside
        document.addEventListener('click', function(e) {
            if (!synopsisBox.contains(e.target)) {
                synopsisBox.classList.remove('active');
                synopsisBox.setAttribute('aria-expanded', 'false');
            }
        });
    }
});



