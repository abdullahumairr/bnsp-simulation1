export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ")
}

export function statusColor(status: string) {
  if (status === "active") return "bg-black text-white"
  if (status === "warning") return "bg-yellow-100 text-yellow-800 border border-yellow-200"
  return "bg-stone-100 text-stone-500"
}

export function gradeColor(grade: number) {
  if (grade >= 85) return "text-black font-semibold"
  if (grade >= 70) return "text-stone-700"
  return "text-red-500"
}

export function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric", month: "short", year: "numeric",
  })
}
