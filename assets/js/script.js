// assets/js/script.js

// PENTING: Salin ulang semua fungsi dan data yang telah dimuat di data.js di sini, 
// agar variabel seperti ALL_DEBATERS, MATCH_RECORDS, HOME_DATA, dll., dapat diakses.

// --- UTILITY: Menghitung Rekor dan Divisi Aktif (SALIN DARI JAWABAN SEBELUMNYA) ---
// (Fungsi calculateDebaterStats dan pembuatan DEBATERS_WITH_STATS dan DEBATER_MAP)
const DEBATER_MAP = {}; 
let DEBATERS_WITH_STATS = [];

function calculateDebaterStats(debaterName) {
    let totalW = 0;
    let totalL = 0;
    let tiers = {};
    
    // Inisialisasi tier dari data peringkat
    const tierKeys = Object.keys(typeof RANKINGS_DATA !== 'undefined' ? RANKINGS_DATA : {});
    tierKeys.forEach(tier => {
        tiers[tier] = { W: 0, L: 0 };
    });

    if (typeof MATCH_RECORDS !== 'undefined') {
        MATCH_RECORDS.forEach(match => {
            const isWinner = match.winner && match.winner.toUpperCase() === debaterName.toUpperCase();
            const isLoser = match.winner && match.winner.toUpperCase() !== debaterName.toUpperCase() && 
                            (match.debaterA.toUpperCase() === debaterName.toUpperCase() || match.debaterB.toUpperCase() === debaterName.toUpperCase());

            if (isWinner) {
                totalW++;
                if (match.tier && tiers[match.tier]) tiers[match.tier].W++;
            } else if (isLoser) {
                totalL++;
                if (match.tier && tiers[match.tier]) tiers[match.tier].L++;
            }
        });
    }

    return {
        record: `${totalW}-${totalL}-0`, 
        tiers: tiers,
        totalMatches: totalW + totalL
    };
}

if (typeof ALL_DEBATERS !== 'undefined') {
    DEBATERS_WITH_STATS = ALL_DEBATERS.map(debater => {
        const stats = calculateDebaterStats(debater.name);
        let primaryTier = 'Unranked';
        
        // Tentukan Tier Utama (berdasarkan peringkat atau match)
        if (typeof RANKINGS_DATA !== 'undefined') {
            Object.keys(RANKINGS_DATA).forEach(tier => {
                if (RANKINGS_DATA[tier].ranked.some(r => r.name.toUpperCase() === debater.name.toUpperCase())) {
                    primaryTier = tier;
                }
            });
        }
        if (primaryTier === 'Unranked') {
             const matchedTier = Object.keys(stats.tiers).find(tier => (stats.tiers[tier].W + stats.tiers[tier].L) > 0);
             if (matchedTier) primaryTier = matchedTier;
        }

        return {
            ...debater,
            ...stats,
            primaryTier: primaryTier
        };
    });

    DEBATERS_WITH_STATS.forEach(d => {
        DEBATER_MAP[d.name.toUpperCase()] = d;
    });
}
// --- AKHIR UTILITY ---

document.addEventListener('DOMContentLoaded', () => {

    // Helper untuk gambar yang hilang
    const PLACEHOLDER_IMG = 'assets/img/placeholder.jpg';

    // --- Fungsionalitas Header & Menu Mobile ---
    const menuToggleBtn = document.querySelector('.menu-toggle-btn');
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('menu-open');
        });
    }
    
    // --- FUNGSI HALAMAN HOME (index.html) ---
    const mainStoryCard = document.querySelector('.main-story-card');
    const subStoryGrid = document.querySelector('.sub-story-grid');
    const featuredContent = document.querySelector('.featured-content');
    const latestStoriesList = document.querySelector('.latest-stories-list');
    const videoGrid = document.querySelector('.video-grid');

    if (mainStoryCard && typeof HOME_DATA !== 'undefined') {
        // 1. Render Main Story
        mainStoryCard.innerHTML = `
            <img src="${HOME_DATA.mainStory.img}" alt="${HOME_DATA.mainStory.title}" class="main-story-img" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}';">
            <div class="story-overlay">
                <span class="category-tag">${HOME_DATA.mainStory.category}</span>
                <h1><a href="${HOME_DATA.mainStory.link}">${HOME_DATA.mainStory.title}</a></h1>
                <a href="${HOME_DATA.mainStory.link}" class="read-more-btn">
                    Read More <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        // 2. Render Sub Stories
        if (subStoryGrid) {
            subStoryGrid.innerHTML = HOME_DATA.subStories.map(story => `
                <div class="sub-story-card">
                    <img src="${story.img}" alt="${story.title}" class="sub-story-img" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}';">
                    <div class="story-info">
                        <span class="category-tag">${story.category}</span>
                        <h2><a href="${story.link}">${story.title}</a></h2>
                    </div>
                </div>
            `).join('');
        }
        
        // 3. Render Featured Debater
        if (featuredContent) {
            featuredContent.innerHTML = `
                <img src="${HOME_DATA.featuredDebater.img}" alt="${HOME_DATA.featuredDebater.name}" class="featured-img" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}';">
                <div class="featured-text-box">
                    <span class="category-tag">${HOME_DATA.featuredDebater.tier}</span>
                    <h3>${HOME_DATA.featuredDebater.title}</h3>
                    <a href="${HOME_DATA.featuredDebater.link}" class="read-more-btn">
                        Lihat Profil <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `;
        }
        
        // 4. Render Latest Stories
        if (latestStoriesList && typeof STORIES_DATA !== 'undefined') {
            latestStoriesList.innerHTML = STORIES_DATA.map(story => `
                <div class="story-item">
                    <span class="story-date">${story.date}</span>
                    <span class="story-category">${story.category}</span>
                    <a href="${story.link}">${story.title}</a>
                </div>
            `).join('');
        }
        
        // 5. Render Video Highlights
        if (videoGrid && typeof VIDEO_HIGHLIGHTS !== 'undefined') {
            videoGrid.innerHTML = VIDEO_HIGHLIGHTS.map(video => `
                <div class="video-item">
                    <img src="${video.img}" alt="${video.title}" class="video-thumbnail" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}';">
                    <div class="video-info">
                        <span class="category-tag" style="background-color: var(--color-tertiary-bg); color: var(--color-secondary-text);">${video.event}</span>
                        <a href="${video.link}">${video.title}</a>
                    </div>
                </div>
            `).join('');
        }
    }


    // --- FUNGSI HALAMAN DEBATERS (debaters.html) ---
    const debaterGrid = document.querySelector('.athlete-grid');
    const searchInput = document.getElementById('debater-search');
    const divisionFilter = document.getElementById('division-filter');
    const statusFilter = document.getElementById('status-filter');
    
    if (debaterGrid) {
        
        // Update opsi filter divisi agar sesuai Tier
        if (typeof RANKINGS_DATA !== 'undefined') {
            const tierOptions = Object.keys(RANKINGS_DATA).map(tier => `<option value="${tier}">${tier}</option>`).join('');
            divisionFilter.innerHTML = `<option value="Semua Divisi">Semua Divisi</option>` + tierOptions;
        }

        function renderDebaters(data) {
            debaterGrid.innerHTML = ''; 
            if (data.length === 0) {
                 debaterGrid.innerHTML = '<p class="ranking-intro" style="grid-column: 1 / -1;">Tidak ada debater yang cocok dengan kriteria filter.</p>';
                 return;
            }
            
            data.forEach(debater => {
                const card = document.createElement('a');
                card.href = `debater_profile_detail.html?name=${encodeURIComponent(debater.name)}`; 
                card.className = 'athlete-card';

                const statusClass = debater.status.toLowerCase().includes('aktif') ? 'active' : 'inactive';
                const tierDisplay = debater.primaryTier !== 'Unranked' ? debater.primaryTier.toUpperCase() : 'NEW COMER';

                card.innerHTML = `
                    <div class="card-image-wrapper">
                        <img src="${debater.img}" alt="${debater.name}" class="athlete-img" onerror="this.onerror=null;this.src='${PLACEHOLDER_IMG}';">
                    </div>
                    <div class="athlete-info">
                        <strong class="athlete-name">${debater.name} - ${debater.country}</strong>
                        <span class="athlete-class ${statusClass}">
                            ${tierDisplay} | REKOR: ${debater.record}
                        </span>
                    </div>
                `;
                debaterGrid.appendChild(card);
            });
        }

        function filterDebaters() {
            const searchTerm = searchInput.value.toLowerCase();
            const selectedDivision = divisionFilter.value;
            const selectedStatus = statusFilter.value;

            const filteredData = DEBATERS_WITH_STATS.filter(debater => {
                const matchesSearch = debater.name.toLowerCase().includes(searchTerm);
                
                const matchesDivision = selectedDivision === "Semua Divisi" || 
                                        debater.primaryTier === selectedDivision ||
                                        (debater.tiers[selectedDivision] && (debater.tiers[selectedDivision].W + debater.tiers[selectedDivision].L) > 0);
                                        
                const matchesStatus = selectedStatus === "Semua Status" || debater.status === selectedStatus;
                
                return matchesSearch && matchesDivision && matchesStatus;
            });

            renderDebaters(filteredData);
        }

        renderDebaters(DEBATERS_WITH_STATS);
        
        searchInput.addEventListener('input', filterDebaters);
        divisionFilter.addEventListener('change', filterDebaters);
        statusFilter.addEventListener('change', filterDebaters);
    }
    
    // --- FUNGSI HALAMAN RANKINGS (rankings.html) ---
    const rankingContainer = document.getElementById('ranking-container');
    const tabButtonsContainer = document.querySelector('.weight-class-tabs');
    
    if (rankingContainer && tabButtonsContainer && typeof RANKINGS_DATA !== 'undefined') {
        
        function renderRankings() {
            tabButtonsContainer.innerHTML = '';
            rankingContainer.innerHTML = '';
            
            let isFirst = true;

            Object.keys(RANKINGS_DATA).forEach(tierKey => {
                const cleanKey = tierKey.replace(/\s/g, '').toLowerCase();
                const isActive = isFirst ? 'active' : '';

                // 1. Render Tombol Tab
                const tabButton = document.createElement('button');
                tabButton.className = `tab-button ${isActive}`;
                tabButton.setAttribute('data-division', cleanKey);
                tabButton.textContent = tierKey.toUpperCase();
                tabButtonsContainer.appendChild(tabButton);

                // 2. Render Wadah Divisi
                const divisionElement = document.createElement('div');
                divisionElement.id = cleanKey;
                divisionElement.className = `ranking-division ${isActive}`;

                const data = RANKINGS_DATA[tierKey];
                const championName = data.champion.name.toUpperCase();
                const championCountry = data.champion.country;
                const championBeltText = championName === 'VACANT' ? 'BELT KOSONG' : '<i class="fas fa-trophy"></i> RAJA DIVISI';
                const championNameDisplay = championName === 'VACANT' ? 'BELT KOSONG' : `${championName} - ${championCountry}`;

                const championHTML = `
                    <h3 class="division-title">${tierKey} Division</h3>
                    <div class="champion-card">
                        <span class="rank-label">${championName === 'VACANT' ? 'VACANT' : 'CHAMPION'}</span>
                        <strong class="champion-name">${championNameDisplay}</strong>
                        <span class="champion-belt">${championBeltText}</span>
                    </div>
                `;
                    
                // Render Ranked List
                let rankedListHTML = '<div class="ranked-list">';
                data.ranked.forEach(item => {
                    const debater = DEBATER_MAP[item.name.toUpperCase()] || { tiers: {}, primaryTier: 'Unranked' };
                    const tierRecord = debater.tiers[tierKey] ? `(${debater.tiers[tierKey].W}-${debater.tiers[tierKey].L})` : '';

                    rankedListHTML += `
                        <a href="debater_profile_detail.html?name=${encodeURIComponent(item.name)}" class="ranked-item">
                            <span class="rank-number">#${item.rank}</span>
                            <strong class="ranked-athlete">
                                ${item.name} <small class="record-tier">${tierRecord}</small>
                            </strong>
                            <span class="athlete-country">${item.country}</span>
                        </a>
                    `;
                });
                rankedListHTML += '</div>';

                divisionElement.innerHTML = championHTML + rankedListHTML;
                rankingContainer.appendChild(divisionElement);

                isFirst = false;
            });
            
            // Tambahkan event listener untuk tombol tab 
            document.querySelectorAll('.tab-button').forEach(button => {
                button.addEventListener('click', (e) => {
                    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                    document.querySelectorAll('.ranking-division').forEach(div => div.classList.remove('active'));

                    e.currentTarget.classList.add('active');
                    const targetDivId = e.currentTarget.getAttribute('data-division');
                    const targetDiv = document.getElementById(targetDivId);
                    if(targetDiv) targetDiv.classList.add('active');
                });
            });
        }
        
        renderRankings();
    }
    
});
