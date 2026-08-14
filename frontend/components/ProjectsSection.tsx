"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
  details?: string[];
};

const projects: Project[] = [
  {
    title: "Vitamin Vision",
    description:
      "Micronutrient deficiency detection with a clean ML pipeline + inference integration.",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
    image: "/projects/vitamin-vision.svg",
    github: "https://github.com/afk-adarsh/Vitamin-Vision",
    details: [
      "Structured training + evaluation pipeline",
      "Inference-ready backend integration",
      "Clear separation of data / model / serving",
    ],
  },
  {
    title: "Data Sensei",
    description:
      "Natural language to SQL dashboard for synthetic gym supplement consumption data — ask questions, get instant insights.",
    tech: ["Python", "SQL", "NLP", "Streamlit"],
    image: "/projects/portfolio.svg",
    github: "https://github.com/afk-adarsh/Data-Sensei",
    details: [
      "Natural language query interface powered by LLM-to-SQL translation",
      "Synthetic dataset modelling gym supplement consumption in Indore",
      "Interactive dashboard with real-time query results and visualisations",
    ],
  },
  {
    title: "LogisticsAuto",
    description:
      "Industry-grade supply chain automation using OCR, Gemini NLP, and anomaly detection.",
    tech: ["FastAPI", "PostgreSQL", "Redis", "Docker", "Gemini AI"],
    image: "/projects/workflow.svg",
    github: "https://github.com/afk-adarsh/logistics-automation",
    details: [
      "AI-driven document parsing via Google Gemini",
      "Distributed task queue with Redis & Celery",
      "Production-ready anomaly detection for risk scoring",
    ],
  },
  {
    title: "Telco Customer Intelligence",
    description:
      "End-to-end customer intelligence dashboard for telecom churn analysis, segmentation, and revenue impact modelling.",
    tech: ["Python", "Pandas", "Scikit-learn", "Plotly", "Streamlit"],
    image: "/projects/workflow.svg",
    github: "https://github.com/afk-adarsh/Telco-Customer-Intelligence-Dashboard",
    details: [
      "Customer churn prediction with ML classification models",
      "RFM segmentation and cohort-based revenue analysis",
      "Interactive Streamlit dashboard with drill-down filters",
    ],
  },
  {
    title: "Financial Risk Intelligence System",
    description:
      "Enterprise ML pipeline combining ensemble models, Monte Carlo VaR, and SHAP explainability for customer churn risk analytics.",
    tech: ["Python", "XGBoost", "LightGBM", "SHAP", "Streamlit", "Plotly"],
    image: "/projects/financial-risk.svg",
    github: "https://github.com/afk-adarsh/Financial-Risk-Intelligence-System",
    details: [
      "Ensemble model (XGBoost + LightGBM + Random Forest) with isotonic calibration",
      "Monte Carlo VaR with 10,000 simulations for 95% portfolio Value at Risk",
      "SHAP explainability — global beeswarm & per-customer waterfall breakdowns",
      "Stress testing across 4 macro scenarios + auto-generated PDF consultancy report",
    ],
  },
];

export default function ProjectsSection() {
  const [open, setOpen] = useState<Project | null>(null);

  const grid = useMemo(() => projects, []);

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-white/5 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <p className="text-emerald-300 text-sm tracking-[0.3em] uppercase mb-4">
            Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Selected work
          </h2>
          <p className="text-white/65 mt-4 max-w-2xl leading-relaxed">
            A few projects that show how I build: clarity, performance, and shippable systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {grid.map((p, idx) => (
            <motion.button
              key={p.title}
              type="button"
              onClick={() => setOpen(p)}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
              className="text-left rounded-2xl overflow-hidden
                         bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]
                         border border-white/10
                         shadow-[0_18px_60px_rgba(0,0,0,0.55)]
                         hover:border-emerald-400/30 hover:bg-white/6 transition"
            >
              <div className="relative aspect-[16/9] bg-black/40">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.18),transparent_55%)]" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="text-white/65 mt-2 leading-relaxed">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 text-sm text-emerald-200/90">
                  View details →
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70"
              onClick={() => setOpen(null)}
              aria-label="Close"
            />

            <motion.div
              initial={{ y: 18, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 18, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl rounded-2xl overflow-hidden
                         border border-white/12 bg-[#0B101F]
                         shadow-[0_30px_120px_rgba(0,0,0,0.75)]"
              role="dialog"
              aria-modal="true"
            >
              <div className="relative aspect-[16/9] bg-black/50">
                <Image src={open.image} alt={open.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(16,185,129,0.22),transparent_60%)]" />
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{open.title}</h3>
                    <p className="text-white/65 mt-2 leading-relaxed">{open.description}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(null)}
                    className="rounded-lg px-3 py-2 text-white/70 hover:text-white hover:bg-white/5 transition"
                  >
                    ✕
                  </button>
                </div>

                {open.details?.length ? (
                  <ul className="mt-5 space-y-2 text-white/70">
                    {open.details.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="text-emerald-300">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="flex flex-wrap gap-2 mt-6">
                  {open.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">

                  {open.github ? (
                    <a
                      href={open.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-400/25 text-emerald-200 font-medium hover:bg-emerald-500/25 hover:border-emerald-400/50 transition"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943" />
                      </svg>
                      View on GitHub
                    </a>
                  ) : null}

                  {open.demo ? (
                    <a
                      href={open.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 rounded-xl bg-white/10 text-white font-medium hover:bg-white/15 transition"
                    >
                      Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
