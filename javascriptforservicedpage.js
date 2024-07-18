document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service');
    services.forEach(service => {
        service.style.animationDelay = ${Math.random() * 2}s;
    });
});