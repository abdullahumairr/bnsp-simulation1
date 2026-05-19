import { useState, useMemo } from "react"
import { students as initialData, Student } from "@/data/students"

export function useStudents() {
  const [data, setData] = useState<Student[]>(initialData)
  const [search, setSearch] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [filterClass, setFilterClass] = useState<string>("all")
  const [loading, setLoading] = useState(false)

  const filtered = useMemo(() => {
    return data.filter((s) => {
      const matchSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.email.toLowerCase().includes(search.toLowerCase()) ||
        s.id.toLowerCase().includes(search.toLowerCase())
      const matchStatus = filterStatus === "all" || s.status === filterStatus
      const matchClass = filterClass === "all" || s.class === filterClass
      return matchSearch && matchStatus && matchClass
    })
  }, [data, search, filterStatus, filterClass])

  const addStudent = (student: Omit<Student, "id">) => {
    const newId = `S${String(data.length + 1).padStart(3, "0")}`
    setData((prev) => [...prev, { ...student, id: newId }])
  }

  const updateStudent = (id: string, updates: Partial<Student>) => {
    setData((prev) => prev.map((s) => (s.id === id ? { ...s, ...updates } : s)))
  }

  const deleteStudent = (id: string) => {
    setData((prev) => prev.filter((s) => s.id !== id))
  }

  const simulateLoading = (cb: () => void) => {
    setLoading(true)
    setTimeout(() => {
      cb()
      setLoading(false)
    }, 600)
  }

  const stats = {
    total: data.length,
    active: data.filter((s) => s.status === "active").length,
    warning: data.filter((s) => s.status === "warning").length,
    avgGrade: Math.round(data.reduce((a, b) => a + b.grade, 0) / data.length),
  }

  return {
    students: filtered,
    allStudents: data,
    search, setSearch,
    filterStatus, setFilterStatus,
    filterClass, setFilterClass,
    loading,
    stats,
    addStudent: (s: Omit<Student, "id">) => simulateLoading(() => addStudent(s)),
    updateStudent: (id: string, u: Partial<Student>) => simulateLoading(() => updateStudent(id, u)),
    deleteStudent: (id: string) => simulateLoading(() => deleteStudent(id)),
  }
}
