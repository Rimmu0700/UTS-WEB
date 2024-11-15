const image = document.querySelector('.Foto');

image.addEventListener('mouseover', () => {
    image.src = 'Assets/Acer/Acer2.jpg'; 
});

image.addEventListener('mouseout', () => {
    image.src = 'Assets/Acer/Acer Nitro 15.png'; 
});