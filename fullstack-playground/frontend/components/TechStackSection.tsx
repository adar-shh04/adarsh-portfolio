"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiVite,
  SiAxios,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiFlask,
  SiTensorflow,
  SiKeras,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiDocker,
} from "react-icons/si";

const frontendTech = [
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiReact, label: "React" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiVite, label: "Vite" },
  { icon: SiAxios, label: "Axios" },
];

const backendTech = [
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiPython, label: "Python" },
  { icon: SiFastapi, label: "FastAPI" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiRedis, label: "Redis" },
  { icon: SiDocker, label: "Docker" },
];

const mlTech = [
  { icon: SiTensorflow, label: "TensorFlow" },
  { icon: SiKeras, label: "Keras" },
];

function FloatingIcon({
  Icon,
  label,
  index,
}: {
  Icon: any;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={false}
      animate={{ y: [0, -6, 0] }}
      transition={{
        duration: 3.2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.12,
      }}
    >
      <div className="transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_14px_rgba(16,185,129,0.55)]">
        <Icon size={40} className="text-white" />
      </div>
      <span className="text-sm text-white/75">{label}</span>
    </motion.div>
  );
}

function TechCard({ title, tech }: { title: string; tech: any[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(16,185,129,0.08)]">
      <div className="p-8 md:p-10">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <div className="h-px flex-1 bg-gradient-to-r from-emerald-400/40 to-transparent" />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
          {tech.map(({ icon: Icon, label }, i) => (
            <FloatingIcon key={label} Icon={Icon} label={label} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="scroll-mt-24 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Tech I Work With
        </h2>

        <div className="space-y-8">
          <TechCard title="Frontend" tech={frontendTech} />
          <TechCard title="Backend" tech={backendTech} />
          <TechCard title="Machine Learning" tech={mlTech} />
        </div>
      </div>
    </section>
  );
}
