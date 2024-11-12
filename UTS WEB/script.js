const image = document.querySelector('.Foto');

        image.addEventListener('mouseover', () => {
            image.src = 'Assets/Acer/Acer2.jpg'; // Change to the second image on hover
        });

        image.addEventListener('mouseout', () => {
            image.src = 'Assets/Acer/Acer Nitro 15.png'; // Change back to the original image when not hovering
        });