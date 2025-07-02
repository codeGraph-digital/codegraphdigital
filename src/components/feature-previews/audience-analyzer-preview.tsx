"use client";

import { motion } from "framer-motion";

const chartData = [
  { name: "18-24", value: 40 },
  { name: "25-34", value: 75 },
  { name: "35-44", value: 50 },
  { name: "45+", value: 25 },
];

export function AudienceAnalyzerPreview() {
  return (
    <div className="flex h-full w-full items-end justify-center gap-2 p-2">
      {chartData.map((item, i) => (
        <div key={item.name} className="flex flex-1 flex-col items-center gap-1">
          <motion.div
            className="w-full rounded-t-sm bg-primary/50"
            initial={{ height: "0%" }}
            animate={{ height: `${item.value}%` }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          />
          <span className="text-[10px] text-muted-foreground">{item.name}</span>
        </div>
      ))}
    </div>
  );
}