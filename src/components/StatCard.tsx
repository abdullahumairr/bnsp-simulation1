type Props = {
  label: string
  value: string | number
  sub?: string
  icon?: React.ReactNode
  loading?: boolean
}

export default function StatCard({ label, value, sub, icon, loading }: Props) {
  if (loading) {
    return (
      <div className="bg-white border border-stone-200 rounded-xl p-5">
        <div className="skeleton h-3 w-20 rounded mb-4"></div>
        <div className="skeleton h-7 w-16 rounded mb-1"></div>
        <div className="skeleton h-2.5 w-24 rounded"></div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-stone-200 rounded-xl p-5 hover:border-stone-400 transition-colors group">
      <div className="flex items-start justify-between mb-3">
        <p className="text-xs text-stone-400 font-medium uppercase tracking-wide">{label}</p>
        {icon && (
          <div className="text-stone-300 group-hover:text-stone-600 transition-colors text-xl">
            {icon}
          </div>
        )}
      </div>
      <p className="text-2xl font-semibold text-stone-900 tracking-tight">{value}</p>
      {sub && <p className="text-xs text-stone-400 mt-1">{sub}</p>}
    </div>
  )
}
