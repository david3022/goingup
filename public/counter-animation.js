// public/js/counter-animation.js
document.addEventListener('DOMContentLoaded', () => {
    const animateCounter = (elementId, target, prefix = '', suffix = '', duration = 2000) => {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            element.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
        }, 16);
    };

    animateCounter('revenue-counter', 58420, '$');
    animateCounter('conversion-counter', 3.7, '', '%');
    animateCounter('satisfaction-counter', 94, '', '%');
    animateCounter('traffic-counter', 125430);
    animateCounter('aov-counter', 87, '$');
    animateCounter('repeat-counter', 4235);
    animateCounter('abandonment-counter', 62, '', '%');
});