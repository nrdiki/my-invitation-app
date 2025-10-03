'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function RSVPForm() {
  const [name, setName] = useState('')
  const [attending, setAttending] = useState('yes')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase
      .from('guests')
      .insert([{ name, attending, message }])

    if (error) setStatus('Terjadi kesalahan, coba lagi.')
    else setStatus('Terima kasih, konfirmasi berhasil!')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
      <input 
        type="text" 
        placeholder="Nama" 
        value={name} 
        onChange={e => setName(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <select 
        value={attending} 
        onChange={e => setAttending(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="yes">Hadir</option>
        <option value="no">Tidak Hadir</option>
      </select>
      <textarea 
        placeholder="Pesan" 
        value={message} 
        onChange={e => setMessage(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-mono-900 text-mono-50 px-4 py-2 rounded">
        Kirim
      </button>
      {status && <p className="mt-2">{status}</p>}
    </form>
  )
}
