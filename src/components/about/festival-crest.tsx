"use client";

import { motion } from "motion/react";

const TRIANGLES = [
  { points: "25,135 45,95 55,135", fill: "#f5e700" },
  { points: "55,135 70,80 85,135", fill: "#ba1a1a" },
  { points: "85,135 100,70 115,135", fill: "#2e3192" },
  { points: "115,135 130,80 145,135", fill: "#37c168" },
  { points: "145,135 155,95 175,135", fill: "#f5e700" },
];
const RAYS: [number, number][] = [
  [100, 85],
  [80, 88],
  [120, 88],
  [62, 98],
  [138, 98],
  [50, 114],
  [150, 114],
];

/**
 * "Cikoza Sizwe" crest (an SVG take on the festival emblem). It assembles itself when mounted:
 * the arch rises, beadwork triangles pop up in sequence, rays draw out and the sun settles last.
 */
export function FestivalCrest({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" role="img" aria-label="Cikoza Sizwe festival crest">
      <motion.path
        d="M 20 140 A 80 80 0 0 1 180 140 Z"
        fill="#111111"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{ originX: "50%", originY: "100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
      />
      {TRIANGLES.map((t, i) => (
        <motion.polygon
          key={t.points}
          points={t.points}
          fill={t.fill}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          style={{ originY: "135px", transformBox: "view-box" }}
          transition={{ delay: 0.15 + i * 0.07, type: "spring", stiffness: 380, damping: 16 }}
        />
      ))}
      <motion.path
        d="M 45 140 A 55 55 0 0 1 155 140 Z"
        fill="#ffffff"
        stroke="#111111"
        strokeWidth="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      />
      <g stroke="#111111" strokeWidth="2.5" strokeLinecap="round">
        {RAYS.map(([x2, y2], i) => (
          <motion.line
            key={i}
            x1="100"
            y1="140"
            x2={x2}
            y2={y2}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.45 + i * 0.05, duration: 0.4 }}
          />
        ))}
      </g>
      <motion.circle
        cx="100"
        cy="140"
        r="30"
        fill="#ba1a1a"
        stroke="#ffffff"
        strokeWidth="3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{ originX: "100px", originY: "140px", transformBox: "view-box" }}
        transition={{ delay: 0.75, type: "spring", stiffness: 300, damping: 14 }}
      />
    </svg>
  );
}
