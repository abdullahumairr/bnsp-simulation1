"use client"
import Header from "@/components/Header"
import { schedule } from "@/data/students"

export default function CoursesPage() {
  return (
    <div className="flex-1 overflow-y-auto">
      <Header title="Mata Pelajaran" subtitle="Daftar pelajaran aktif semester ini" />

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {schedule.map((s) => (
            <div key={s.id} className="bg-white border border-stone-200 rounded-xl p-5 hover:border-stone-400 transition-all group">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-stone-900">{s.subject}</p>
                  <p className="text-xs text-stone-400 mt-0.5">{s.teacher}</p>
                </div>
                <span className="text-[10px] bg-stone-100 text-stone-500 px-2 py-1 rounded font-mono">{s.day}</span>
              </div>
              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-400">
                <span>{s.time}</span>
                <span>{s.room}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
