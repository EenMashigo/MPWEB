document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = document.querySelectorAll('.team-member');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    teamMembers.forEach(member => {
        observer.observe(member);
    });
});