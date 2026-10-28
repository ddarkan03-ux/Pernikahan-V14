// Penghubung Firebase (Auth + Firestore). Tidak ada rahasia di sini.
(function () {
  const D = window.DATA_UNDANGAN, C = D.firebase, K = D.kode;
  const ok = () => C && C.apiKey && !/^ISI/.test(C.apiKey);
  let ready, db, auth;
  function load() {
    if (ready) return ready;
    ready = new Promise((res, rej) => {
      if (!ok()) return rej(new Error("Firebase belum dikonfigurasi"));
      const b = "https://www.gstatic.com/firebasejs/10.12.2/";
      const L = f => new Promise((a, r) => { const s = document.createElement("script"); s.src = b + f; s.onload = a; s.onerror = () => r(new Error("Gagal memuat Firebase (cek internet)")); document.head.appendChild(s); });
      L("firebase-app-compat.js").then(() => Promise.all([L("firebase-auth-compat.js"), L("firebase-firestore-compat.js")]))
        .then(() => { firebase.initializeApp(C); db = firebase.firestore(); auth = firebase.auth(); res(); }).catch(rej);
    });
    ready.catch(() => { ready = null; });
    return ready;
  }
  const col = n => db.collection("undangan").doc(K).collection(n);
  const rows = s => s.docs.map(d => ({ id: d.id, ...d.data() }));
  window.FB = {
    ok, load,
    kirim: async d => { await load(); await col("ucapan").add({ nama: d.nama, hadir: d.hadir, jumlah: d.jumlah, pesan: d.pesan, waktu: firebase.firestore.FieldValue.serverTimestamp() }); },
    ucapan: async () => { await load(); return rows(await col("ucapan").orderBy("waktu", "desc").limit(100).get()); },
    pengaturan: async () => { await load(); const s = await col("pengaturan").doc("utama").get(); return s.exists ? s.data() : {}; },
    simpanPengaturan: async d => { await load(); await col("pengaturan").doc("utama").set(d, { merge: true }); },
    login: async pw => { await load(); await await auth.signInWithEmailAndPassword("emailkamu@gmail.com", pw); },
    logout: async () => { await load(); await auth.signOut(); },
    onAuth: async cb => { await load(); auth.onAuthStateChanged(cb); },
    hapusUcapan: async id => { await load(); await col("ucapan").doc(id).delete(); },
    tamu: async () => { await load(); return rows(await col("tamu").orderBy("dibuat", "desc").get()); },
    tambahTamu: async t => { await load(); await col("tamu").add({ nama: t.nama, wa: t.wa || "", terkirim: false, dibuat: firebase.firestore.FieldValue.serverTimestamp() }); },
    tandaiKirim: async id => { await load(); await col("tamu").doc(id).update({ terkirim: true }); },
    hapusTamu: async id => { await load(); await col("tamu").doc(id).delete(); }
  };
})();
