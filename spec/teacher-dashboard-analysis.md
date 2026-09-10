# Analisis PRD — Teacher Dashboard

## Metadata

- **Sumber:** [PRD Teacher Dashboard](https://app.notion.com/p/PRD-Teacher-Dashboard-3b59e08f6594815ea90bc17541bbb3d8)
- **Dibaca dari:** tab Google Chrome milik user
- **Tanggal analisis:** 10 September 2026
- **Status PRD:** gabungan antara confirmed, proposed/open question, dan implemented in prototype

## 1. Ringkasan Eksekutif

Teacher Dashboard dirancang sebagai halaman kerja utama teacher sebelum mengajar. Informasi harus disusun berdasarkan urgensi dan kebutuhan pengambilan keputusan:

1. Persiapan kelas berikutnya.
2. Tugas dan siswa yang paling membutuhkan perhatian.
3. Ringkasan dampak serta performa teacher.
4. Apresiasi dan penguatan identitas teacher.

PRD cukup kuat pada definisi Priority Watchlist, terutama threshold risiko, evaluation window, ranking, dan lifecycle action. Area yang masih membutuhkan keputusan product/design adalah definisi periode pada Summary Card, prioritas trigger appreciation, serta arti dan cakupan Upcoming Schedule.

## 2. Scope dan Struktur Halaman

### In scope

- Welcome Section & Appreciation
- Summary Card
- Priority Watchlist
- Pending Tasks
- Upcoming Schedule

### Pending / not in scope

- Self Learning Reminder berstatus **PENDING — Not In Scope**.
- TMS Revamp sengaja tidak dimasukkan ke PRD ini.

### Layout

PRD menetapkan layout grid **3:1**:

- **Kolom utama:** Welcome/Appreciation, Summary Card, Priority Watchlist, Pending Tasks.
- **Sidebar:** Upcoming Schedule dan Self Learning Reminder.

## 3. Analisis Fungsional per Section

### 3.1 Welcome Section & Appreciation

**Tujuan:** membuat pengalaman pembuka terasa personal sekaligus memberi pengakuan atas kontribusi teacher.

**Kebutuhan utama:**

- Sapaan personal: `Hai, Mr. / Ms [Nama Teacher]!`
- Carousel appreciation dengan auto-rotate setiap 5 detik.
- Navigation arrows untuk perpindahan manual.
- Pesan kontekstual berdasarkan hari besar, milestone, seasonal event, dan dampak siswa.

**Sumber data yang teridentifikasi:**

- `teacher.created_at` untuk anniversary akun.
- Homeroom assignment untuk jumlah unique students taught.
- Project submission dengan status `approved`.
- Student survey untuk rating dan ranking satisfaction.
- Class attendance untuk teaching hours dan perfect attendance.
- Meeting journal untuk aktivitas feedback.
- Enrollment, renewal, continuation, progress, calendar, dan profile untuk impact/seasonal appreciation.

**Catatan analisis:**

- PRD mendefinisikan banyak trigger, tetapi belum menetapkan prioritas ketika beberapa trigger aktif bersamaan.
- Sebaiknya trigger memiliki `priority`, `valid_from`, `valid_until`, dan fallback message.
- Perlu dipastikan apakah anniversary menggunakan timezone sistem atau timezone teacher.

### 3.2 Summary Card

Empat kartu yang ditetapkan:

| Kartu | Makna | Sumber |
|---|---|---|
| Parents Updated | Jumlah journal yang terkirim | Journal submission log |
| Student Impacted | Jumlah siswa yang naik level | Student progress data |
| Skill Growth | Jumlah skill baru yang dikuasai teacher | Master Data Skills |
| Project Submitted | Project terkumpul dan siap direview | Project Submission |

**Catatan analisis:**

- Belum jelas apakah nilai adalah total bulan berjalan, total sepanjang masa, atau perbandingan dengan bulan sebelumnya.
- Definisi `Student Impacted` perlu membedakan jumlah event dan jumlah unique student.
- `Skill Growth` membutuhkan definisi status “dikuasai” dan periode penghitungan.
- Untuk menghindari salah tafsir, setiap kartu sebaiknya menampilkan label periode, misalnya `Bulan ini` atau `Total`.

### 3.3 Priority Watchlist

**Tujuan:** menampilkan siswa berisiko berdasarkan perilaku attendance dan performa akademik.

#### Threshold

| Metric | Green | Yellow | Red |
|---|---:|---:|---:|
| Attendance — absences | 0 | 1 | 2+ |
| Learning Velocity | ≥ 1.0 | 0.5–0.99 | < 0.5 |
| Average Quiz Score | ≥ 85 | 70–84 | < 70 |

#### Aturan kalkulasi

- Evaluasi dilakukan per **student-book pair**.
- Evaluation window adalah fixed block setiap 4 meeting dan tidak overlap.
- Evaluasi pertama baru berjalan setelah 4 meeting terkumpul.
- Attendance dihitung berdasarkan total meeting yang di-assign dalam window.
- Learning Velocity dan Quiz Score dihitung berdasarkan 4 meeting yang dihadiri siswa.
- Learning Velocity = jumlah lesson unik yang mencapai 100% dibagi 4.
- Quiz Score adalah rata-rata quiz dari lesson yang mencapai 100%.
- Jika tidak ada data quiz, hasilnya `No data` dan tidak memengaruhi overall status.
- Refresh/query dijadwalkan setiap Senin.
- Overall status: jika ada Red → Red; jika tidak ada Red tetapi ada Yellow → Yellow; selain itu Green.
- Hanya siswa dengan minimal satu metric Red yang masuk watchlist.
- Prioritas ranking: Learning Velocity, lalu Attendance, lalu Quiz Score.

#### Teacher-facing behavior

- Tampilkan alasan siswa masuk watchlist, misalnya `Tidak hadir 2 pertemuan` atau `Kecepatan belajar menurun`.
- Tab filter: Attendance, Productivity, Quiz.
- Kolom tabel: Siswa, Issue, Risk, Status, Action.
- Action membuka modal textarea untuk catatan tindakan.
- Submit mengubah status `Open` menjadi `In Progress`.
- Status berikutnya ditentukan otomatis pada evaluasi berikutnya dan dibandingkan per metric/type yang sama, bukan hanya overall status.

#### Lifecycle

```text
Open → In Progress → Resolved
                     └→ Failed

Open → No Action
Open → Closed
```

- Action sudah diberikan + instance terbaru tidak Red → `Resolved`.
- Action sudah diberikan + instance terbaru tetap Red → `Failed`.
- Belum ada action + instance terbaru Red atau Green → `No Action`.
- `Closed` disebutkan dalam lifecycle, tetapi kondisi kapan status ini dipakai belum dijelaskan.

**Catatan analisis penting:**

- Istilah tab `Productivity` perlu dipetakan secara eksplisit ke metric `Learning Velocity`.
- Perlu dibedakan antara record watchlist, evaluation instance, dan action history agar status historis tidak tertimpa.
- Job mingguan harus idempotent supaya evaluasi ulang tidak membuat duplicate instance.
- Karena window berbeda untuk setiap student-book pair, backend tidak boleh memakai satu window global untuk seluruh kelas.

### 3.4 Pending Tasks

**Tujuan:** mengumpulkan pekerjaan administratif dan akademik yang membutuhkan tindakan.

**Perilaku:**

- Tiga tab: Jurnal, Laporan, Ujian & Proyek.
- Counter per tab dan total pending count.
- Maksimal 5 item ditampilkan.
- Kolom: Siswa, Course, Mtg/Lesson, Due, Action (`Buat`).
- Link `Lihat Semua` mengarah ke menu terkait di TMS Revamp:
  - Jurnal → Reports → Pending Daily Journal
  - Laporan → Reports → Reports
  - Ujian & Proyek → Assessments → Project Approvals

**Catatan analisis:**

- Ketergantungan terhadap menu TMS Revamp perlu disepakati dengan pemilik sistem sebelum integrasi.
- Definisi `pending`, sorting berdasarkan due date, dan timezone deadline belum dijelaskan.
- Perlu empty state yang berbeda untuk “tidak ada tugas” dan “data gagal dimuat”.

### 3.5 Upcoming Schedule

**Tujuan:** membantu teacher mempersiapkan kelas yang akan berlangsung.

**Perilaku:**

- Tampilkan waktu, nama kelas, dan jumlah siswa.
- Countdown real-time seperti `In 15 min` dan `2 hrs left`.
- Status dot hijau, kuning, atau merah.
- Link `View All`.

**Open questions yang berdampak ke implementasi:**

- Apakah warna dot menunjukkan urgensi waktu atau status kelas?
- Apakah daftar hanya mencakup hari ini atau juga besok?
- Belum ada threshold waktu untuk perubahan warna.

## 4. Kebutuhan Data dan Backend

### Entitas utama

- Teacher dan teacher profile
- Homeroom assignment
- Class schedule dan class attendance
- Student progress, book history, lesson progress, dan quiz
- Project submission
- Journal / meeting journal
- Student survey
- Enrollment dan renewal
- Calendar event
- CMS content configuration
- Watchlist evaluation dan watchlist action history

### Rekomendasi model watchlist

Pisahkan setidaknya tiga konsep berikut:

1. **Evaluation window** — pasangan student-book, rentang empat meeting, dan waktu evaluasi.
2. **Metric result** — hasil Attendance, Learning Velocity, dan Quiz Score beserta risk level.
3. **Watchlist action** — status workflow, notes, actor, timestamp, dan relasi ke metric instance.

Struktur ini mendukung aturan “instance terbaru per type/tab” dan menjaga audit trail.

### Konsistensi waktu dan freshness

- Kalkulasi risiko dijalankan mingguan setiap Senin.
- Countdown schedule harus tetap real-time di client atau melalui endpoint schedule yang fresh.
- Semua kalkulasi yang berbasis bulan berjalan harus memiliki timezone dan definisi awal/akhir bulan yang konsisten.

## 5. UX, Aksesibilitas, dan State yang Dibutuhkan

### State minimum

- Loading state untuk setiap section.
- Empty state.
- Error state dengan retry.
- Partial loading agar kegagalan satu widget tidak menghilangkan seluruh dashboard.
- Stale-data indicator untuk data yang hanya diperbarui mingguan.
- Disabled/loading state saat submit action watchlist.

### Aksesibilitas

- Jangan mengandalkan warna saja untuk risk/status; sertakan label Red/Yellow/Green.
- Carousel harus memiliki pause control dan dapat dinavigasi dengan keyboard.
- Countdown tidak boleh membuat screen reader membaca perubahan setiap detik; gunakan update yang terkontrol.
- Modal Action harus memiliki label textarea, focus management, dan feedback submit yang jelas.
- Tabel watchlist perlu header semantik dan kolom yang tetap terbaca pada ukuran layar kecil.

## 6. Open Questions Prioritas

### Blocker sebelum development final

1. Periode dan format perbandingan Summary Card.
2. Prioritas appreciation ketika banyak trigger aktif.
3. Arti status dot Upcoming Schedule dan threshold waktunya.
4. Cakupan waktu Upcoming Schedule: hari ini saja atau termasuk besok.
5. Definisi dan transisi status `Closed` pada watchlist.
6. Kontrak integrasi dengan menu/data TMS Revamp.

### Keputusan teknis yang perlu didokumentasikan

1. Timezone untuk schedule, due date, anniversary, dan periode bulanan.
2. Definisi unique student versus event count pada metric impact.
3. Penanganan student yang drop pada histori assignment.
4. Behavior jika student memiliki beberapa book aktif.
5. Retry dan idempotency untuk batch evaluasi setiap Senin.

## 7. Rekomendasi Prioritas Implementasi

### Phase 1 — Core operational dashboard

- Page shell dan layout 3:1.
- Upcoming Schedule.
- Pending Tasks.
- Summary Card dengan periode yang sudah diputuskan.

### Phase 2 — Watchlist workflow

- Evaluation window dan metric calculation.
- Risk threshold serta ranking.
- Filter/tab dan reason display.
- Action modal, notes, lifecycle, dan audit history.

### Phase 3 — Recognition layer

- Welcome message.
- Appreciation trigger engine.
- Carousel, priority rules, seasonal content, dan CMS integration.

Self Learning Reminder sebaiknya tidak dimasukkan ke acceptance scope sebelum status in-scope disetujui.

## 8. Acceptance Criteria Tingkat Tinggi

- Teacher dapat melihat kelas terdekat, countdown, dan jumlah siswa.
- Teacher dapat melihat pending work per kategori dengan total counter dan maksimal 5 item.
- Summary Card menampilkan empat metric dengan periode yang eksplisit.
- Watchlist hanya menampilkan student-book pair yang memiliki minimal satu metric Red.
- Watchlist menggunakan fixed block empat meeting dan evaluasi pertama tidak berjalan sebelum window lengkap.
- Attendance, Learning Velocity, dan Quiz Score memakai basis data yang sesuai PRD.
- Teacher dapat memberi action note dan melihat perubahan status menjadi `In Progress`.
- Evaluasi mingguan menentukan status berikutnya secara otomatis per metric type.
- History action dan evaluasi tetap dapat diaudit.
- Appreciation carousel dapat berpindah otomatis/manual dan memiliki aturan prioritas yang terdokumentasi.
- Setiap section memiliki loading, empty, dan error state.

## Kesimpulan

PRD ini sudah cukup matang untuk memulai desain dan implementasi fondasi dashboard, terutama Priority Watchlist. Risiko terbesar bukan pada layout, melainkan pada definisi periode metric, konsistensi waktu, integrasi TMS Revamp, serta model histori watchlist. Enam open question prioritas sebaiknya ditutup sebelum development dianggap final agar tidak terjadi perubahan besar pada kontrak API dan struktur data.
