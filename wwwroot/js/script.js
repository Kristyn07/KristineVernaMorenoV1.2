// #region Navigation layout

var colElement = document.querySelector('.mode');
var justifyElement = document.querySelector('.mode .d-flex');

function detectMobile() {
    return window.innerWidth <= 768; // Considered mobile for screens <= 768px
}
function updateNavOnMobile() {
    if (colElement) {
        colElement.classList.remove('col-2'); // Remove col-2 on mobile
    }
    if (justifyElement) {
        justifyElement.classList.remove('justify-content-end'); // Remove the right-aligned class
        justifyElement.classList.add('justify-content-center'); // Center the content
    }
}

function updateNavOnLargerScreen() {
    if (colElement) {
        colElement.classList.add('col-2'); // Re-add col-2 on larger screens
    }
    if (justifyElement) {
        justifyElement.classList.add('justify-content-end'); // Align to the right for larger screens
        justifyElement.classList.remove('justify-content-center'); // Remove center alignment
    }
}
function updateLayoutBasedOnScreenSize() {
    if (detectMobile()) {
        updateNavOnMobile(); 
    } else {
        updateNavOnLargerScreen(); 
    }
}

window.onload = updateLayoutBasedOnScreenSize;
window.onresize = updateLayoutBasedOnScreenSize;
// #endregion