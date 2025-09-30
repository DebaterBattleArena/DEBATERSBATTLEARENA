// --- MOCK DATA UNTUK DBA DEBATER BATTLE ARENA ---

// Data lengkap debater (menggabungkan profil dan rekor)
const DEBATERS_DATA = [
    // INDONESIA
    { id: 'hiroo', name: 'Hiroo', country: 'Indonesia', flag: '🇮🇩', status: 'ACTIVE', division: 'Mid Tier', record: { w: 1, l: 1, d: 0 }, fights: [
        { event: 'DBA 1', opponent: 'Renji', result: 'WIN', tier: 'Mid Tier' },
        { event: 'DBA Special Match', opponent: 'Ranzt', result: 'LOSS', tier: 'Mid Tier (Raja Divisi)' },
    ]},
    { id: 'ranzt', name: 'Ranzt', country: 'Indonesia', flag: '🇮🇩', status: 'ACTIVE', division: 'Mid Tier', record: { w: 2, l: 0, d: 0 }, fights: [
        { event: 'DBA 1', opponent: 'Ryuu', result: 'WIN', tier: 'Mid Tier' },
        { event: 'DBA Special Match', opponent: 'Hiroo', result: 'WIN', tier: 'Mid Tier (Raja Divisi)' },
    ], isDivisionKing: true },
    { id: 'zogratis', name: 'Zogratis', country: 'Indonesia', flag: '🇮🇩', status: 'ACTIVE', division: 'High Tier', record: { w: 1, l: 1, d: 0 }, fights: [
        { event: 'DBA 1', opponent: 'Muchibei', result: 'WIN', tier: 'High Tier' },
        { event: 'DBA 2', opponent: 'Adyy', result: 'LOSS', tier: 'High Tier (Co Main Event)' },
    ]},
    { id: 'pratama', name: 'Pratama', country: 'Indonesia', flag: '🇮🇩', status: 'ACTIVE', division: 'Mid Tier', record: { w: 0, l: 1, d: 0 }, fights: [
        { event: 'DBA 2', opponent: 'Aheng', result: 'LOSS', tier: 'High Tier' },
    ]},
    { id: 'aheng', name: 'Aheng', country: 'Indonesia', flag: '🇮🇩', status: 'ACTIVE', division: 'High Tier', record: { w: 2, l: 0, d: 0 }, fights: [
        { event: 'DBA 2', opponent: 'Pratama', result: 'WIN', tier: 'High Tier' },
        { event: 'DBA Special Match', opponent: 'Adyy', result: 'WIN', tier: 'High Tier (Co Main Event)' },
    ]},
    { id: 'aryanwt', name: 'Aryanwt', country: 'Indonesia', flag: '🇮🇩', status: 'ACTIVE', division: 'Low Tier', record: { w: 1, l: 1, d: 0 }, fights: [
        { event: 'DBA 1', opponent: 'Rim', result: 'WIN', tier: 'Low Tier' },
        { event: 'DBA 2', opponent: 'Aaron', result: 'LOSS', tier: 'High Tier (Main Event)' }, // Berjuang di High Tier
    ]},
    { id: 'thinzel', name: 'Thinzel', country: 'Indonesia', flag: '🇮🇩', status: 'INACTIVE', division: 'Low Tier', record: { w: 1, l: 0, d: 0 }, fights: [
        { event: 'DBA 1', opponent: 'Shade', result: 'WIN', tier: 'Low Tier' },
    ]},
    { id: 'lianx', name: 'Lianx', country: 'Indonesia', flag: '🇮🇩', status: 'ACTIVE', division: 'High Tier', record: { w: 1, l: 0, d: 0 }, fights: [
        { event: 'DBA 1', opponent: 'Adyy', result: 'WIN', tier: 'High Tier' },
    ], isDivisionKing: true },
    { id: 'valen', name: 'Valen', country: 'Indonesia', flag: '🇮🇩', status: 'ACTIVE', division: 'High Tier', record: { w: 0, l: 0, d: 0 }, fights: []},
    { id: 'kureji', name: 'Kureji', country: 'Indonesia', flag: '🇮🇩', status: 'ACTIVE', division: 'Mid Tier', record: { w: 0, l: 0, d: 0 }, fights: []},
    { id: 'kariz', name: 'Kariz', country: 'Indonesia', flag: '🇮🇩', status: 'ACTIVE', division: 'High Tier', record: { w: 1, l: 0, d: 0 }, fights: [
        { event: 'DBA Special Match', opponent: 'Iulian', result: 'WIN', tier: 'High Tier' },
    ]},
    { id: 'sann', name: 'Sann', country: 'Indonesia', flag: '🇮🇩', status: 'ACTIVE', division: 'Mid Tier', record: { w: 0, l: 0, d: 0 }, fights: []},
    { id: 'yulz', name: 'Yulz', country: 'Indonesia', flag: '🇮🇩', status: 'ACTIVE', division: 'Mid Tier', record: { w: 1, l: 0, d: 0 }, fights: [
        { event: 'DBA Special Match', opponent: 'Kazz', result: 'WIN', tier: 'Mid Tier' },
    ]},
    { id: 'nanzz', name: 'Nanzz', country: 'Indonesia', flag: '🇮🇩', status: 'ACTIVE', division: 'Low Tier', record: { w: 0, l: 0, d: 0 }, fights: []},

    // MALAYSIA
    { id: 'adyy', name: 'Adyy', country: 'Malaysia', flag: '🇲🇾', status: 'ACTIVE', division: 'High Tier', record: { w: 1, l: 2, d: 0 }, fights: [
        { event: 'DBA 1', opponent: 'Lianx', result: 'LOSS', tier: 'High Tier' },
        { event: 'DBA 2', opponent: 'Zogratis', result: 'WIN', tier: 'High Tier (Co Main Event)' },
        { event: 'DBA Special Match', opponent: 'Aheng', result: 'LOSS', tier: 'High Tier (Co Main Event)' },
    ]},
    { id: 'ryuu', name: 'Ryuu', country: 'Malaysia', flag: '🇲🇾', status: 'ACTIVE', division: 'High Tier', record: { w: 1, l: 1, d: 0 }, fights: [
        { event: 'DBA 1', opponent: 'Ranzt', result: 'LOSS', tier: 'Mid Tier' }, // Berjuang di Mid Tier
        { event: 'DBA 2', opponent: 'Raju', result: 'WIN', tier: 'High Tier' },
    ]},
    { id: 'muchibei', name: 'Muchibei', country: 'Malaysia', flag: '🇲🇾', status: 'INACTIVE', division: 'High Tier', record: { w: 0, l: 1, d: 0 }, fights: [
        { event: 'DBA 1', opponent: 'Zogratis', result: 'LOSS', tier: 'High Tier' },
    ]},
    { id: 'renji', name: 'Renji', country: 'Malaysia', flag: '🇲🇾', status: 'INACTIVE', division: 'Mid Tier', record: { w: 0, l: 1, d: 0 }, fights: [
        { event: 'DBA 1', opponent: 'Hiroo', result: 'LOSS', tier: 'Mid Tier' },
    ]},
    { id: 'rim', name: 'Rim', country: 'Malaysia', flag: '🇲🇾', status: 'INACTIVE', division: 'Low Tier', record: { w: 0, l: 1, d: 0 }, fights: [
        { event: 'DBA 1', opponent: 'Aryanwt', result: 'LOSS', tier: 'Low Tier' },
    ]},
    { id: 'shade', name: 'Shade', country: 'Malaysia', flag: '🇲🇾', status: 'ACTIVE', division: 'Low Tier', record: { w: 0, l: 2, d: 0 }, fights: [
        { event: 'DBA 1', opponent: 'Thinzel', result: 'LOSS', tier: 'Low Tier' },
        { event: 'DBA 2', opponent: 'Kyuki', result: 'LOSS', tier: 'High Tier' }, // Berjuang di High Tier
    ]},
    { id: 'kyuki', name: 'Kyuki', country: 'Malaysia', flag: '🇲🇾', status: 'ACTIVE', division: 'High Tier', record: { w: 1, l: 0, d: 0 }, fights: [
        { event: 'DBA 2', opponent: 'Shade', result: 'WIN', tier: 'High Tier' },
    ]},
    { id: 'yuwey', name: 'Yuwey', country: 'Malaysia', flag: '🇲🇾', status: 'ACTIVE', division: 'Mid Tier', record: { w: 0, l: 0, d: 0 }, fights: []},

    // VIETNAM
    { id: 'luceris', name: 'Luceris', country: 'Vietnam', flag: '🇻🇳', status: 'ACTIVE', division: 'Low Tier', record: { w: 0, l: 0, d: 0 }, fights: []},

    // LAOS
    { id: 'thong', name: 'Thong', country: 'Laos', flag: '', status: 'ACTIVE', division: 'Low Tier', record: { w: 0, l: 0, d: 0 }, fights: []},

    // PHILIPPINES
    { id: 'kaz', name: 'Kaz', country: 'Philippines', flag: '🇵🇭', status: 'ACTIVE', division: 'Mid Tier', record: { w: 0, l: 1, d: 0 }, fights: [
        { event: 'DBA Special Match', opponent: 'Yulz', result: 'LOSS', tier: 'Mid Tier' },
    ]},

    // MEXICO
    { id: 'aaron', name: 'Aaron', country: 'Mexico', flag: '🇲🇽', status: 'ACTIVE', division: 'High Tier', record: { w: 2, l: 0, d: 0 }, fights: [
        { event: 'DBA 2', opponent: 'Aryanwt', result: 'WIN', tier: 'High Tier (Main Event)' },
        { event: 'DBA Special Match', opponent: 'Hyruki', result: 'WIN', tier: 'High Tier (Main Event)' },
    ]},

    // BRAZIL
    { id: 'xavier', name: 'Xavier', country: 'Brazil', flag: '🇧🇷', status: 'ACTIVE', division: 'Low Tier', record: { w: 0, l: 0, d: 0 }, fights: []},
    { id: 'mikael', name: 'Mikael', country: 'Brazil', flag: '🇧🇷', status: 'ACTIVE', division: 'Low Tier', record: { w: 0, l: 0, d: 0 }, fights: []},

    // CANADA
    { id: 'rabbitt', name: 'Rabbitt', country: 'Canada', flag: '🇨🇦', status: 'INACTIVE', division: 'Low Tier', record: { w: 0, l: 0, d: 0 }, fights: []},

    // ITALY
    { id: 'hyruki', name: 'Hyruki', country: 'Italy', flag: '🇮🇹', status: 'ACTIVE', division: 'High Tier', record: { w: 0, l: 1, d: 0 }, fights: [
        { event: 'DBA Special Match', opponent: 'Aaron', result: 'LOSS', tier: 'High Tier (Main Event)' },
    ]},

    // FRANCE
    { id: 'larnex', name: 'Larnex', country: 'France', flag: '🇫🇷', status: 'ACTIVE', division: 'Low Tier', record: { w: 0, l: 0, d: 0 }, fights: []},

    // ROMANIA
    { id: 'iulian', name: 'Iulian', country: 'Romania', flag: '🇷🇴', status: 'ACTIVE', division: 'High Tier', record: { w: 0, l: 1, d: 0 }, fights: [
        { event: 'DBA Special Match', opponent: 'Kariz', result: 'LOSS', tier: 'High Tier' },
    ]},

    // RUSSIA
    { id: 'homura', name: 'Homura Kin', country: 'Russia', flag: '🇷🇺', status: 'INACTIVE', division: 'Low Tier', record: { w: 0, l: 0, d: 0 }, fights: []},

    // DATA TAMBAHAN DARI REKOR YANG TIDAK ADA DI LIST DEBATER ASLI
    { id: 'raju', name: 'Raju', country: 'Malaysia', flag: '🇲🇾', status: 'INACTIVE', division: 'High Tier', record: { w: 0, l: 1, d: 0 }, fights: [
        { event: 'DBA 2', opponent: 'Ryuu', result: 'LOSS', tier: 'High Tier' },
    ]},
];

// Data Peringkat (Diambil dari spesifikasi)
const RANKINGS_DATA = {
    'High Tier': {
        king: { name: 'Lianx', country: 'Indonesia', flag: '🇮🇩' },
        ranked: [
            { rank: 1, name: 'Aaron', country: 'Mexico', flag: '🇲🇽' },
            { rank: 2, name: 'Aheng', country: 'Indonesia', flag: '🇮🇩' },
            { rank: 3, name: 'Kariz', country: 'Indonesia', flag: '🇮🇩' },
            { rank: 4, name: 'Zogratis', country: 'Indonesia', flag: '🇮🇩' },
            { rank: 5, name: 'Ryuu', country: 'Malaysia', flag: '🇲🇾' },
            { rank: 6, name: 'Shade', country: 'Malaysia', flag: '🇲🇾' },
            { rank: 7, name: 'Adyy', country: 'Malaysia', flag: '🇲🇾' },
            { rank: 8, name: 'Aryanwt', country: 'Indonesia', flag: '🇮🇩' },
            { rank: 9, name: 'Kyuki', country: 'Malaysia', flag: '🇲🇾' },
            { rank: 10, name: 'Muchibei', country: 'Malaysia', flag: '🇲🇾' },
            { rank: 11, name: 'Raju', country: 'Malaysia', flag: '🇲🇾' },
        ]
    },
    'Mid Tier': {
        king: { name: 'Ranzt', country: 'Indonesia', flag: '🇮🇩' },
        ranked: [
            { rank: 1, name: 'Yulz', country: 'Indonesia', flag: '🇮🇩' },
            { rank: 2, name: 'Hiroo', country: 'Indonesia', flag: '🇮🇩' },
            { rank: 3, name: 'Kaz', country: 'Philippines', flag: '🇵🇭' },
            { rank: 4, name: 'Renji', country: 'Malaysia', flag: '🇲🇾' },
        ]
    },
    'Low Tier': {
        king: { name: 'VACANT', country: 'DBA', flag: '⭐' },
        ranked: [
            { rank: 1, name: 'Aryanwt', country: 'Indonesia', flag: '🇮🇩' },
            { rank: 2, name: 'Thinzel', country: 'Indonesia', flag: '🇮🇩' },
            { rank: 3, name: 'Rim', country: 'Malaysia', flag: '🇲🇾' },
            { rank: 4, name: 'Shade', country: 'Malaysia', flag: '🇲🇾' },
        ]
    }
};

// Data Acara
const EVENTS_DATA = [
    {
        id: 'dba3',
        title: 'DBA 3: The King\'s Challenge',
        date: 'Desember 15, 2025',
        location: 'Online Broadcast, Asia',
        status: 'UPCOMING',
        type: 'PAY-PER-DEBATE',
        description: 'Puncak dari musim debat fiksi, DBA 3 menampilkan pertarungan perebutan gelar dan penantang baru di semua divisi.',
        banner: 'assets/img/event-dba3-banner.jpg',
        fights: [
            { type: 'SUPER MAIN EVENT', fighter1: 'Lianx', fighter2: 'Ranzt', tier: 'Mid Tier Title' },
            { type: 'MAIN EVENT', fighter1: 'Nanzz', fighter2: 'TBA', tier: 'Low Tier Title' },
            { type: 'CO-MAIN EVENT', fighter1: 'Aryanwt', fighter2: 'Kyuki', tier: 'High Tier' },
            { type: 'FEATURED BOUT', fighter1: 'Kariz', fighter2: 'Adyy', tier: 'High Tier' },
            { type: 'PRELIM', fighter1: 'Sann', fighter2: 'TBA', tier: 'Mid Tier' },
            { type: 'PRELIM', fighter1: 'Yulz', fighter2: 'Yuwey', tier: 'Mid Tier' },
            { type: 'PRELIM', fighter1: 'Valen', fighter2: 'Shade', tier: 'High Tier' },
        ],
        highlights: []
    },
    {
        id: 'dbaspecial',
        title: 'DBA Special Match: International Clash',
        date: 'September 20, 2025',
        location: 'Online Broadcast, Global',
        status: 'PAST',
        type: 'HIGHLIGHTS',
        description: 'Ajang pertarungan spesial yang mempertemukan debater dari berbagai benua, menampilkan dominasi Amerika dan kebangkitan Asia.',
        banner: 'assets/img/event-dbaspecial-banner.jpg',
        fights: [
            { type: 'MAIN EVENT', fighter1: 'Aaron', fighter2: 'Hyruki', tier: 'High Tier' },
            { type: 'CO-MAIN EVENT', fighter1: 'Adyy', fighter2: 'Aheng', tier: 'High Tier' },
            { type: 'FEATURED BOUT', fighter1: 'Ranzt', fighter2: 'Hiroo', tier: 'Mid Tier Title' },
            { type: 'PRELIM', fighter1: 'Iulian', fighter2: 'Kariz', tier: 'High Tier' },
            { type: 'PRELIM', fighter1: 'Yulz', fighter2: 'Kaz', tier: 'Mid Tier' },
        ],
        highlights: [
            { title: 'Full Bout: Aaron vs Hyruki', link: '#', thumbnail: 'assets/img/video-thumb-1.jpg' },
            { title: 'Co-Main: Adyy vs Aheng', link: '#', thumbnail: 'assets/img/video-thumb-2.jpg' }
        ]
    },
    {
        id: 'dba2',
        title: 'DBA 2: Rise of the Newcomers',
        date: 'Juli 1, 2025',
        location: 'Online Broadcast, Asia',
        status: 'PAST',
        type: 'HIGHLIGHTS',
        description: 'Event kedua yang penuh kejutan, menampilkan beberapa debater baru yang menunjukkan potensi luar biasa mereka.',
        banner: 'assets/img/event-dba2-banner.jpg',
        fights: [
            { type: 'MAIN EVENT', fighter1: 'Aaron', fighter2: 'Aryanwt', tier: 'High Tier' },
            { type: 'CO-MAIN EVENT', fighter1: 'Adyy', fighter2: 'Zogratis', tier: 'High Tier' },
            { type: 'FEATURED BOUT', fighter1: 'Aheng', fighter2: 'Pratama', tier: 'High Tier' },
            { type: 'PRELIM', fighter1: 'Kyuki', fighter2: 'Shade', tier: 'High Tier' },
            { type: 'PRELIM', fighter1: 'Ryuu', fighter2: 'Raju', tier: 'High Tier' },
        ],
        highlights: [
            { title: 'Main Event: Aaron vs Aryanwt', link: '#', thumbnail: 'assets/img/video-thumb-1.jpg' },
            { title: 'Aheng vs Pratama Highlight', link: '#', thumbnail: 'assets/img/video-thumb-2.jpg' }
        ]
    },
    {
        id: 'dba1',
        title: 'DBA 1: Asia Clash',
        date: 'Mei 1, 2025',
        location: 'Online Broadcast, Indonesia',
        status: 'PAST',
        type: 'HIGHLIGHTS',
        description: 'Event perdana DBA yang mempertemukan debater terbaik dari Indonesia dan Malaysia.',
        banner: 'assets/img/event-dba1-banner.jpg',
        fights: [
            { type: 'FEATURED BOUT', fighter1: 'Lianx', fighter2: 'Adyy', tier: 'High Tier' },
            { type: 'FEATURED BOUT', fighter1: 'Ranzt', fighter2: 'Ryuu', tier: 'Mid Tier' },
            { type: 'PRELIM', fighter1: 'Thinzel', fighter2: 'Shade', tier: 'Low Tier' },
            { type: 'PRELIM', fighter1: 'Aryanwt', fighter2: 'Rim', tier: 'Low Tier' },
            { type: 'PRELIM', fighter1: 'Zogratis', fighter2: 'Muchibei', tier: 'High Tier' },
            { type: 'PRELIM', fighter1: 'Hiroo', fighter2: 'Renji', tier: 'Mid Tier' },
        ],
        highlights: [
            { title: 'Zogratis vs Muchibei Full Fight', link: '#', thumbnail: 'assets/img/video-thumb-3.jpg' },
            { title: 'Lianx Dominasi Adyy', link: '#', thumbnail: 'assets/img/video-thumb-1.jpg' }
        ]
    },
];

// Data Berita (Minimal)
const NEWS_ARTICLES = [
    { title: "Profil Singkat Debater DBA: Menjelajahi Para Raja Fiksi", category: "News", date: "Sep 28, 2025" },
    { title: "Perubahan Peringkat Divisi Mid Tier Pasca Kemenangan Ranzt", category: "Rankings", date: "Sep 25, 2025" },
    { title: "Analisis Mendalam: Kemenangan Cepat Yulz atas Kazz", category: "Analysis", date: "Sep 20, 2025" },
    { title: "Siapa yang Akan Menantang Lianx di High Tier?", category: "News", date: "Sep 15, 2025" },
    { title: "Highlight Pertarungan Paling Kontroversial di DBA 2", category: "Video", date: "Jul 10, 2025" },
];

// Menghitung jumlah W/L/D dari DEBATERS_DATA
function getDebaterRecord(name) {
    const debater = DEBATERS_DATA.find(d => d.name.toLowerCase() === name.toLowerCase());
    return debater ? `${debater.record.w}-${debater.record.l}-${debater.record.d}` : '0-0-0';
}
