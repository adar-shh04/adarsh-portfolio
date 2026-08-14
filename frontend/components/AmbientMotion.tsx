"use client";

const arrows = [
  { left: "7%", top: "22%", delay: "0s", duration: "22s", rotate: "-18deg" },
  { left: "72%", top: "16%", delay: "-8s", duration: "28s", rotate: "14deg" },
  { left: "44%", top: "68%", delay: "-15s", duration: "25s", rotate: "-8deg" },
];

const streaks = [
  { left: "18%", top: "38%", delay: "-3s", duration: "18s", rotate: "-28deg" },
  { left: "82%", top: "62%", delay: "-11s", duration: "21s", rotate: "-22deg" },
  { left: "58%", top: "86%", delay: "-7s", duration: "24s", rotate: "-30deg" },
];

export default function AmbientMotion() {
  return (
    <div className="ambient-motion" aria-hidden="true">
      {arrows.map((arrow, index) => (
        <span
          key={`arrow-${index}`}
          className="ambient-arrow"
          style={{
            left: arrow.left,
            top: arrow.top,
            animationDelay: arrow.delay,
            animationDuration: arrow.duration,
            transform: `rotate(${arrow.rotate})`,
          }}
        />
      ))}
      {streaks.map((streak, index) => (
        <span
          key={`streak-${index}`}
          className="ambient-streak"
          style={{
            left: streak.left,
            top: streak.top,
            animationDelay: streak.delay,
            animationDuration: streak.duration,
            transform: `rotate(${streak.rotate})`,
          }}
        />
      ))}
    </div>
  );
}
