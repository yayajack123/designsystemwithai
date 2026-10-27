# Plan update Daily Journal v2 — Part A

## Ringkasan

Update prototipe Nuxt untuk seluruh perubahan A1–A6. Cakupan mencakup form, status dan aksi pada daftar, preview jurnal, serta route public sederhana. Part B, CMS Marketing Template, tetap di luar cakupan. Semua alur memakai mock data lokal; API produksi tidak ditambahkan.

## Acuan UI dari prototype Product Manager

Gunakan [prototype form Daily Journal](https://dailyjournal-tmdacademy.vercel.app/journal/class/c1/student/s1) sebagai acuan struktur alur dan kebutuhan fitur untuk Part A, bukan sebagai arahan untuk merombak UI yang sudah ada.

### UI yang dipertahankan

- Pertahankan banner stepper pada screenshot: progress circular `1/2`, judul `Lesson & Details`, subtitle `Topics, Photo & Observation`, dan badge nama Teacher.
- Jangan ubah susunan, ukuran, spacing, typography, warna, teks, atau perilaku responsif banner tersebut. Jangan ganti progress circular dengan pola stepper lain.
- Pertahankan layout dan penempatan card form yang sudah ada. Perubahan pada form dibatasi pada field, kontrol, helper text, dan state baru yang memang diminta plan.

### Bagian lain yang mengikuti acuan prototype

Prototype menampilkan dua langkah (**Lesson & Details** dan **Review**), ringkasan siswa/kelas, tanggal/waktu, teacher/owner, dan nomor report. Pakai informasi ini untuk memastikan alur dan isi preview, tanpa memindahkan atau menambahkan elemen ke banner yang dipertahankan.

- **Lesson & Details:** daftar lesson dalam panel terpisah, masing-masing menampilkan progress, score, dan objective yang dapat dibuka; sediakan aksi “Add Another”. Pertahankan hubungan visual antara lesson dan objective saat daftar bertambah.
- **Add Details:** pertahankan card dan susunan kolom yang ada. Perbarui field Teacher Notes dengan helper privasi; tambahkan pilihan Mode Foto/Mode Video dan unggahan video di area media yang ada. Pertahankan susunan responsif saat ini.
- **AI summary:** pertahankan posisi dan card yang ada; perbarui judul menjadi “Teacher Notes di Daily Journal”, label “Hasil olahan AI”, helper text, serta state belum dibuat, sedang dibuat, berhasil, dan gagal. Pertahankan aksi “Generate AI Summary”; tampilkan Copy Prompt hanya pada state gagal.
- **Review dan aksi:** gunakan langkah kedua yang sudah ada untuk preview, informasi status kirim, dan Copy Link. Pertahankan pola footer yang ada; tambahkan hanya kontrol yang diperlukan untuk plan, tanpa merombak layout halaman.
- **Pemetaan repo:** ikuti pola `VRow`/`VCol`, `VCard`, `VExpansionPanels`, input Vuetify, serta typography dan warna semantik di `spec/design.md`. Untuk halaman detail, gunakan pola `MeetingJournalReportPreview` yang sudah dipakai `pages/student-meeting-journal.vue`; perbarui halaman create yang ada, jangan membuat pola form paralel.
- **Batas acuan:** model selector terlihat di prototype, tetapi aturan pemilihan model dan daftar model tidak ditentukan di brief Part A. Jangan menambahkan perilaku pemilihan model pada implementasi tanpa keputusan produk. Warna, font, spacing, theme, dan breakpoint tetap mengikuti `spec/design.md` serta pola repo, bukan menyalin nilai visual yang tidak ditetapkan di brief.

## Perubahan

- **Form dan AI:** Tambahkan Copy Prompt di dekat Generate AI Summary. Tombol hanya muncul setelah generate gagal; salin system prompt dan user prompt produksi yang sudah diisi data jurnal, termasuk nama dan nilai siswa. Tampilkan toast “Prompt disalin”. Ubah penjelasan input menjadi “Bahan untuk AI. Catatan ini tidak ditampilkan langsung ke Parents.” Hasil AI diberi judul “Teacher Notes di Daily Journal”, label “Hasil olahan AI”, dan teks penjelas dari brief. Pertahankan tombol “Generate AI Summary”.
- **Kirim, status, dan link:** Tambahkan opsi kirim manual pada modal Send to Parent, memakai teks draft brief. Jika nomor WhatsApp Parents kosong, opsi terpilih dan terkunci. Status manual menjadi “Sent (Manual)”; jurnal keluar dari Pending, memakai jatah kirim sebelum revisi dan Locked, dan revisi manual tidak memicu kirim otomatis. Tambahkan Copy Link untuk jurnal yang sudah dibuat, terlepas dari nomor Parents. Gunakan URL target yang sama untuk alur kirim dan tombol salin, lalu tampilkan jurnal pada route public demo dengan konten marketing statis. CMS dan tracking produksi tetap di luar cakupan.
- **Media:** Pertahankan Mode Foto. Tambahkan Mode Video dengan unggahan MP4/MOV maksimal 30 MB, foto opsional, validasi ukuran/format, dan indikator kompresi simulasi. Preview WhatsApp menampilkan video; preview HTML/PDF hanya menampilkan foto bila ada, dan tidak menyertakan video.
- **Status dan laporan:** Daftar mendukung Sending, Sent, Failed, serta Sent (Manual). Failed memakai warna semantik error dan aksi Retry manual; tidak memakai jatah kirim, tidak memicu notifikasi, dan status Sending tidak berubah karena timeout. Ubah progress pada output PDF menjadi persentase tanpa label tambahan; format score tetap seperti sekarang. Pada output untuk Parents, tampilkan hasil AI di bawah judul “Teacher Notes”; catatan mentah tidak ditampilkan langsung.
- **Pola UI:** Pakai komponen Vuetify dan preview jurnal yang sudah ada. Ikuti Poppins, typography dan spacing di `spec/design.md`, serta warna semantik. Tabel mempertahankan scroll horizontal pada mobile, sesuai pilihan.

## Antarmuka, dependensi, dan risiko

- Perluas tipe mock jurnal untuk mode media, data video, URL public, dan status kirim. Tidak ada API produksi atau perubahan schema backend dalam plan ini.
- Teks prompt produksi belum tersedia di repo; harus disediakan sebagai sumber A1 sebelum implementasi. Jangan menggantinya dengan prompt buatan.
- Batas 30 MB berlaku untuk unggahan. Target ukuran setelah kompresi dari Qontak belum dikonfirmasi, jadi kompresi nyata, konversi MOV/HEVC, template WhatsApp, dan integrasi pengiriman tetap dependensi produksi.
- Repo belum punya generator PDF atau halaman public Daily Journal. Plan mencakup demonstrasi UI/preview saja, bukan pembuatan PDF produksi.

## Verifikasi penerimaan

- Simulasikan generate berhasil dan gagal; pastikan Copy Prompt hanya muncul saat gagal dan hasil salin memuat prompt beserta data jurnal.
- Periksa kirim otomatis dan manual, nomor Parents kosong, status Sent (Manual), revisi manual, Copy Link, serta kecocokan URL pada mock.
- Coba video MP4/MOV yang valid, format tak didukung, unggahan di atas 30 MB, indikator proses, dan tampilan dengan/tanpa foto.
- Periksa badge dan Retry untuk Sending/Sent/Failed, batas jatah kirim, helper Teacher Notes, judul output Parents, dan format progress PDF tanpa mengubah score.
- Tinjau tampilan desktop/mobile, tema terang/gelap, fokus keyboard, serta label aksesibel. Tidak ada test atau perubahan kode dalam tahap plan ini.
