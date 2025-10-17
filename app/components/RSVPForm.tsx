'use client'
import { useState } from "react";

export default function RSVPForm() {
  const [form, setForm] = useState({ name: "", status: "Hadir", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return;

    setLoading(true);
    setSuccess(false);

    await fetch("/api/guests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ name: "", status: "Hadir", message: "" });
    setLoading(false);
    setSuccess(true);

    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <section
      id="rsvp"
      className="relative py-20 px-6 bg-[url('/images/bg-blur.jpg')] bg-cover bg-center bg-fixed"
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-3xl" />

      <div className="relative max-w-lg mx-auto text-center">
        <h2 className="text-5xl font-dancing mb-4 text-gray-800">Wedding Wish</h2>
        <p className="text-gray-600 mb-10">
          Mohon konfirmasi kehadiran kamu dan tinggalkan ucapan terbaik 💖
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
        >
          <input
            type="text"
            placeholder="Nama kamu"
            className="w-full p-3 mb-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <select
            className="w-full p-3 mb-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </select>

          <textarea
            placeholder="Tulis ucapan (opsional)"
            className="w-full p-3 mb-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            rows={3}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 active:scale-95 transition"
          >
            {loading ? "Mengirim..." : "Kirim Ucapan"}
          </button>

          {success && (
            <p className="mt-3 text-green-700 text-sm font-medium">
              Ucapan kamu berhasil dikirim 💌
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
