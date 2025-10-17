"use client";

import { useEffect, useState } from "react";

const Countdown = ({ targetDate, photoSrc }: { targetDate: string, photoSrc: string }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / (1000 * 60)) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full flex flex-col items-center py-10 px-4">
      {/* Box berisi foto + judul + countdown */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm w-full text-center">
        {/* Foto aspect ratio 2:3 */}
        <div className="w-full aspect-[2/3] overflow-hidden">
          <img
            src={photoSrc}
            alt="Countdown"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Judul di dalam box */}
        <h2 className="text-4xl md:text-3xl font-elegant text-mono-900 mt-6">
          COUNTING DAYS
        </h2>

        {/* Countdown kotak-kotak */}
        <div className="flex justify-center gap-3 mt-6 mb-8 px-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-mono-900 text-mono-50 rounded-lg px-4 py-3 flex flex-col items-center min-w-[70px]"
            >
              <span className="text-2xl font-bold">{value ?? 0}</span>
              <span className="text-xs uppercase">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;
