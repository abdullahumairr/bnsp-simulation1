"use client"
import { useState } from "react"
import Header from "@/components/Header"
import Modal from "@/components/Modal"
import StudentForm from "@/components/StudentForm"
import { useStudents } from "@/hooks/useStudents"
import { classes, Student } from "@/data/students"
import { statusColor, gradeColor, formatDate } from "@/lib/utils"
import {
  RiSearchLine, RiAddLine, RiEditLine, RiDeleteBinLine,
  RiFilterLine,
} from "react-icons/ri"

type ModalState =
  | { type: "add" }
  | { type: "edit"; student: Student }
  | { type: "delete"; student: Student }
  | null

export default function StudentsPage() {
  const {
    students, search, setSearch,
    filterStatus, setFilterStatus,
    filterClass, setFilterClass,
    loading, addStudent, updateStudent, deleteStudent,
  } = useStudents()

  const [modal, setModal] = useState<ModalState>(null)

  return (
    <div className="flex-1 overflow-y-auto">
      <Header title="Data Siswa" subtitle={`${students.length} siswa ditemukan`} />

      <div className="p-6 space-y-4">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 border border-stone-200 rounded-lg px-3 py-2 bg-white flex-1 min-w-[200px]">
            <RiSearchLine className="text-stone-400 shrink-0" />
            <input
              className="text-sm flex-1 outline-none placeholder:text-stone-400"
              placeholder="Cari nama, email, NIS..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <RiFilterLine className="text-stone-400" />
            <select
              className="border border-stone-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:border-stone-400"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">Semua Status</option>
              <option value="active">Aktif</option>
              <option value="warning">Perhatian</option>
              <option value="inactive">Nonaktif</option>
            </select>
            <select
              className="border border-stone-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:border-stone-400"
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value)}
            >
              <option value="all">Semua Kelas</option>
              {classes.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>

          <button
            onClick={() => setModal({ type: "add" })}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-stone-800 transition-colors"
          >
            <RiAddLine />
            Tambah Siswa
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
          {loading ? (
            <div className="p-6 space-y-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="skeleton h-10 rounded-lg" />
              ))}
            </div>
          ) : students.length === 0 ? (
            <div className="flex flex-col items-center py-16 text-stone-400">
              <span className="text-4xl mb-3">🔍</span>
              <p className="font-medium text-sm">Tidak ada siswa ditemukan</p>
              <p className="text-xs mt-1">Coba ubah filter atau kata kunci pencarian</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-100 bg-stone-50">
                    <th className="text-left px-5 py-3 text-xs font-medium text-stone-400 uppercase tracking-wide">Siswa</th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-stone-400 uppercase tracking-wide">Kelas</th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-stone-400 uppercase tracking-wide">Nilai</th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-stone-400 uppercase tracking-wide">Kehadiran</th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-stone-400 uppercase tracking-wide">Status</th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-stone-400 uppercase tracking-wide">Tgl Masuk</th>
                    <th className="px-5 py-3"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {students.map((s) => (
                    <tr key={s.id} className="hover:bg-stone-50 transition-colors group">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-medium shrink-0">
                            {s.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-stone-900">{s.name}</p>
                            <p className="text-xs text-stone-400">{s.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="font-mono text-xs bg-stone-100 px-2 py-0.5 rounded">{s.class}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className={`font-mono ${gradeColor(s.grade)}`}>{s.grade}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${s.attendance >= 85 ? "bg-black" : s.attendance >= 75 ? "bg-yellow-500" : "bg-red-400"}`}
                              style={{ width: `${s.attendance}%` }}
                            />
                          </div>
                          <span className="text-xs text-stone-500">{s.attendance}%</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${statusColor(s.status)}`}>
                          {s.status === "active" ? "Aktif" : s.status === "warning" ? "Perhatian" : "Nonaktif"}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-xs text-stone-400">{formatDate(s.joinDate)}</td>
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => setModal({ type: "edit", student: s })}
                            className="p-1.5 rounded hover:bg-stone-200 text-stone-400 hover:text-stone-700 transition-colors"
                          >
                            <RiEditLine />
                          </button>
                          <button
                            onClick={() => setModal({ type: "delete", student: s })}
                            className="p-1.5 rounded hover:bg-red-50 text-stone-400 hover:text-red-500 transition-colors"
                          >
                            <RiDeleteBinLine />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Add modal */}
      <Modal open={modal?.type === "add"} onClose={() => setModal(null)} title="Tambah Siswa Baru">
        <StudentForm
          onSubmit={(data) => { addStudent(data); setModal(null) }}
          onCancel={() => setModal(null)}
          loading={loading}
        />
      </Modal>

      {/* Edit modal */}
      {modal?.type === "edit" && (
        <Modal open onClose={() => setModal(null)} title="Edit Data Siswa">
          <StudentForm
            initial={modal.student}
            onSubmit={(data) => { updateStudent(modal.student.id, data); setModal(null) }}
            onCancel={() => setModal(null)}
            loading={loading}
          />
        </Modal>
      )}

      {/* Delete modal */}
      {modal?.type === "delete" && (
        <Modal open onClose={() => setModal(null)} title="Hapus Siswa">
          <p className="text-sm text-stone-600 mb-5">
            Yakin ingin menghapus data <strong>{modal.student.name}</strong>? Tindakan ini tidak dapat dibatalkan.
          </p>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setModal(null)}
              className="px-4 py-2 text-sm text-stone-600 hover:bg-stone-100 rounded-lg transition-colors"
            >
              Batal
            </button>
            <button
              onClick={() => { deleteStudent(modal.student.id); setModal(null) }}
              disabled={loading}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
            >
              {loading ? "Menghapus..." : "Hapus"}
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}
