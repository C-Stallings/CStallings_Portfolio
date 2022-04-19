//Show Mobile Menu//
const hamburgerButton = document.getElementById("hamburger")
const navDisplay = document.getElementById("nav-display")

function toggleButton() {
    navDisplay.classList.toggle("show")
}

hamburgerButton.addEventListener("click", toggleButton);