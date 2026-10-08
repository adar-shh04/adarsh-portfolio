"use client";

import { Pause, Play, Volume2 } from "lucide-react";
import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[.04] px-2 py-1.5 text-white/60" aria-label="Portfolio music player">
      <audio ref={audioRef} src="/audio/portfolio-track.webm" onEnded={() => setPlaying(false)} preload="metadata" />
      <button type="button" onClick={toggle} className="icon-button h-8 w-8" aria-label={playing ? "Pause music" : "Play music"}>
        {playing ? <Pause size={14} /> : <Play size={14} />}
      </button>
      <span className="hidden items-center gap-1.5 pr-1 text-[10px] uppercase tracking-[.16em] text-white/40 sm:inline-flex"><Volume2 size={12} /> sound</span>
    </div>
  );
}
