# Checklist mockup Daily Journal v2 — Part A

Audit: 23 Oktober 2026. Sumber: [PRD Daily Journal v2 & Marketing Template](https://app.notion.com/p/PRD-Daily-Journal-v2-Marketing-Template-3619e08f6594803c9aadc84a4453716c), bagian A1–A6. Dicocokkan dengan source code saat audit. Checklist ini menilai kebutuhan mockup, bukan kesiapan produksi. Part B Marketing Template CMS tidak termasuk audit ini; implementasinya belum ditemukan di repo. Opt out Parents di luar scope menurut PRD.

`[x]` tersedia di mockup; `[ ]` belum lengkap atau perlu keputusan. Perilaku yang diperiksa lewat source belum berarti seluruhnya sudah diuji browser pada revisi UI terakhir.

## A1 — Copy Prompt: tersedia sebagai demo

- [x] Copy Prompt di dekat Generate AI Summary, hanya muncul setelah generate gagal.
- [x] System prompt dan user prompt tersalin sebagai satu teks dengan nama siswa, nilai, lesson, project, dan catatan.
- [x] Toast “Prompt disalin”, serta feedback ketika clipboard gagal.
- [x] Hasil manual dapat ditempel tanpa batas panjang dari form.
- [ ] Prompt final dan instruksi batas panjang menunggu spesifikasi; sekarang dummy berlabel demo. PRD juga masih menandai teks prompt untuk dibahas.

Bukti: `pages/meeting-journal/create.vue`, `utils/dailyJournalPrompt.ts`.

## A2 — Copy Link dan kirim manual: hampir lengkap

- [x] Copy Link tersedia untuk jurnal tersimpan, tanpa bergantung pada nomor Parents.
- [x] Public demo memakai URL jurnal yang sama dalam snapshot pengiriman.
- [x] Modal Send to Parent menyediakan pilihan kirim manual.
- [x] Nomor Parents kosong otomatis memilih dan mengunci kirim manual.
- [x] Manual menjadi Sent (Manual), mengonsumsi jatah kirim dan mendukung revisi/Locked.
- [x] Pending default mengecualikan Sent dan Sent (Manual).
- [x] Revisi manual memilih jalur manual secara default; penyimpanan revisi tidak mengirim otomatis.
- [x] Public demo menampilkan report dan blok konten marketing statis.
- [ ] Tambahkan pengingat eksplisit pada revisi manual: teacher perlu memberi tahu Parents bahwa laporan diperbarui. Helper sekarang hanya menjelaskan bahwa revisi tidak dikirim otomatis.
- [ ] Kesamaan pesan WhatsApp nyata dan tracking marketing belum dapat diverifikasi; belum ada integrasi pengiriman/tracking.

Bukti: create page, `composables/useDailyJournalDemo.ts`, `pages/reports.vue`, `pages/daily-journal/[id].vue`.

Batas demo: public link hanya bekerja dengan data di browser yang menyimpan jurnal; tidak lintas perangkat. Batas dua pengiriman merupakan konstanta demo, bukan konfirmasi batas produksi.

## A3 — Video opsional: tersedia sebagai simulasi

- [x] Upload foto, preview, hapus; maksimal 3 foto dan 1 MB per foto.
- [x] Upload MP4/MOV dengan batas 30 MB dan pesan penolakan format/ukuran.
- [x] Foto opsional setelah video diunggah; menghapus video mengembalikan kewajiban minimal satu foto.
- [x] Indikator proses video; Continue tertahan selama proses.
- [x] Preview WhatsApp menampilkan video.
- [x] Preview HTML/PDF dan public report tidak menampilkan video; foto ditampilkan hanya jika ada.
- [x] Penyesuaian pengguna: pilihan mode radio dihapus, mode ditentukan otomatis dari keberadaan video. Berbeda dari mekanisme pemilihan mode di PRD, tetapi sudah diarahkan pengguna.
- [ ] Kompresi nyata, konversi MOV/HEVC, storage produksi, dan empat template WhatsApp video A/B/C/Revisi belum diimplementasikan. Ini dependensi produksi, bukan penghalang simulasi desain.

Bukti: create page, `utils/dailyJournalMedia.ts`, shared report preview.

## A4 — Progress PDF: sebagian

- [x] Progress memakai persentase; score tetap angka nilai/maxScore.
- [x] Penyesuaian pengguna pada report: ikon + “100% Complete” / “88% Progress”, dengan Score inline.
- [ ] PRD meminta output PDF hanya persentase tanpa kata tambahan. Shared HTML/PDF preview sekarang menggunakan label Complete/Progress sesuai revisi pengguna; perlu pemisahan presentasi PDF atau keputusan bahwa revisi ini juga menggantikan aturan PDF.
- [ ] Belum ada PDF nyata; tombol PDF hanya menampilkan pesan info.
- [ ] Dependensi MICRO-4374 (kesamaan progress dengan Learning Progress) belum diverifikasi; data masih mock.

Bukti: `components/MeetingJournalReportPreview.vue`, handler `downloadPDF` di create page.

## A5 — Status Failed: tersedia sebagai demo

- [x] Sending, Sent, Failed, dan Sent (Manual) tersedia.
- [x] Failed memakai badge error; Retry tersedia di daftar/review.
- [x] Failed tidak memakai jatah kirim; tidak ada retry otomatis tambahan.
- [x] Sending menunggu hasil simulasi eksplisit, tanpa timeout dan tanpa Retry selama Sending.
- [x] Tidak menambahkan notifikasi admin atau alasan gagal yang tidak diketahui.
- [ ] Hasil status Qontak/webhook nyata belum terhubung; keberhasilan/kegagalan dipilih lewat kontrol demo.

Bukti: demo composable, create page, reports, attendance detail. Tes transisi state lulus saat audit.

## A6 — Teacher Notes: hampir lengkap

- [x] Input Teacher Notes menjelaskan bahwa catatan merupakan bahan AI dan tidak ditampilkan langsung ke Parents.
- [x] Judul hasil menjadi Teacher Notes di Daily Journal; label Hasil olahan AI tersedia pada textarea.
- [x] Report final memakai judul Teacher Notes dan hanya menampilkan `aiSummary`, bukan catatan mentah.
- [x] State kosong, loading, hasil editable, gagal, dan Copy Prompt tersedia.
- [ ] Samakan penempatan label kecil dan helper tepat di bawah judul hasil AI dengan PRD. Helper saat ini menjelaskan review sebelum dikirim dan prompt dummy, belum menyampaikan kalimat PRD secara lengkap.

Bukti: create page dan shared report preview.

## QA dan keputusan sebelum sign-off desain

- [x] Lima tes existing lulus saat audit: media wajib/opsional, format/ukuran video, warna foreground primary, transisi kirim/quota/retry, dan isi prompt dummy.
- [ ] Review visual final desktop/mobile, light/dark, keyboard, dan semua state setelah revisi UI terbaru. Review sebelumnya bukan bukti untuk revisi terakhir; akses browser lokal sebelumnya terhalang autentikasi.
- [ ] Tutup gap helper A2/A6 dan keputusan presentasi PDF A4.
- [ ] Finalisasi copy prompt dan copy checkbox manual setelah keputusan Product.

Kesimpulan: keenam area Part A sudah punya representasi mockup. Belum seluruh acceptance criteria terpenuhi persis; A2, A4, dan A6 masih punya gap desain/copy. Part B bukan bagian implementasi Part A ini. Tidak ada perubahan fitur dalam audit ini.
