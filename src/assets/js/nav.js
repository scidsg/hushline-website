// This function needs to be outside the DOMContentLoaded block to be accessible globally
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove "active" class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and set it as active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', function() {

    // Handle mobile navigation toggle
    const mobileNavButton = document.querySelector('.mobileNav');
    const navMenu = document.querySelector('header nav ul');

    mobileNavButton.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Isolate dropdown setup in its own function for better error handling
    function setupDropdown() {
        const dropdownToggle = document.querySelector('.dropdown .dropbtn');
        if (!dropdownToggle) return; // Exit if no dropdown toggle found

        const dropdownContent = document.querySelector('.dropdown-content');
        const dropdownIcon = document.querySelector('.dropdown-icon');

        // Ensure all elements needed for the dropdown are present
        if (dropdownContent && dropdownIcon) {
            dropdownToggle.addEventListener('click', function(event) {
                event.preventDefault();
                dropdownContent.classList.toggle('show');
                dropdownContent.style.animation = dropdownContent.classList.contains('show') ? 'fadeInSlideDown 0.3s ease forwards' : 'fadeOutSlideUp 0.3s ease forwards';
                dropdownIcon.classList.toggle('rotate-icon');
            });

            window.addEventListener('click', function(event) {
                if (!dropdownToggle.contains(event.target) && dropdownContent.classList.contains('show')) {
                    dropdownContent.classList.remove('show');
                    dropdownIcon.classList.remove('rotate-icon');
                }
            });
        }
    }

    // Execute dropdown setup
    setupDropdown();

    // Default to showing the first tab on page load
    document.querySelector('.tablinks').click();
});