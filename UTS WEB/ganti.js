const image = document.querySelector('.Foto');

image.addEventListener('mouseover', () => {
    image.src = 'Assets/Acer/Acer2.jpg'; // Ganti gambar ke 2
});

image.addEventListener('mouseout', () => {
    image.src = 'Assets/Acer/Acer Nitro 15.png'; // Ganti gambar ke 1
});