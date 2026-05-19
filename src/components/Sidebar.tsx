"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  RiDashboardLine, RiGroupLine, RiCalendarLine,
  RiBarChartLine, RiSettings3Line, RiBookOpenLine,
} from "react-icons/ri"

const nav = [
  { href: "/", label: "Overview", icon: RiDashboardLine },
  { href: "/students", label: "Siswa", icon: RiGroupLine },
  { href: "/schedule", label: "Jadwal", icon: RiCalendarLine },
  { href: "/grades", label: "Nilai", icon: RiBarChartLine },
  { href: "/courses", label: "Mata Pelajaran", icon: RiBookOpenLine },
]

export default function Sidebar() {
  const path = usePathname()

  return (
    <aside className="w-56 bg-[#111110] text-white flex flex-col h-screen sticky top-0 shrink-0">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-white rounded-md flex items-center justify-center">
            <span className="text-black text-xs font-bold">E</span>
          </div>
          <span className="font-semibold text-sm tracking-tight">EduTrack</span>
        </div>
        <p className="text-white/30 text-[11px] mt-1 ml-9">SMAN 12 Jakarta</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <p className="text-white/30 text-[10px] font-medium uppercase tracking-widest px-2 mb-2">Menu</p>
        {nav.map(({ href, label, icon: Icon }) => {
          const active = path === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
                active
                  ? "bg-white text-black font-medium"
                  : "text-white/60 hover:text-white hover:bg-white/8"
              }`}
            >
              <Icon className="text-base shrink-0" />
              {label}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-4 border-t border-white/10 pt-3">
        <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-white/40 hover:text-white hover:bg-white/8 transition-all">
          <RiSettings3Line className="text-base" />
          Pengaturan
        </Link>
        <div className="flex items-center gap-2.5 px-3 mt-3">
          <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center text-xs font-medium text-white">
            AD
          </div>
          <div>
            <p className="text-xs font-medium text-white/80">Admin</p>
            <p className="text-[10px] text-white/30">admin@school.id</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
