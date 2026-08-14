"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  Layers3,
  Server,
} from "lucide-react";

const cardImages = {
  frontend:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ex2YnKIY1pZ1B68fSlTvI9nHczZ0je.png",
  backend:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Du4vLRTMTC8zHjshDgxaPup7G8P9du.png",
  data:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ex2YnKIY1pZ1B68fSlTvI9nHczZ0je.png",
  ai:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Du4vLRTMTC8zHjshDgxaPup7G8P9du.png",
};

const techCards = [
  {
    title: "Frontend",
    eyebrow: "01 / INTERFACE",
    description: "Product surfaces that feel fast, clear, and intentional.",
    icon: Layers3,
    image: cardImages.frontend,
    tone: "from-cyan-200/80 via-teal-200/35 to-slate-900/60",
    filter: "",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript / ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Context API",
      "Figma → Code",
      "Streamlit",
      "Plotly",
    ],
  },
  {
    title: "Backend & APIs",
    eyebrow: "02 / SYSTEMS",
    description: "Modular services, APIs, jobs, and integrations built to scale.",
    icon: Server,
    image: cardImages.backend,
    tone: "from-orange-200/75 via-amber-200/30 to-slate-950/65",
    filter: "hue-rotate-[95deg]",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "REST APIs",
      "Python",
      "Celery",
      "Redis",
      "Docker",
      "Docker Compose",
      "Structured logging",
      "Exception handling",
      "Instrumentation",
    ],
  },
  {
    title: "Databases",
    eyebrow: "03 / DATA LAYER",
    description: "Reliable persistence with clear boundaries and safe access patterns.",
    icon: Database,
    image: cardImages.data,
    tone: "from-indigo-200/75 via-blue-200/30 to-slate-950/70",
    filter: "hue-rotate-[175deg]",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Mongoose",
      "SQL",
      "Better Auth",
      "Authentication",
      "Authorization",
      "Multi-tenant isolation",
      "Session-based auth",
      "API authorization",
      "Prisma migrations",
    ],
  },
  {
    title: "AI / ML",
    eyebrow: "04 / INTELLIGENCE",
    description: "Models and analytics that turn complex signals into decisions.",
    icon: BrainCircuit,
    image: cardImages.ai,
    tone: "from-lime-200/75 via-emerald-200/30 to-slate-950/70",
    filter: "hue-rotate-[245deg]",
    items: [
      "pandas",
      "scikit-learn",
      "TensorFlow",
      "CNNs",
      "Isolation Forest",
      "Propensity modeling",
      "Churn prediction",
      "SHAP / explainable AI",
      "Monte Carlo simulation",
      "Value-at-Risk (VaR)",
      "Stress testing",
      "Risk scoring",
      "Recommendation systems",
    ],
  },
  {
    title: "DevOps & Practice",
    eyebrow: "05 / DELIVERY",
    description: "Shipping habits and infrastructure that keep work maintainable.",
    icon: ArrowUpRight,
    image: cardImages.frontend,
    tone: "from-rose-200/70 via-fuchsia-200/25 to-slate-950/70",
    filter: "hue-rotate-[285deg]",
    items: [
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Jest",
      "Unit testing",
      "SOLID principles",
      "Clean Architecture",
      "Dependency Injection",
      "Modular architecture",
      "Code reviews",
      "Agile",
      "Git",
      "GitHub",
      "Cursor",
      "Claude Code",
      "VS Code",
      "npm / pnpm",
      "Turborepo",
    ],
  },
];

function TechCard({ card, index }: { card: (typeof techCards)[number]; index: number }) {
  const Icon = card.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group relative min-h-[27rem] overflow-hidden rounded-[1.6rem] border border-white/15 bg-slate-950 shadow-2xl shadow-black/20"
    >
      <img
        src={card.image}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-cover opacity-85 mix-blend-screen transition duration-700 group-hover:scale-105 ${card.filter}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${card.tone}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_80%,rgba(255,255,255,0.32),transparent_28%),linear-gradient(180deg,transparent_28%,rgba(2,6,23,0.88)_100%)]" />

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full border border-black/10 bg-white/35 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-slate-900/75 backdrop-blur-sm">
            {card.eyebrow}
          </span>
          <div className="rounded-full border border-white/30 bg-slate-950/45 p-2.5 text-white backdrop-blur-sm transition group-hover:rotate-12">
            <Icon size={18} strokeWidth={1.7} />
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-white">{card.title}</h3>
          <p className="mt-2 max-w-xs text-sm leading-6 text-white/75">{card.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {card.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-slate-950/45 px-2.5 py-1 text-[11px] font-medium text-white/85 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-emerald-300">03 / toolkit</p>
            <h2 className="mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Everything I use to turn ideas into shipped systems.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/55">
            A living map of the languages, platforms, patterns, and practices I have worked with across product and data projects.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techCards.map((card, index) => (
            <TechCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
