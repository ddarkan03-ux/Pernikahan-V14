// SEMUA DATA UNDANGAN ADA DI SINI. Data di bawah adalah contoh (DEMO).
window.DATA_UNDANGAN = {
  demo: true,
  kode: "DEMO1",
  pemesan: "DEMO",
  wa: "6285716300907",
  siteUrl: "https://akun.github.io/nikah-demo/",
  pria: { nama: "Raka Pratama (DEMO)", panggilan: "Raka", ayah: "Bpk. Contoh Ayah", ibu: "Ibu Contoh Ibu", domisili: "Bekasi", anakKe: "Putra pertama" },
  wanita: { nama: "Salsabila Putri (DEMO)", panggilan: "Salsa", ayah: "Bpk. Contoh Ayah", ibu: "Ibu Contoh Ibu", domisili: "Bandung", anakKe: "Putri kedua" },
  akad: { kota: "Bekasi", tanggal: "2027-03-14", jam: "08:00", zona: "WIB", tempat: "Masjid Contoh", alamat: "Jl. Contoh No. 1, Bekasi", maps: "https://maps.google.com/?q=Bekasi" },
  resepsi: { aktif: true, selesai: true, tanggal: "2027-03-14", jam: "11:00", zona: "WIB", tempat: "Gedung Contoh", alamat: "Jl. Contoh No. 2, Bekasi", maps: "https://maps.google.com/?q=Bekasi" },
  foto: { cover: "foto/cover.webp", mempelaiPria: "foto/pria.webp", mempelaiWanita: "foto/wanita.webp", penutup: "foto/galeri3.webp", og: "foto/og.jpg" },
  musik: "musik/musiku.mp3",            // contoh: "musik/lagu.mp3" (kosong = tombol musik disembunyikan)
  kutipan: { arab: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ",
    arti: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antara kamu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.",
    sumber: "QS. Ar-Rum: 21" },
  kisah: [{tahun:"2020", judul:"Bertemu", isi:"tes"},{tahun:"2020", judul:"Bertemu", isi:"tes"}],            // contoh: [{tahun:"2020", judul:"Bertemu", isi:"..."}]
  galeri: ["foto/galeri1.webp","foto/galeri2.webp", "foto/galeri3.webp"],           // contoh: ["foto/g1.jpg","foto/g2.jpg"] (kosong = bagian disembunyikan)
  live: "",             // tautan YouTube/Zoom
  hadiah: { rekening: [ // maksimal 2
    { label: "Mempelai Pria", jenis: "Nomor Rekening (BANK DEMO)", nomor: "0000000000", nama: "Raka Pratama (DEMO)" },
    { label: "Mempelai Wanita", jenis: "Nomor E-Wallet (DEMO)", nomor: "081200000000", nama: "Salsabila Putri (DEMO)" } ],
    penerima: "Salsa (081200000000)", alamatKado: "Jl. Contoh No. 2, Bekasi (DEMO)" },
  keluarga: { aktif: true, daftar: ["Bpk. Contoh A (DEMO)", "Kel. Besar Contoh B (DEMO)", "Ustadz Contoh C (DEMO)", "Segenap Pemuda/i Contoh (DEMO)", "Kel. Besar Contoh D (DEMO)", "Bpk. Contoh E (DEMO)", "Kel. Besar Contoh F (DEMO)", "Rekan Kerja Contoh (DEMO)", "Kel. Besar Contoh G (DEMO)", "Sahabat Contoh (DEMO)"] },
  tampil: { ucapan: true, hadiah: true },
  templatPesan: "Assalamu'alaikum Wr. Wb.\n\nKepada Yth. {nama}\n\nDengan memohon rahmat Allah SWT, kami mengundang Bapak/Ibu/Saudara/i ke pernikahan {mempelai}.\n\nAkad: {akad}\nResepsi: {resepsi}\n\nInfo lengkap & konfirmasi kehadiran:\n{link}\n\nTerima kasih.",
  firebase: { apiKey: "AIzaSyBEA92p-xAjSyvDTWT09-zsuEDyjZg2dZw", authDomain: "undangan-saya.firebaseapp.com", projectId: "undangan-saya", appId: "1:996120910513:web:5df1e68b5e496fd899e090" }
};
