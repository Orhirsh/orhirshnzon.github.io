const hemBtn = document.querySelector('.hem-menu');
const foldedMenu = document.querySelector('.folded-menu');

let isMenuVisible = false; // Variable to track menu visibility

hemBtn.addEventListener('click', function () {
    // Toggle the display and play the animation
    if (!isMenuVisible) {
        foldedMenu.style.display = 'block';
        foldedMenu.style.animationDirection = 'normal'; // Play the animation forward (fade in)
        isMenuVisible = true; // Update menu visibility state
    } else {
        foldedMenu.style.animationDirection = 'reverse';
        foldedMenu.style.display = 'none'

        isMenuVisible = false; // Update menu visibility state
    }
});