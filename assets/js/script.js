// assets/js/script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Fungsionalitas Navigasi Mobile (Minimal) ---
    const menuToggleBtn = document.querySelector('.menu-toggle-btn');
    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('menu-open');
        });
    }

    // --- UTILITY: Menghitung Rekor dan Divisi Aktif ---
    // Fungsi untuk menghitung rekor W/L dan W/L per Tier
    function calculateDebaterStats(debaterName) {
        let totalW = 0;
        let totalL = 0;
        let tiers = {};
        
        // Inisialisasi tier dari data peringkat
        Object.keys(RANKINGS_DATA).forEach(tier => {
            tiers[tier] = { W: 0, L: 0 };
        });

        MATCH_RECORDS.forEach(match => {
            const isWinner = match.winner === debaterName;
            const isLoser = match.winner !== debaterName && (match.debaterA === debaterName || match.debaterB === debaterName);

            if (isWinner) {
                totalW++;
                if (match.tier) tiers[match.tier].W++;
            } else if (isLoser) {
                totalL++;
                if (match.tier) tiers[match.tier].L++;
            }
        });

        return {
            record: `${totalW}-${totalL}-0`, // W-L-D (asumsi tidak ada Draw)
            tiers: tiers,
            totalMatches: totalW + totalL
        };
    }
    
    // Gabungkan data dasar ALL_DEBATERS dengan statistik
    const DEBATERS_WITH_STATS = ALL_DEBATERS.map(debater => {
        const stats = calculateDebaterStats(debater.name);
        return {
            ...debater,
            ...stats,
            // Tentukan Tier Utama debater (Tier dengan ranking tertinggi atau Tier dengan match terbanyak)
            primaryTier: Object.keys(RANKINGS_DATA).find(tier => 
                RANKINGS_DATA[tier].ranked.some(r => r.name === debater.name) || 
                (stats.tiers[tier].W + stats.tiers[tier].L > 0)
            ) || 'Unranked'
        };
    }).filter(d => d.totalMatches > 0 || d.status === 'Aktif'); // Hanya tampilkan yang aktif atau sudah bertanding

    // Isi DEBATER_MAP untuk pencarian cepat
    DEBATERS_WITH_STATS.forEach(d => {
        DEBATER_MAP[d.name] = d;
    });

    // --- FUNGSI HALAMAN DEBATERS (debaters.html) ---
    const debaterGrid = document.querySelector('.athlete-grid');
    const searchInput = document.getElementById('debater-search');
    const divisionFilter = document.getElementById('division-filter');
    const statusFilter = document.getElementById('status-filter');
    
    if (debaterGrid) {
        // Update opsi filter divisi agar sesuai Tier
        const tierOptions = Object.keys(RANKINGS_DATA).map(tier => `<option value="${tier}">${tier}</option>`).join('');
        divisionFilter.innerHTML = `<option value="Semua Divisi">Semua Divisi</option>` + tierOptions;

        function renderDebaters(data) {
            debaterGrid.innerHTML = ''; 
            if (data.length === 0) {
                 debaterGrid.innerHTML = '<p class="ranking-intro" style="grid-column: 1 / -1;">Tidak ada debater yang cocok dengan kriteria filter.</p>';
                 return;
            }
            
            data.forEach(debater => {
                const card = document.createElement('a');
                // Asumsi: Kita akan menautkan ke halaman detail profil
                card.href = `debater_profile_detail.html?name=${encodeURIComponent(debater.name)}`; 
                card.className = 'athlete-card';

                const statusClass = debater.status === 'Aktif' ? 'active' : 'inactive';
                const tierDisplay = debater.primaryTier !== 'Unranked' ? debater.primaryTier : 'New Comer';

                card.innerHTML = `
                    <div class="card-image-wrapper">
                        <img src="${debater.img}" alt="${debater.name}" class="athlete-img" onerror="this.onerror=null;this.src='assets/img/placeholder.jpg';">
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
                // Cek apakah debater terdaftar di Tier ranking atau memiliki pertandingan di Tier tersebut
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
    
    if (rankingContainer && tabButtonsContainer) {
        
        function renderRankings() {
            // Bersihkan dan render ulang Tombol Tab
            tabButtonsContainer.innerHTML = '';
            rankingContainer.innerHTML = '';
            
            let isFirst = true;

            Object.keys(RANKINGS_DATA).forEach(tierKey => {
                const data = RANKINGS_DATA[tierKey];
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

                // Render Champion Card
                const championName = data.champion.name;
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
                    const debater = DEBATER_MAP[item.name] || { record: '0-0-0', primaryTier: 'Unranked' };
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
            
            // Tambahkan event listener untuk tombol tab setelah semua di-render
            document.querySelectorAll('.tab-button').forEach(button => {
                button.addEventListener('click', (e) => {
                    // Hapus 'active' dari semua tombol dan wadah
                    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
                    document.querySelectorAll('.ranking-division').forEach(div => div.classList.remove('active'));

                    // Aktifkan tombol dan wadah yang dipilih
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
