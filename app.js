
const topText = document.getElementById('top-text');
const topTextDisplay = document.getElementById('top-text-display');

const bottomText = document.getElementById('bottom-text');
const bottomTextDisplay = document.getElementById('bottom-text-display');

const imageSelector = document.getElementById('image-selector');
const selectedImage = document.getElementById('selected-image');

const backgroundSelector = document.getElementById('background-selector');
const selectedBackground = document.getElementById('selected-background');

topText.addEventListener('input', () => {
    console.log('text changing');
    topTextDisplay.textContent = topText.value;
});

bottomText.addEventListener('input', () => {
    console.log('text changing');
    bottomTextDisplay.textContent = bottomText.value;
});