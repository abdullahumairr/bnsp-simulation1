# EduTrack — Academic Dashboard

Dashboard akademik modern dibangun dengan Next.js 14 + Tailwind CSS.
Desain hitam putih, minimalis, tampak seperti buatan manusia.

---

## 🗂️ Struktur Folder

```
src/
├── app/
│   ├── layout.tsx          # Root layout (sidebar wrapper)
│   ├── globals.css         # Global styles + skeleton animation
│   ├── page.tsx            # Halaman overview/dashboard
│   ├── students/page.tsx   # CRUD lengkap data siswa
│   ├── schedule/page.tsx   # Jadwal pelajaran
│   ├── grades/page.tsx     # Rekap nilai
│   ├── courses/page.tsx    # Daftar mata pelajaran
│   └── settings/page.tsx   # Pengaturan
├── components/
│   ├── Sidebar.tsx         # Dark sidebar + nav
│   ├── Header.tsx          # Top bar per halaman
│   ├── StatCard.tsx        # Kartu statistik + skeleton
│   ├── Modal.tsx           # Modal reusable (ESC to close)
│   ├── StudentForm.tsx     # Form tambah/edit siswa
├── data/
│   └── students.ts         # Dummy data: siswa, jadwal, aktivitas
├── hooks/
│   └── useStudents.ts      # CRUD state + filter + search
└── lib/
    └── utils.ts            # Helper: cn(), statusColor(), dll
```

---

## 🚀 Cara Install & Jalankan

```bash
# 1. Clone atau download project ini

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka browser
open http://localhost:3000
```

---

## 📦 Dependencies

| Package | Versi | Kegunaan |
|---|---|---|
| next | 14.2.3 | Framework |
| react | ^18 | UI library |
| react-icons | ^5.2.1 | Ikon (Remix Icons) |
| tailwindcss | ^3.4.1 | Styling |
| typescript | ^5 | Type safety |

---

## ✨ Fitur

- **Sidebar** — Dark sidebar dengan active state
- **Overview** — Stat cards, tabel siswa terbaru, aktivitas, jadwal
- **Data Siswa** — Search, filter status & kelas, CRUD lengkap
- **Jadwal** — View per hari
- **Nilai** — Distribusi nilai + tabel detail
- **CRUD Modal** — Add, Edit, Delete dengan loading state
- **Loading Skeleton** — Animasi shimmer saat loading
- **Empty State** — UI saat data kosong
- **Status Badge** — Aktif / Perhatian / Nonaktif
- **Responsive** — Mobile-friendly layout
