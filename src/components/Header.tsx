"use client"
import { RiNotification3Line, RiSearchLine } from "react-icons/ri"

type Props = {
  title: string
  subtitle?: string
}

export default function Header({ title, subtitle }: Props) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-stone-200">
      <div>
        <h1 className="text-base font-semibold text-stone-900">{title}</h1>
        {subtitle && <p className="text-xs text-stone-400 mt-0.5">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-lg hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors relative">
          <RiNotification3Line className="text-lg" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-black rounded-full"></span>
        </button>
        <div className="flex items-center gap-2 px-3 py-1.5 border border-stone-200 rounded-lg text-sm text-stone-400 cursor-pointer hover:border-stone-400 transition-colors w-48">
          <RiSearchLine />
          <span className="text-xs">Cari apa saja...</span>
        </div>
      </div>
    </header>
  )
}
