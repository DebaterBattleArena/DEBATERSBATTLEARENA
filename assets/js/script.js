// --- Fungsionalitas Inti JavaScript ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Fungsionalitas Navigasi Mobile
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuToggleBtn && mobileNav) {
        menuToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('menu-open');
        });

        // Toggle Submenu Mobile
        document.querySelectorAll('.mobile-dropdown-toggle > a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Mencegah penutupan menu utama
                const parentLi = link.closest('.mobile-dropdown-toggle');
                const submenuId = link.getAttribute('data-submenu');
                const submenu = document.getElementById(submenuId);

                if (submenu) {
                    const isActive = parentLi.classList.toggle('active');
                    // Menggunakan inline style untuk transisi max-height
                    submenu.style.maxHeight = isActive ? `${submenu.scrollHeight}px` : '0';
                }
            });
        });
    }

    // 2. Fungsionalitas Countdown Timer (Hanya di index.html)
    const countdownEl = document.getElementById('countdown-timer');
    if (countdownEl) {
        // Target Date: 15 Desember 2025
        const targetDate = new Date("Dec 15, 2025 10:00:00").getTime();

        const updateCountdown = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            // Perhitungan waktu
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(updateCountdown);
                document.getElementById('countdown-timer').innerHTML = "EVENT LIVE NOW!";
            } else {
                document.getElementById('days').textContent = String(days).padStart(2, '0');
                document.getElementById('hours').textContent = String(hours).padStart(2, '0');
                document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
                document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
            }
        }, 1000);
    }
    
    // 3. Fungsionalitas Rendering Konten Dinamis
    if (window.location.pathname.includes('debaters.html')) {
        renderDebaterProfiles();
        setupDebaterSearchAndFilter();
    } else if (window.location.pathname.includes('rankings.html')) {
        renderRankings();
        setupRankingTabs();
    } else if (window.location.pathname.includes('events.html')) {
        renderEventsPage();
    } else if (window.location.pathname.includes('news.html')) {
        renderMediaPage();
        setupMediaFiltering();
    }
});


// =======================================================
// --- FUNGSI KHUSUS HALAMAN DEBATER DAN RANKING ---
// =======================================================

function renderDebaterProfiles() {
    const grid = document.getElementById('athlete-grid');
    if (!grid) return;

    // Filter debater yang setidaknya memiliki 1 pertarungan atau status ACTIVE
    const filteredDebaters = DEBATERS_DATA.filter(d => d.record.w > 0 || d.record.l > 0 || d.record.d > 0 || d.status === 'ACTIVE');

    filteredDebaters.forEach(debater => {
        const card = document.createElement('a');
        card.href = `#${debater.id}`; // Gunakan anchor untuk detail debater di portofolio
        card.classList.add('athlete-card');
        card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="assets/img/debater-${debater.id}.jpg" alt="${debater.name}" class="athlete-img image-error-placeholder">
            </div>
            <div class="athlete-info">
                <span class="athlete-class">${debater.division} ${debater.flag}</span>
                <span class="athlete-name">${debater.name}</span>
                <p style="margin-top: 5px; font-size: 0.9em; color: var(--color-primary-text);">
                    **W-L-D:** ${debater.record.w}-${debater.record.l}-${debater.record.d}
                </p>
                <p style="font-size: 0.75em; color: ${debater.status === 'ACTIVE' ? 'var(--color-accent-gold)' : 'var(--color-secondary-text)'};">${debater.status}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function setupDebaterSearchAndFilter() {
    const searchInput = document.querySelector('.search-bar input');
    const divisionFilter = document.getElementById('division-filter');
    const statusFilter = document.getElementById('status-filter');
    const grid = document.getElementById('athlete-grid');

    // Populate Filters
    const divisions = [...new Set(DEBATERS_DATA.map(d => d.division))].sort();
    divisions.forEach(div => {
        const option = document.createElement('option');
        option.value = div;
        option.textContent = div;
        divisionFilter.appendChild(option);
    });

    const filterDebaters = () => {
        const searchText = searchInput.value.toLowerCase();
        const selectedDivision = divisionFilter.value;
        const selectedStatus = statusFilter.value;
        grid.innerHTML = ''; // Clear current grid

        const filtered = DEBATERS_DATA.filter(debater => {
            const matchesSearch = debater.name.toLowerCase().includes(searchText);
            const matchesDivision = selectedDivision === 'all' || debater.division === selectedDivision;
            const matchesStatus = selectedStatus === 'all' || debater.status === selectedStatus;
            
            return matchesSearch && matchesDivision && matchesStatus;
        });

        filtered.forEach(debater => {
            const card = document.createElement('a');
            card.href = `#${debater.id}`;
            card.classList.add('athlete-card');
            card.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="assets/img/debater-${debater.id}.jpg" alt="${debater.name}" class="athlete-img image-error-placeholder">
                </div>
                <div class="athlete-info">
                    <span class="athlete-class">${debater.division} ${debater.flag}</span>
                    <span class="athlete-name">${debater.name}</span>
                    <p style="margin-top: 5px; font-size: 0.9em; color: var(--color-primary-text);">
                        **W-L-D:** ${debater.record.w}-${debater.record.l}-${debater.record.d}
                    </p>
                    <p style="font-size: 0.75em; color: ${debater.status === 'ACTIVE' ? 'var(--color-accent-gold)' : 'var(--color-secondary-text)'};">${debater.status}</p>
                </div>
            `;
            grid.appendChild(card);
        });

        if (filtered.length === 0) {
            grid.innerHTML = '<p class="container" style="text-align:center; color: var(--color-secondary-text); padding: 40px 0;">Tidak ada debater yang cocok dengan kriteria Anda.</p>';
        }
    };

    searchInput.addEventListener('input', filterDebaters);
    divisionFilter.addEventListener('change', filterDebaters);
    statusFilter.addEventListener('change', filterDebaters);

    // Initial render is already done by renderDebaterProfiles on page load.
    // We only need to populate filters and set up the handler if controls are present.
}


function renderRankings() {
    const rankingSections = document.getElementById('ranking-sections');
    if (!rankingSections) return;

    // Loop melalui setiap divisi
    Object.keys(RANKINGS_DATA).forEach(divisionName => {
        const data = RANKINGS_DATA[divisionName];
        const isActive = divisionName === 'High Tier' ? 'active' : '';

        const divisionEl = document.createElement('div');
        divisionEl.classList.add('ranking-division', isActive);
        divisionEl.setAttribute('data-division', divisionName.replace(/\s/g, '-').toLowerCase());
        
        // Champion Card
        const championCard = `
            <div class="champion-card">
                <div class="rank-label">RAJA DIVISI</div>
                <div class="champion-name">${data.king.name} ${data.king.flag}</div>
                <div class="champion-belt"><i class="fas fa-trophy" style="margin-right: 5px;"></i> CHAMPION</div>
            </div>
        `;

        // Ranked List
        const rankedListItems = data.ranked.map(item => `
            <div class="ranked-item">
                <div class="rank-number">${item.rank}</div>
                <a href="debaters.html#${item.name.toLowerCase().replace(/\s/g, '-')}" class="ranked-athlete">${item.name}</a>
                <div class="athlete-country">${item.country} ${item.flag}</div>
            </div>
        `).join('');

        const rankedList = `<div class="ranked-list">${rankedListItems}</div>`;

        divisionEl.innerHTML = `<h3 class="division-title">${divisionName}</h3>${championCard}${rankedList}`;
        rankingSections.appendChild(divisionEl);
        
        // Tambahkan tombol tab
        const tabButton = document.createElement('button');
        tabButton.classList.add('tab-button');
        tabButton.setAttribute('data-target', divisionName.replace(/\s/g, '-').toLowerCase());
        tabButton.textContent = divisionName.toUpperCase();
        if (divisionName === 'High Tier') tabButton.classList.add('active');
        document.querySelector('.weight-class-tabs').appendChild(tabButton);
    });
}

function setupRankingTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const rankingDivisions = document.querySelectorAll('.ranking-division');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            // Hapus kelas 'active' dari semua tombol dan divisi
            tabButtons.forEach(btn => btn.classList.remove('active'));
            rankingDivisions.forEach(div => div.classList.remove('active'));

            // Tambahkan kelas 'active' ke tombol yang diklik
            button.classList.add('active');

            // Tampilkan divisi yang sesuai
            const targetDivision = document.querySelector(`.ranking-division[data-division="${targetId}"]`);
            if (targetDivision) {
                targetDivision.classList.add('active');
            }
        });
    });
}
