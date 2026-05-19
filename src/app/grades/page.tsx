"use client"
import Header from "@/components/Header"
import { students } from "@/data/students"
import { gradeColor, statusColor } from "@/lib/utils"

const ranges = [
  { label: "90–100", min: 90, max: 100, grade: "A" },
  { label: "80–89", min: 80, max: 89, grade: "B" },
  { label: "70–79", min: 70, max: 79, grade: "C" },
  { label: "60–69", min: 60, max: 69, grade: "D" },
  { label: "< 60", min: 0, max: 59, grade: "E" },
]

export default function GradesPage() {
  return (
    <div className="flex-1 overflow-y-auto">
      <Header title="Rekap Nilai" subtitle="Nilai rata-rata semua siswa" />

      <div className="p-6 space-y-5">
        {/* Grade distribution */}
        <div className="bg-white border border-stone-200 rounded-xl p-5">
          <h2 className="text-sm font-semibold mb-4">Distribusi Nilai</h2>
          <div className="space-y-3">
            {ranges.map((r) => {
              const count = students.filter((s) => s.grade >= r.min && s.grade <= r.max).length
              const pct = Math.round((count / students.length) * 100)
              return (
                <div key={r.label} className="flex items-center gap-4">
                  <div className="w-16 text-xs font-mono text-stone-500 shrink-0">
                    <span className="font-semibold text-stone-900">{r.grade}</span>
                    <span className="text-stone-400 ml-1.5">{r.label}</span>
                  </div>
                  <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-black rounded-full transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="w-16 text-right">
                    <span className="text-xs text-stone-500">{count} siswa</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Student grade list */}
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-stone-100">
            <h2 className="text-sm font-semibold">Detail Nilai Siswa</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-100">
                  <th className="text-left px-5 py-3 text-xs text-stone-400 font-medium uppercase tracking-wide">Siswa</th>
                  <th className="text-left px-5 py-3 text-xs text-stone-400 font-medium uppercase tracking-wide">Kelas</th>
                  <th className="text-left px-5 py-3 text-xs text-stone-400 font-medium uppercase tracking-wide">Nilai</th>
                  <th className="text-left px-5 py-3 text-xs text-stone-400 font-medium uppercase tracking-wide">Huruf</th>
                  <th className="text-left px-5 py-3 text-xs text-stone-400 font-medium uppercase tracking-wide">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[...students].sort((a, b) => b.grade - a.grade).map((s) => {
                  const grade = s.grade >= 90 ? "A" : s.grade >= 80 ? "B" : s.grade >= 70 ? "C" : s.grade >= 60 ? "D" : "E"
                  return (
                    <tr key={s.id} className="hover:bg-stone-50 transition-colors">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-medium">
                            {s.avatar}
                          </div>
                          <span className="font-medium">{s.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="font-mono text-xs bg-stone-100 px-2 py-0.5 rounded">{s.class}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className={`font-mono font-semibold ${gradeColor(s.grade)}`}>{s.grade}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="font-mono font-bold text-stone-700">{grade}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${statusColor(s.status)}`}>
                          {s.status === "active" ? "Aktif" : s.status === "warning" ? "Perhatian" : "Nonaktif"}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
