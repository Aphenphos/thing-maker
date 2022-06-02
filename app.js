
const topText = document.getElementById('top-text');
const topTextDisplay = document.getElementById('top-text-display');

const bottomText = document.getElementById('bottom-text');
const bottomTextDisplay = document.getElementById('bottom-text-display');

const imageSelector = document.getElementById('image-selector');
const selectedImage = document.getElementById('selected-image');

const backgroundSelector = document.getElementById('background-selector');
const selectedBackground = document.getElementById('selected-background');

topText.addEventListener('input', () => {
    topTextDisplay.textContent = topText.value;
});

bottomText.addEventListener('input', () => {
    bottomTextDisplay.textContent = bottomText.value;
});

imageSelector.addEventListener('change', () => {
    const src = 'assets/' + imageSelector.value;
    selectedImage.src = src;
    console.log(`picture changed to ${selectedImage.src}`);
});