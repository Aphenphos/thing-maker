
const topText = document.getElementById('top-text');
const topTextDisplay = document.getElementById('top-text-display');

const bottomText = document.getElementById('bottom-text');
const bottomTextDisplay = document.getElementById('bottom-text-display');

const imageSelector = document.getElementById('image-selector');
const selectedImage = document.getElementById('selected-image');

const backgroundSelector = document.getElementById('background-selector');
const selectedBackground = document.getElementById('selected-background');

const themeSelector = document.getElementById('theme-selector');
const selectedTheme = document.getElementById('selected-theme');

topText.addEventListener('input', () => {
    topTextDisplay.textContent = topText.value;
});

bottomText.addEventListener('input', () => {
    bottomTextDisplay.textContent = bottomText.value;
});

imageSelector.addEventListener('change', () => {
    const src = 'assets/' + imageSelector.value;
    selectedImage.src = src;
});

backgroundSelector.addEventListener('input', () => {
    const src = 'assets/' + backgroundSelector.value;
    selectedBackground.src = src;
});

themeSelector.addEventListener('input', () => {
    const src = 'assets/' + themeSelector.value + '.gif';
    selectedTheme.src = src;
    selectedTheme.classList.add(themeSelector.value);
    console.log(themeSelector.value);
});

const display = document.getElementById('display');
const exportButton = document.getElementById('export-button');

exportButton.addEventListener('click', async() => {

    const dataUrl = await domtoimage.toPng(display);
    const link = document.createElement('a');
    link.download = topText.value + '.png';
    link.href = dataUrl;
    link.click();
});
