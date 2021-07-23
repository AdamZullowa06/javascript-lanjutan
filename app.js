// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
// (filter)
let jslanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing masing video (map)
.map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
.map(waktu => {
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})

// jumlahkan semua detik (reduce)
.reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jslanjut / 3600);
jslanjut = jslanjut - jam * 3600;
const menit = Math.floor(jslanjut / 60);
const detik = jslanjut - menit * 60;

// simpan di DOM
const durasi = document.querySelector('.total-durasi');
durasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const jmlText = document.querySelector('.jumlah-video');
jmlText.textContent = `${jmlVideo} Video`;

console.log(jmlVideo);