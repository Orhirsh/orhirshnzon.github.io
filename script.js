document.addEventListener("DOMContentLoaded", function () {
    const foldMenu = document.querySelector(".fold-menu");
    const hemMenu = document.querySelector(".hem-menu");

    hemMenu.addEventListener("click", function () {
        // Toggle the "expanded" class to show/hide the menu
        foldMenu.classList.toggle("expanded");
    });
});