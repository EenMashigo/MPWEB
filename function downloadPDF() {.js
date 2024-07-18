// scripts.js

function downloadPDF() {
    window.location.href = 'path/to/house-of-media-times.pdf';
}

function downloadEPUB() {
    window.location.href = 'path/to/house-of-media-times.epub';
}

function setCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString(undefined, options);
    dateElement.textContent = currentDate;
}

document.addEventListener('DOMContentLoaded', setCurrentDate);