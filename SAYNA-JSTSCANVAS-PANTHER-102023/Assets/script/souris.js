const imageContainer = document.getElementById('imageContainer');
const image = imageContainer.querySelector('img');

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX + window.scrollX;
  const mouseY = event.clientY + window.scrollY;

  imageContainer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

document.addEventListener('mouseenter', () => {
  imageContainer.style.opacity = 1;
});

document.addEventListener('mouseleave', () => {
  imageContainer.style.opacity = 0;
});