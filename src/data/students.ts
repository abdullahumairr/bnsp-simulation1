export type Student = {
  id: string
  name: string
  email: string
  class: string
  grade: number
  status: "active" | "inactive" | "warning"
  attendance: number
  joinDate: string
  avatar: string
}

export type Activity = {
  id: string
  text: string
  time: string
  type: "grade" | "enrollment" | "alert" | "note"
}

export type Schedule = {
  id: string
  subject: string
  teacher: string
  time: string
  room: string
  day: string
}

export const students: Student[] = [
  { id: "S001", name: "Arya Pratama", email: "arya.p@school.id", class: "XII-IPA-1", grade: 88, status: "active", attendance: 96, joinDate: "2022-07-18", avatar: "AP" },
  { id: "S002", name: "Bunga Lestari", email: "bunga.l@school.id", class: "XII-IPA-2", grade: 92, status: "active", attendance: 98, joinDate: "2022-07-18", avatar: "BL" },
  { id: "S003", name: "Candra Wijaya", email: "candra.w@school.id", class: "XII-IPS-1", grade: 74, status: "warning", attendance: 78, joinDate: "2022-07-18", avatar: "CW" },
  { id: "S004", name: "Dewi Rahayu", email: "dewi.r@school.id", class: "XI-IPA-1", grade: 85, status: "active", attendance: 92, joinDate: "2023-07-17", avatar: "DR" },
  { id: "S005", name: "Eko Santoso", email: "eko.s@school.id", class: "XI-IPS-2", grade: 69, status: "warning", attendance: 71, joinDate: "2023-07-17", avatar: "ES" },
  { id: "S006", name: "Fitri Handayani", email: "fitri.h@school.id", class: "X-IPA-1", grade: 90, status: "active", attendance: 95, joinDate: "2024-07-15", avatar: "FH" },
  { id: "S007", name: "Galih Nugroho", email: "galih.n@school.id", class: "X-IPS-1", grade: 55, status: "inactive", attendance: 60, joinDate: "2024-07-15", avatar: "GN" },
  { id: "S008", name: "Hana Putri", email: "hana.p@school.id", class: "XII-IPA-1", grade: 94, status: "active", attendance: 99, joinDate: "2022-07-18", avatar: "HP" },
  { id: "S009", name: "Irfan Hakim", email: "irfan.h@school.id", class: "XI-IPA-2", grade: 81, status: "active", attendance: 88, joinDate: "2023-07-17", avatar: "IH" },
  { id: "S010", name: "Jasmine Ayu", email: "jasmine.a@school.id", class: "X-IPA-2", grade: 87, status: "active", attendance: 93, joinDate: "2024-07-15", avatar: "JA" },
  { id: "S011", name: "Kevin Saputra", email: "kevin.s@school.id", class: "XII-IPS-2", grade: 78, status: "active", attendance: 85, joinDate: "2022-07-18", avatar: "KS" },
  { id: "S012", name: "Laila Nurfitri", email: "laila.n@school.id", class: "XI-IPS-1", grade: 63, status: "warning", attendance: 72, joinDate: "2023-07-17", avatar: "LN" },
]

export const activities: Activity[] = [
  { id: "1", text: "Nilai UTS Hana Putri diperbarui → 94", time: "2 menit lalu", type: "grade" },
  { id: "2", text: "Siswa baru Jasmine Ayu terdaftar di X-IPA-2", time: "1 jam lalu", type: "enrollment" },
  { id: "3", text: "Peringatan absensi: Eko Santoso < 75%", time: "3 jam lalu", type: "alert" },
  { id: "4", text: "Catatan konseling ditambahkan untuk Candra Wijaya", time: "Kemarin", type: "note" },
  { id: "5", text: "Nilai UAS Arya Pratama diperbarui → 88", time: "Kemarin", type: "grade" },
  { id: "6", text: "Galih Nugroho dinonaktifkan sementara", time: "2 hari lalu", type: "alert" },
]

export const schedule: Schedule[] = [
  { id: "1", subject: "Matematika", teacher: "Pak Budi", time: "07:00 – 08:30", room: "R. 201", day: "Senin" },
  { id: "2", subject: "Fisika", teacher: "Bu Sari", time: "08:30 – 10:00", room: "Lab IPA", day: "Senin" },
  { id: "3", subject: "Bahasa Indonesia", teacher: "Pak Yusuf", time: "10:15 – 11:45", room: "R. 105", day: "Selasa" },
  { id: "4", subject: "Kimia", teacher: "Bu Ratna", time: "07:00 – 08:30", room: "Lab Kimia", day: "Rabu" },
  { id: "5", subject: "Sejarah", teacher: "Bu Dewi", time: "08:30 – 10:00", room: "R. 301", day: "Kamis" },
  { id: "6", subject: "Olahraga", teacher: "Pak Hendra", time: "07:00 – 08:30", room: "Lapangan", day: "Jumat" },
]

export const classes = ["XII-IPA-1", "XII-IPA-2", "XII-IPS-1", "XII-IPS-2", "XI-IPA-1", "XI-IPA-2", "XI-IPS-1", "XI-IPS-2", "X-IPA-1", "X-IPA-2", "X-IPS-1", "X-IPS-2"]
