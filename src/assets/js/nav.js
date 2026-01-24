// This function needs to be outside the DOMContentLoaded block to be accessible globally
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].setAttribute("aria-hidden", "true");
    }

    // Remove "active" class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].setAttribute("aria-selected", "false");
        tablinks[i].setAttribute("tabindex", "-1");
    }

    // Show the current tab and set it as active
    var activePanel = document.getElementById(tabName);
    if (activePanel) {
        activePanel.style.display = "block";
        activePanel.setAttribute("aria-hidden", "false");
    }
    if (evt && evt.currentTarget) {
        evt.currentTarget.className += " active";
        evt.currentTarget.setAttribute("aria-selected", "true");
        evt.currentTarget.setAttribute("tabindex", "0");
    }
}

document.addEventListener('DOMContentLoaded', function() {

    // Handle mobile navigation toggle
    const mobileNavButton = document.querySelector('.mobileNav');
    const navMenu = document.querySelector('header nav ul');

    if (mobileNavButton && navMenu) {
        if (!navMenu.id) {
            navMenu.id = "primary-navigation";
        }
        mobileNavButton.setAttribute("aria-controls", navMenu.id);
        mobileNavButton.setAttribute("aria-expanded", "false");

        mobileNavButton.addEventListener('click', function() {
            const isOpen = navMenu.classList.toggle('show');
            mobileNavButton.setAttribute("aria-expanded", isOpen.toString());
        });
    }

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

    const tabLists = document.querySelectorAll('.tabs');
    tabLists.forEach(tabList => {
        tabList.setAttribute("role", "tablist");
        if (!tabList.hasAttribute("aria-label")) {
            tabList.setAttribute("aria-label", "Page sections");
        }
    });

    const tabLinks = document.querySelectorAll('.tablinks');
    tabLinks.forEach((tabLink, index) => {
        const tabName = tabLink.dataset.tab;
        if (!tabName) return;
        tabLink.setAttribute("role", "tab");
        tabLink.setAttribute("aria-controls", tabName);
        tabLink.setAttribute("aria-selected", "false");
        tabLink.setAttribute("tabindex", "-1");
        if (!tabLink.id) {
            tabLink.id = `tab-${tabName}`;
        }

        tabLink.addEventListener("click", event => {
            openTab(event, tabName);
        });

        tabLink.addEventListener("keydown", event => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
            event.preventDefault();
            const links = Array.from(tabLinks).filter(link => link.dataset.tab);
            const currentIndex = links.indexOf(tabLink);
            let nextIndex = currentIndex;

            if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % links.length;
            if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + links.length) % links.length;
            if (event.key === "Home") nextIndex = 0;
            if (event.key === "End") nextIndex = links.length - 1;

            links[nextIndex].focus();
        });
    });

    const tabPanels = document.querySelectorAll('.tabcontent');
    tabPanels.forEach(panel => {
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("tabindex", "0");
        if (panel.id && !panel.hasAttribute("aria-labelledby")) {
            panel.setAttribute("aria-labelledby", `tab-${panel.id}`);
        }
        panel.setAttribute("aria-hidden", "true");
    });

    const firstTab = document.querySelector('.tablinks[data-tab]');
    if (firstTab) {
        openTab({ currentTarget: firstTab }, firstTab.dataset.tab);
    }
});
