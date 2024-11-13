// const image = document.querySelector('.Foto');

//         image.addEventListener('mouseover', () => {
//             image.src = 'Assets/Acer/Acer2.jpg'; // Change to the second image on hover
//         });

//         image.addEventListener('mouseout', () => {
//             image.src = 'Assets/Acer/Acer Nitro 15.png'; // Change back to the original image when not hovering
//         });

// navbar
const navbar = document.querySelector(".header .navbar");
window.addEventListener("scroll", function () {
  // cek scrol posisi
  if (this.window.scrollY > 100) {
    navbar.classList.add("scrol");
  } else {
    navbar.classList.remove("scrol");
  }
});
