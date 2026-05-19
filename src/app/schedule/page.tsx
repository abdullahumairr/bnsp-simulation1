"use client"
import Header from "@/components/Header"
import { schedule } from "@/data/students"
import { RiTimeLine, RiMapPinLine, RiUserLine } from "react-icons/ri"

const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]

export default function SchedulePage() {
  return (
    <div className="flex-1 overflow-y-auto">
      <Header title="Jadwal Pelajaran" subtitle="Tahun Ajaran 2024/2025 — Semester 2" />

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {days.map((day) => {
            const daySchedule = schedule.filter((s) => s.day === day)
            return (
              <div key={day} className="bg-white border border-stone-200 rounded-xl overflow-hidden">
                <div className="px-4 py-3 border-b border-stone-100 bg-stone-50">
                  <p className="text-xs font-semibold text-stone-900 uppercase tracking-wide">{day}</p>
                </div>
                <div className="p-3 space-y-2">
                  {daySchedule.length === 0 ? (
                    <p className="text-xs text-stone-400 py-4 text-center">Tidak ada jadwal</p>
                  ) : (
                    daySchedule.map((s) => (
                      <div key={s.id} className="p-3 rounded-lg border border-stone-100 hover:border-stone-300 transition-colors">
                        <p className="text-sm font-semibold text-stone-900">{s.subject}</p>
                        <div className="mt-1.5 space-y-1">
                          <p className="flex items-center gap-1.5 text-[11px] text-stone-500">
                            <RiUserLine /> {s.teacher}
                          </p>
                          <p className="flex items-center gap-1.5 text-[11px] text-stone-500">
                            <RiTimeLine /> {s.time}
                          </p>
                          <p className="flex items-center gap-1.5 text-[11px] text-stone-500">
                            <RiMapPinLine /> {s.room}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
