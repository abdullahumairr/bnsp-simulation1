"use client";
import Header from "@/components/Header";

export default function SettingsPage() {
  return (
    <div className="flex-1 overflow-y-auto">
      <Header title="Pengaturan" subtitle="Konfigurasi akun dan sistem" />
      <div className="p-6 max-w-xl">
        <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-5">
          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1">
              Nama Sekolah
            </label>
            <input
              className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-600"
              defaultValue="SMAN 12 Jakarta"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1">
              Tahun Ajaran
            </label>
            <input
              className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-600"
              defaultValue="2024/2025"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-500 mb-1">
              Email Admin
            </label>
            <input
              className="w-full border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-stone-600"
              defaultValue="admin@school.id"
            />
          </div>
          <button className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-stone-800 transition-colors">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}
