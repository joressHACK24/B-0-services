const textContainer = document.querySelector('.text-container');

textContainer.addEventListener('mouseover', () => {
  textContainer.style.color = '#007bff';
});

textContainer.addEventListener('mouseout', () => {
  textContainer.style.color = '#333';
});

const imageContainer = document.querySelector('.image-container');
const imageCaption = document.querySelector('.image-caption'); // Assuming you have a caption element

imageContainer.addEventListener('mouseover', () => {
  imageCaption.style.display = 'block';
});

imageContainer.addEventListener('mouseout', () => {
  imageCaption.style.display = 'none';
});

// Or for image enlargement on hover:

imageContainer.addEventListener('mouseover', () => {
  imageContainer.style.width = '400px';
  imageContainer.style.height = '300px';
});

imageContainer.addEventListener('mouseout', () => {
  imageContainer.style.width = '300px';
  imageContainer.style.height = '200px';
});

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

const image = document.getElementById('image');
canvas.width = image.width;
canvas.height = image.height;

ctx.drawImage(image, 0, 0);

const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

const colorCounts = {};

for (let i = 0; i < imageData.data.length; i += 4) {
    const red = imageData.data[i];
    const green = imageData.data[i + 1];
    const blue = imageData.data[i + 2];
  
    const color = `rgb(${red}, ${green}, ${blue})`;
    if (colorCounts[color]) {
      colorCounts[color]++;
    } else {
      colorCounts[color] = 1;
    }
  }

  let dominantColor = null;
let maxCount = 0;

for (const color in colorCounts) {
  if (colorCounts[color] > maxCount) {
    maxCount = colorCounts[color];
    dominantColor = color;
  }
}

const highlightCanvas = document.createElement('canvas');
highlightCanvas.width = canvas.width;
highlightCanvas.height = canvas.height;

const highlightCtx = highlightCanvas.getContext('2d');
highlightCtx.fillStyle = dominantColor;
highlightCtx.fillRect(0, 0, canvas.width, canvas.height);

// Overlay the highlight canvas on top of the original image
// (You can use CSS positioning to achieve this)

/* Demo purposes only */
$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
  const rand = function(min, max) {
    return Math.random() * ( max - min ) + min;
  }
