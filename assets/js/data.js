// assets/js/data.js

// --- Data Pertandingan Lengkap untuk Menghitung Rekor ---
const MATCH_RECORDS = [
    // DBA 1: INDONESIA VS MALAYSIA
    { debaterA: "HIROO", debaterB: "RENJI", winner: "HIROO", tier: "Mid Tier", event: "DBA 1" },
    { debaterA: "ZOGRATIS", debaterB: "MUCHIBEI", winner: "ZOGRATIS", tier: "High Tier", event: "DBA 1" },
    { debaterA: "ARYANWT", debaterB: "RIM", winner: "ARYANWT", tier: "Low Tier", event: "DBA 1" },
    { debaterA: "RANZT", debaterB: "RYUU", winner: "RANZT", tier: "Mid Tier", event: "DBA 1" },
    { debaterA: "THINZEL", debaterB: "SHADE", winner: "THINZEL", tier: "Low Tier", event: "DBA 1" },
    { debaterA: "LIANX", debaterB: "ADYY", winner: "LIANX", tier: "High Tier", event: "DBA 1" },
    
    // DBA 2 MATCH
    { debaterA: "RYUU", debaterB: "RAJU", winner: "RYUU", tier: "High Tier", event: "DBA 2" },
    { debaterA: "KYUKI", debaterB: "SHADE", winner: "KYUKI", tier: "High Tier", event: "DBA 2" },
    { debaterA: "AHENG", debaterB: "PRATAMA", winner: "AHENG", tier: "High Tier", event: "DBA 2" },
    { debaterA: "ADYY", debaterB: "ZOGRATIS", winner: "ADYY", tier: "High Tier", event: "DBA 2", note: "CO MAIN EVENT" },
    { debaterA: "AARON", debaterB: "ARYANWT", winner: "AARON", tier: "High Tier", event: "DBA 2", note: "MAIN EVENT" },

    // DBA SPECIAL MATCH
    { debaterA: "YULZ", debaterB: "KAZ", winner: "YULZ", tier: "Mid Tier", event: "DBA Special Match" },
    { debaterA: "IULIAN", debaterB: "KARIZ", winner: "KARIZ", tier: "High Tier", event: "DBA Special Match" },
    { debaterA: "RANZT", debaterB: "HIROO", winner: "RANZT", tier: "Mid Tier", event: "DBA Special Match", note: "Peringatan: Raja Divisi Mid Tier" },
    { debaterA: "ADYY", debaterB: "AHENG", winner: "AHENG", tier: "High Tier", event: "DBA Special Match", note: "CO MAIN EVENT" },
    { debaterA: "AARON", debaterB: "HYRUKI", winner: "AARON", tier: "High Tier", event: "DBA Special Match", note: "MAIN EVENT" },

    // DBA 3 ONGOING (Hasil belum diketahui) - HANYA UNTUK TAMPILAN JADWAL
    { debaterA: "VALEN", debaterB: "SHADE", winner: null, tier: "High Tier", event: "DBA 3", note: "Jadwal Mendatang" },
    { debaterA: "YULZ", debaterB: "YUWEY", winner: null, tier: "Mid Tier", event: "DBA 3", note: "Jadwal Mendatang" },
    { debaterA: "SANN", debaterB: "??", winner: null, tier: "Mid Tier", event: "DBA 3", note: "Jadwal Mendatang" },
    { debaterA: "KARIZ", debaterB: "ADYY", winner: null, tier: "High Tier", event: "DBA 3", note: "Jadwal Mendatang" },
    { debaterA: "ARYANWT", debaterB: "KYUKI", winner: null, tier: "High Tier", event: "DBA 3", note: "CO MAIN EVENT - Jadwal Mendatang" },
    { debaterA: "NANZ", debaterB: "??", winner: null, tier: "Low Tier", event: "DBA 3", note: "MAIN EVENT - Jadwal Mendatang" },
    { debaterA: "LIANX", debaterB: "RANZT", winner: null, tier: "Mid Tier", event: "DBA 3", note: "SUPER MAIN EVENT - Jadwal Mendatang" },
];

// --- Daftar Debater & Info Dasar (Digunakan oleh JS untuk membuat Profil) ---
const ALL_DEBATERS = [
    // INDONESIA
    { name: "HIROO", country: "ID", status: "Aktif", img: "assets/img/debater-hiroo.jpg", bio: "The Silent Assassin, dikenal dengan flow yang halus dan argumentasi yang menusuk." },
    { name: "RANZT", country: "ID", status: "Aktif", img: "assets/img/debater-ranzt.jpg", bio: "Raja Divisi Mid Tier. Gaya agresif dengan delivery yang sangat kuat." },
    { name: "ZOGRATIS", country: "ID", status: "Aktif", img: "assets/img/debater-zogratis.jpg", bio: "Spesialis High Tier. Pemikir kritis dengan argumen yang berlapis." },
    { name: "PRATAMA", country: "ID", status: "Aktif", img: "assets/img/debater-pratama.jpg", bio: "Rookie yang menjanjikan di divisi High Tier." },
    { name: "AHENG", country: "ID", status: "Aktif", img: "assets/img/debater-aheng.jpg", bio: "The Strategist. Ahli dalam membalikkan argumen lawan dengan skema tak terduga." },
    { name: "ARYANWT", country: "ID", status: "Aktif", img: "assets/img/debater-aryanwt.jpg", bio: "Debater yang konsisten bermain di berbagai Tier, dikenal dengan risetnya yang mendalam." },
    { name: "THINZEL", country: "ID", status: "Non-Aktif", img: "assets/img/debater-thinzel.jpg", bio: "Spesialis Low Tier, kini sedang Hiatus." },
    { name: "LIANX", country: "ID", status: "Aktif", img: "assets/img/debater-lianx.jpg", bio: "Raja Divisi High Tier. Master dalam narasi dan kekuatan karakter." },
    { name: "VALEN", country: "ID", status: "Aktif", img: "assets/img/debater-valen.jpg", bio: "Debater baru dengan potensi Mid Tier yang besar." },
    { name: "KUREJI", country: "ID", status: "Aktif", img: "assets/img/debater-kureji.jpg", bio: "Gaya bertarung yang unik dan sulit diprediksi." },
    { name: "KARIZ", country: "ID", status: "Aktif", img: "assets/img/debater-kariz.jpg", bio: "Spesialis High Tier. Berbahaya dan cepat beradaptasi." },
    { name: "SANN", country: "ID", status: "Aktif", img: "assets/img/debater-sann.jpg", bio: "Debater Mid Tier, dikenal karena kejutan-kejutan di panggung." },
    { name: "YULZ", country: "ID", status: "Aktif", img: "assets/img/debater-yulz.jpg", bio: "Konsisten di Mid Tier, memiliki rekor yang kuat." },
    { name: "NANZZ", country: "ID", status: "Aktif", img: "assets/img/debater-nanzz.jpg", bio: "Calon Raja Divisi Low Tier. Bakat alami dalam berdebat." },
    // MALAYSIA
    { name: "ADYY", country: "MY", status: "Aktif", img: "assets/img/debater-adyy.jpg", bio: "Top debater Malaysia, sering bertarung di High Tier." },
    { name: "RYUU", country: "MY", status: "Aktif", img: "assets/img/debater-ryuu.jpg", bio: "Debater veteran, memiliki pengalaman Mid dan High Tier." },
    { name: "MUCHIBEI", country: "MY", status: "Non-Aktif", img: "assets/img/debater-muchibei.jpg", bio: "Debater High Tier, sedang rehat." },
    { name: "RENJI", country: "MY", status: "Non-Aktif", img: "assets/img/debater-renji.jpg", bio: "Debater Mid Tier yang saat ini Non-Aktif." },
    { name: "RIM", country: "MY", status: "Non-Aktif", img: "assets/img/debater-rim.jpg", bio: "Debater Low Tier, sedang rehat." },
    { name: "SHADE", country: "MY", status: "Aktif", img: "assets/img/debater-shade.jpg", bio: "Spesialis High Tier, sering menjadi lawan tangguh." },
    { name: "KYUKI", country: "MY", status: "Aktif", img: "assets/img/debater-kyuki.jpg", bio: "Debater High Tier dari Malaysia." },
    { name: "YUWEY", country: "MY", status: "Aktif", img: "assets/img/debater-yuwey.jpg", bio: "Debater Mid Tier baru yang sedang naik daun." },
    // VIETNAM
    { name: "LUCERIS", country: "VN", status: "Aktif", img: "assets/img/debater-luceris.jpg", bio: "Perwakilan Vietnam, gaya berdebat yang unik." },
    // LAOS
    { name: "THONG", country: "LA", status: "Aktif", img: "assets/img/debater-thong.jpg", bio: "Debater aktif dari Laos." },
    // PHILIPPINES
    { name: "KAZ", country: "PH", status: "Aktif", img: "assets/img/debater-kaz.jpg", bio: "Debater Mid Tier Filipina." },
    // AMERIKA
    { name: "AARON", country: "MX", status: "Aktif", img: "assets/img/debater-aaron.jpg", bio: "The Main Eventer. Spesialis High Tier dari Meksiko, rekor fantastis." },
    { name: "XAVIER", country: "BR", status: "Aktif", img: "assets/img/debater-xavier.jpg", bio: "Debater aktif dari Brazil." },
    { name: "MIKAEL", country: "BR", status: "Aktif", img: "assets/img/debater-mikael.jpg", bio: "Debater aktif dari Brazil." },
    { name: "RABBITTO", country: "CA", status: "Non-Aktif", img: "assets/img/debater-rabbito.jpg", bio: "Debater dari Kanada, sedang Hiatus." },
    // EROPA
    { name: "HYRUKI", country: "IT", status: "Aktif", img: "assets/img/debater-hyruki.jpg", bio: "Perwakilan Italia, memiliki rekor Mid/High Tier yang solid." },
    { name: "LARNEX", country: "FR", status: "Aktif", img: "assets/img/debater-larnex.jpg", bio: "Debater aktif dari Prancis." },
    { name: "IULIAN", country: "RO", status: "Aktif", img: "assets/img/debater-iulian.jpg", bio: "Debater aktif dari Romania." },
    { name: "HOMURA KIN", country: "RU", status: "Aktif", img: "assets/img/debater-homurakin.jpg", bio: "Debater aktif dari Rusia." },
];

// --- Data Peringkat Sesuai Spesifikasi (Tier) ---
const RANKINGS_DATA = {
    "High Tier": {
        champion: { name: "LIANX", country: "ID" },
        ranked: [
            { rank: 1, name: "AARON", country: "MX" },
            { rank: 2, name: "AHENG", country: "ID" },
            { rank: 3, name: "KARIZ", country: "ID" },
            { rank: 4, name: "ZOGRATIS", country: "ID" },
            { rank: 5, name: "RYUU", country: "MY" },
            { rank: 6, name: "SHADE", country: "MY" },
            { rank: 7, name: "ADYY", country: "MY" },
            { rank: 8, name: "ARYANWT", country: "ID" },
            { rank: 9, name: "KYUKI", country: "MY" },
            { rank: 10, name: "MUCHIBEI", country: "MY" },
            { rank: 11, name: "RAJU", country: "??", isNotFound: true }, // Asumsi Raju belum terdaftar di ALL_DEBATERS
        ]
    },
    "Mid Tier": {
        champion: { name: "RANZT", country: "ID" },
        ranked: [
            { rank: 1, name: "YULZ", country: "ID" },
            { rank: 2, name: "HIROO", country: "ID" },
            { rank: 3, name: "KAZ", country: "PH" },
            { rank: 4, name: "RENJI", country: "MY" },
        ]
    },
    "Low Tier": {
        champion: { name: "VACANT", country: "DBA" }, // Raja Divisi Kosong
        ranked: [
            { rank: 1, name: "ARYANWT", country: "ID" },
            { rank: 2, name: "THINZEL", country: "ID" },
            { rank: 3, name: "RIM", country: "MY" },
            { rank: 4, name: "SHADE", country: "MY" },
        ]
    }
};

// Map untuk mencari debater berdasarkan nama dengan cepat (diisi oleh script.js)
const DEBATER_MAP = {}; 
// assets/js/data.js (LANJUTAN)

// --- Data untuk Halaman Beranda (Home) ---
const HOME_DATA = {
    mainStory: {
        category: "NEWS",
        title: "LIANX VS RANZT: 'SUPER MAIN EVENT' DI DBA 3 AKAN MENJADI PENENTU RAJA MID TIER!",
        link: "#",
        img: "assets/img/main-story-lianxvranzt.jpg" // PASTIKAN FILE INI ADA!
    },
    subStories: [
        { category: "VIDEO", title: "AARON DOMINASI HYRUKI DI MAIN EVENT DBA SPECIAL MATCH", link: "#", img: "assets/img/sub-story-aaron.jpg" },
        { category: "NEWS", title: "PROFIL DEBATER: KARIZ, BINTANG BARU DIVISI HIGH TIER DARI INDONESIA", link: "#", img: "assets/img/sub-story-kariz.jpg" },
        { category: "RANKINGS", title: "UPDATE PERINGKAT: SIAPA YANG MENDEKATI TAHTA RAJA DIVISI?", link: "#", img: "assets/img/sub-story-rank.jpg" },
    ],
    featuredDebater: {
        name: "AARON",
        title: "THE AMERICAN NIGHTMARE",
        tier: "HIGH TIER",
        link: "debater_profile_detail.html?name=AARON",
        img: "assets/img/featured-aaron.jpg"
    }
};

// --- Data Berita & Video (Tambahkan ke data.js) ---
const STORIES_DATA = [
    { date: "Sep 28, 2025", category: "News", title: "REKOR PERTARUNGAN DEBATER SETELAH DBA SPECIAL MATCH", link: "#" },
    { date: "Sep 25, 2025", category: "Rankings", title: "PERUBAHAN PERINGKAT DIVISI MID TIER PASCA KEMENANGAN RANZT", link: "#" },
    { date: "Sep 20, 2025", category: "Analysis", title: "MENDALAMI KEMENANGAN CEPAT YULZ ATAS KAZZ", link: "#" },
];

const VIDEO_HIGHLIGHTS = [
    { event: "DBA 2", title: "Highlight: AHENG vs PRATAMA - Knockout Cepat", img: "assets/img/video-aheng.jpg", link: "#" },
    { event: "DBA 1", title: "Full Bout: HIROO vs RENJI", img: "assets/img/video-hiroo.jpg", link: "#" },
    // Tambahkan video lain di sini...
];

// Pastikan kode render di script.js sudah di-update untuk membaca data di atas.
