'use client'
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { motion, AnimatePresence } from "framer-motion";


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Guest {
  id: string;
  name: string;
  status: string;
  message?: string;
  created_at?: string;
}

export default function WishList() {
  const [guests, setGuests] = useState<Guest[]>([]);

  useEffect(() => {
    const fetchGuests = async () => {
      const { data } = await supabase
        .from("rsvps")
        .select("*")
        .order("created_at", { ascending: false });
      if (data) setGuests(data);
    };

    fetchGuests();

    // Realtime listener
    const channel = supabase
      .channel("realtime-rsvps")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "rsvps" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setGuests((prev) => [payload.new as Guest, ...prev]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto text-center relative">
        {/* Header */}

        <p className="text-gray-600 mb-14 max-w-xl mx-auto">
          Terima kasih atas doa dan ucapan hangat dari sahabat serta keluarga 💞
        </p>

        {/* Scrollable Container */}
        <div className="relative max-h-[600px] overflow-y-auto pr-2 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {/* Fade top & bottom */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-gray-100 via-gray-100/60 to-transparent z-10" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-gray-100 via-gray-100/60 to-transparent z-10" />

          {/* Cards */}
          <div className="bg-white/20 backdrop-blur-md border-white/30 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-12 pt-2">
            <AnimatePresence>
              {guests.map((g, i) => (
                <motion.div
  key={g.id}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.4, delay: i * 0.05 }}
  className="
    group relative bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl
    p-6 text-left shadow-lg hover:shadow-2xl
    transition-all duration-300 overflow-hidden
  "
>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl" />

                  {/* Decorative line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gray-800 via-gray-400 to-gray-200" />

                  {/* Content */}
                  <p className="font-semibold text-gray-900 relative z-10">
                    {g.name}
                    <span className="ml-2 text-sm text-gray-500">({g.status})</span>
                  </p>

                  {g.message ? (
                    <p className="text-gray-700 mt-3 italic text-sm leading-relaxed relative z-10">
                      “{g.message}”
                    </p>
                  ) : (
                    <p className="text-gray-400 mt-3 italic text-sm relative z-10">
                      (Tanpa pesan)
                    </p>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Empty state */}
        {guests.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 italic mt-12"
          >
            Belum ada ucapan yang masuk 💬
          </motion.p>
        )}
      </div>
    </section>
  );
}
