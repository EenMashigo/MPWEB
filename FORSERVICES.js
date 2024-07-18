function toggleShadow(element) {
    const boxes = document.querySelectorAll('.service-box');
    boxes.forEach(box => box.style.boxShadow = '0 0 10px yellow');
    element.style.boxShadow = '0 0 10px skyblue';
}