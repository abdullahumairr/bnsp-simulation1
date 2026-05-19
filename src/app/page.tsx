"use client"
import { useState } from "react"
import Header from "@/components/Header"
import StatCard from "@/components/StatCard"
import { activities, schedule } from "@/data/students"
import { useStudents } from "@/hooks/useStudents"
import {
  RiGroupLine, RiCheckLine, RiAlertLine, RiBarChartLine,
  RiTimeLine, RiAddLine, RiMapPinLine,
} from "react-icons/ri"
import { statusColor, gradeColor } from "@/lib/utils"
import Link from "next/link"

const activityIcon = { grade: "📝", enrollment: "🎓", alert: "⚠️", note: "💬" }

export default function DashboardPage() {
  const { students, stats, loading } = useStudents()

  return (
    <div className="flex-1 overflow-y-auto">
      <Header
        title="Overview"
        subtitle={`Senin, ${new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}`}
      />

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total Siswa" value={stats.total} sub="Tahun ajaran 2024/25" icon={<RiGroupLine />} loading={loading} />
          <StatCard label="Siswa Aktif" value={stats.active} sub={`${Math.round(stats.active / stats.total * 100)}% dari total`} icon={<RiCheckLine />} loading={loading} />
          <StatCard label="Perlu Perhatian" value={stats.warning} sub="Kehadiran < 80%" icon={<RiAlertLine />} loading={loading} />
          <StatCard label="Rata-rata Nilai" value={stats.avgGrade} sub="Semua kelas" icon={<RiBarChartLine />} loading={loading} />
        </div>

        {/* Middle row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          {/* Recent students */}
          <div className="lg:col-span-2 bg-white border border-stone-200 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
              <h2 className="text-sm font-semibold">Siswa Terbaru</h2>
              <Link href="/students" className="text-xs text-stone-400 hover:text-black transition-colors">
                Lihat semua →
              </Link>
            </div>
            <div className="divide-y divide-stone-100">
              {students.slice(0, 5).map((s) => (
                <div key={s.id} className="flex items-center px-5 py-3 hover:bg-stone-50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-medium shrink-0 mr-3">
                    {s.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-stone-900 truncate">{s.name}</p>
                    <p className="text-xs text-stone-400">{s.class}</p>
                  </div>
                  <div className="flex items-center gap-3 ml-3">
                    <span className={`text-sm font-mono ${gradeColor(s.grade)}`}>{s.grade}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${statusColor(s.status)}`}>
                      {s.status === "active" ? "Aktif" : s.status === "warning" ? "Perhatian" : "Nonaktif"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity feed */}
          <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-stone-100">
              <h2 className="text-sm font-semibold">Aktivitas Terbaru</h2>
            </div>
            <div className="px-5 py-3 space-y-4">
              {activities.map((a) => (
                <div key={a.id} className="flex gap-3">
                  <span className="text-base mt-0.5 shrink-0">{activityIcon[a.type]}</span>
                  <div>
                    <p className="text-xs text-stone-700 leading-relaxed">{a.text}</p>
                    <p className="text-[10px] text-stone-400 mt-1 flex items-center gap-1">
                      <RiTimeLine /> {a.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
            <h2 className="text-sm font-semibold">Jadwal Minggu Ini</h2>
            <Link href="/schedule" className="text-xs text-stone-400 hover:text-black transition-colors">Lihat lengkap →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-stone-100">
            {schedule.map((s) => (
              <div key={s.id} className="p-4 hover:bg-stone-50 transition-colors">
                <p className="text-[10px] font-medium text-stone-400 uppercase tracking-wide">{s.day}</p>
                <p className="text-sm font-semibold text-stone-900 mt-1">{s.subject}</p>
                <p className="text-xs text-stone-500 mt-0.5">{s.teacher}</p>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-stone-400">
                  <RiTimeLine />
                  {s.time}
                </div>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-stone-400">
                  <RiMapPinLine />
                  {s.room}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
