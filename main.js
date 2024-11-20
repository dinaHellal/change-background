let colorBoxes = document.querySelectorAll('.color-box');
        
colorBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const color = box.style.backgroundColor;
        document.body.style.backgroundColor = color;
    });
});