# Implementation plan — Marketing Template CMS

Saya meninjau [halaman referensi](https://dailyjournal-tmdacademy.vercel.app/marketing/templates) dan brief Part B. Halaman referensi memuat ringkasan status, filter, daftar template, aksi Preview/Edit, dan tombol Rule Tester serta New Template.

## Temuan repo

Repo belum memiliki halaman, model data, atau API Marketing. Data siswa saat ini juga belum memuat cabang, negara, dan tanggal lahir—semua diperlukan untuk target kampanye dan estimasi penerima.

Komponen yang bisa dipakai ulang mencakup `UiTableView`, `UiSectionHeader`, komponen Vuetify, `AppStepper`, dan `TiptapEditor`. Namun, `TiptapEditor` hanya mendukung rich text. **Marketing Builder WYSIWYG belum ada** dan perlu dibuat sebagai komponen baru untuk kanvas, elemen yang bisa digeser, layer, properti, variabel, undo/redo, serta preview A4 dan mobile. Ini bagian terbesar dari estimasi kerja. `@formkit/drag-and-drop` yang sudah terpasang dapat membantu urutan layer, tetapi tidak menggantikan interaksi kanvas.

## Tahapan implementasi

1. **Data dan aturan seleksi**
   - Tambahkan tipe template, target kampanye, desain halaman, variabel, dan nilai variabel per cabang.
   - Seed data demo, termasuk template default global/per negara dan 480 profil siswa sintetis untuk estimasi penerima.
   - Buat satu fungsi seleksi yang dipakai CMS, Rule Tester, dan estimasi penerima: cocokkan periode/filter, pilih prioritas angka terkecil, pecahkan seri dengan template yang dibuat lebih dulu, lalu fallback ke default negara dan default global.
   - Hitung usia pada tanggal jurnal; profil tanpa tanggal lahir tidak cocok dengan filter usia.
   - Simpan perubahan prototipe melalui `useStorage` dari VueUse, termasuk autosave Draft, banner “Draft restored”, dan aksi “Start over”.

2. **Daftar dan navigasi**
   - Tambahkan menu Marketing, route `/marketing/templates`, dan halaman daftar yang mengikuti referensi.
   - Tampilkan statistik yang dihitung dari data, pencarian, filter status yang tersimpan di URL, serta kolom Nama, Status, Periode, Filter, Prioritas, Terakhir diubah, dan Aksi.
   - Dukung Preview, Edit, Duplicate, Delete, dan aksi massal dengan hasil gagal per template.
   - Terapkan aturan default: satu per negara dan satu global; global wajib. Template default tidak dapat dihapus, dinonaktifkan, atau dijadwalkan.

3. **Wizard dan Marketing Builder**
   - Buat alur: Info dan target → Design → Nilai variabel → Preview dan test send → Review & Save.
   - Pertahankan indikator langkah; validasi form melalui tombol Back/Continue.
   - Buat kanvas 390 px dengan panel Elements/Layers/Styles/Variables, panel properti, toolbar undo/redo, zoom, preview, dan toggle A4/Mobile.
   - Sediakan elemen Text, Heading, Image, Button, Icon, Rectangle, Circle, Line, Frame, dan Divider. Sembunyikan Video, Code Block, dan form interaktif.
   - Sisipkan variabel bawaan dan kustom ke teks, heading, label tombol, dan URL. Variabel kustom memakai nama snake_case huruf kecil tanpa angka, mendukung tipe teks/angka/uang/tanggal, nilai default, dan nilai per cabang.
   - Jika target berubah setelah nilai cabang diisi, sesuaikan baris cabang tanpa menghapus desain. Cabang baru harus mendapat nilai sebelum Aktivasi.
   - Tampilkan variabel sebagai `{{nama_variabel}}` saat edit; gunakan nilai contoh saat preview. Peringatkan jika variabel dihapus tetapi masih dipakai desain, serta sebutkan elemen yang terdampak.

4. **Preview, Rule Tester, dan aktivasi**
   - Gunakan model desain yang sama untuk kanvas, preview A4, dan preview mobile. Preview A4 menandai batas tinggi sekitar 551 px dan memberi peringatan saat konten melewatinya.
   - Estimasikan penerima memakai fungsi seleksi yang sama; tunjukkan jumlah, alasan siswa yang cocok/terambil template lain, dan hingga 10 contoh berupa kode serta inisial.
   - Sertakan Rule Tester dengan profil sintetis dan alasan pemilihan template.
   - Simulasikan test send dengan label TEST; prototipe tidak mengirim WhatsApp sungguhan.
   - Sebelum Aktivasi, peringatkan benturan target dengan prioritas sama, nilai cabang kosong, dan placeholder tanpa variabel. Beri opsi simpan Draft atau “Activate anyway” jika ada nilai cabang kosong.
   - Status tersimpan: Draft, Published, Inactive. Status yang tampil dihitung sebagai Draft, Scheduled, Active, Expired, atau Inactive memakai waktu lokal negara/cabang.

5. **Snapshot dan akses**
   - Edit template Active hanya memengaruhi jurnal baru. Jurnal yang sudah dibuat mempertahankan salinan desain dan nilai variabel saat jurnal dibuat.
   - Batasi akses Marketing dan Admin menggunakan mekanisme permission repo. Permission produksi dan pemeriksaan sisi server perlu disediakan backend; route guard frontend saja bukan kontrol akses produksi.
   - Tambahkan mapping komponen Builder dan pola terkait ke `spec/design.md`.

## Antarmuka dan desain

Gunakan Poppins serta token yang sudah ada: `primary`, `surface`, `background`, `success`, `warning`, dan `error`. Pertahankan tampilan operasional yang rapi seperti referensi. Ciri utama builder: preview halaman 2 yang terlihat langsung di samping alat penyusunan.

**Perlu dipilih sebelum implementasi tabel:**

- **Scrollable table (rekomendasi):** mempertahankan delapan kolom dan pola yang cocok dengan referensi serta halaman Reports.
- **Mobile card:** gunakan `UiTableView` dengan mode `mobileCards` dan slot `mobile-cards`; memberi ruang untuk mengatur ulang konten dan aksi.

## Validasi dan keputusan terbuka

Periksa seleksi template pada batas periode/zona waktu, filter kosong, prioritas seri, fallback default, usia tanpa tanggal lahir, nilai default/per cabang, placeholder rusak, benturan prioritas, autosave, aksi massal, serta akses Marketing/Admin. Tinjau tampilan desktop/mobile, tema terang/gelap, fokus keyboard, dan operasi editor tanpa drag saja.

Sebelum integrasi produksi, brief masih meminta keputusan untuk frekuensi promo berulang, perilaku jika halaman 2 gagal dirender, pelacakan klik CTA, gate persetujuan Ops/Legal, tinjauan promo franchise, batas dan format gambar, limit test send 10 kali per hari, serta penghapusan template yang pernah dipakai. Asumsi untuk revisi: gunakan snapshot halaman 2 dari jurnal awal; konfirmasi ke Product/Ops sebelum produksi.

Plan ini mengasumsikan **prototipe frontend lokal dengan penyimpanan browser**, sesuai brief dan kondisi repo. Integrasi API, pengiriman WhatsApp, renderer PDF/HTML produksi, dan tracking klik belum termasuk. Belum ada kode yang diubah.
