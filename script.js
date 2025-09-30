document.addEventListener('DOMContentLoaded', function () {
    // --- Fungsionalitas Menu Mobile ---
    const menuToggleBtn = document.querySelector('.menu-toggle-btn');
    const body = document.body;

    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', () => {
            body.classList.toggle('menu-open');
        });
    }

    // --- Fungsionalitas Submenu Dropdown Mobile ---
    const dropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle > a');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            const parentLi = toggle.parentElement;
            const submenu = parentLi.querySelector('.mobile-submenu');

            parentLi.classList.toggle('active');

            if (submenu.style.maxHeight) {
                submenu.style.maxHeight = null;
            } else {
                submenu.style.maxHeight = submenu.scrollHeight + "px";
            }
        });
    });

    // --- Fungsionalitas Tab (Halaman Peringkat & Acara) ---
    function setupTabs(tabContainerSelector, contentContainerSelector) {
        const tabContainer = document.querySelector(tabContainerSelector);
        if (!tabContainer) return;

        const tabs = tabContainer.querySelectorAll('.tab-button, .event-tab-btn');
        const contents = document.querySelectorAll(contentContainerSelector);

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Nonaktifkan semua tab dan konten terlebih dahulu
                tabs.forEach(item => item.classList.remove('active'));
                contents.forEach(content => content.classList.remove('active'));

                // Aktifkan tab yang diklik dan konten yang sesuai
                tab.classList.add('active');
                const targetId = tab.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // Inisialisasi tab untuk halaman Peringkat
    setupTabs('.weight-class-tabs', '.ranking-division');
    // Inisialisasi tab untuk halaman Acara
    setupTabs('.events-tab-navigation', '.events-list-section');
});
