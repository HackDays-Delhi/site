const timer = document.getElementById("timer");

function countdown() {
    const now = new Date();
    const event = new Date("2026-07-25T09:00:00");
    const diff = event - now;

    if (diff <= 0) {
        timer.textContent = "Event Started!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    timer.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
}

setInterval(countdown, 1000);
countdown();

// Scroll reveal animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
