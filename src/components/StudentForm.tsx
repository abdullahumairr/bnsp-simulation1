"use client"
import { useState } from "react"
import { Student, classes } from "@/data/students"

type Props = {
  initial?: Partial<Student>
  onSubmit: (data: Omit<Student, "id">) => void
  onCancel: () => void
  loading?: boolean
}

const blank: Omit<Student, "id"> = {
  name: "", email: "", class: classes[0],
  grade: 80, status: "active", attendance: 90,
  joinDate: new Date().toISOString().slice(0, 10),
  avatar: "",
}

export default function StudentForm({ initial, onSubmit, onCancel, loading }: Props) {
  const [form, setForm] = useState<Omit<Student, "id">>({ ...blank, ...initial })

  const set = (k: keyof typeof form, v: string | number) =>
    setForm((p) => ({ ...p, [k]: v }))

  const handleSubmit = () => {
    if (!form.name.trim() || !form.email.trim()) return
    const avatar = form.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase()
    onSubmit({ ...form, avatar })
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-stone-500 mb-1">Nama Lengkap</label>
          <input
            className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-600 transition-colors"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="e.g. Budi Santoso"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-stone-500 mb-1">Email</label>
          <input
            className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-600 transition-colors"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="e.g. budi@school.id"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-stone-500 mb-1">Kelas</label>
          <select
            className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-600 transition-colors bg-white"
            value={form.class}
            onChange={(e) => set("class", e.target.value)}
          >
            {classes.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-stone-500 mb-1">Status</label>
          <select
            className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-600 transition-colors bg-white"
            value={form.status}
            onChange={(e) => set("status", e.target.value as Student["status"])}
          >
            <option value="active">Aktif</option>
            <option value="warning">Peringatan</option>
            <option value="inactive">Nonaktif</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-medium text-stone-500 mb-1">Nilai (0-100)</label>
          <input
            type="number" min={0} max={100}
            className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-600 transition-colors"
            value={form.grade}
            onChange={(e) => set("grade", Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-stone-500 mb-1">Kehadiran (%)</label>
          <input
            type="number" min={0} max={100}
            className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-600 transition-colors"
            value={form.attendance}
            onChange={(e) => set("attendance", Number(e.target.value))}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-stone-500 mb-1">Tgl Masuk</label>
          <input
            type="date"
            className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-600 transition-colors"
            value={form.joinDate}
            onChange={(e) => set("joinDate", e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-2 border-t border-stone-100">
        <button
          onClick={onCancel}
          className="px-4 py-2 text-sm text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
        >
          Batal
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-stone-800 transition-colors disabled:opacity-50"
        >
          {loading ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </div>
  )
}
