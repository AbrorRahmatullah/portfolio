"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { ExternalLink, Code2, Database, Cpu, Globe, Link2, LayoutGrid } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

type Project = {
  title: string;
  description: string;
  problem: string;
  tech: string[];
  category: string;
  github: string;
  demo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "iDEB SLIK Reader",
    description:
      "Automated system for reading and processing iDEB SLIK credit bureau data files. Parses complex financial data formats, validates entries against business rules, and persists structured results to SQL Server.",
    problem: "Manual processing of SLIK files was error-prone and took hours per batch.",
    tech: ["Python", "Flask", "Pandas", "SQL Server", "Background Jobs"],
    category: "Data Engineering",
    github: "https://github.com/AbrorRahmatullah",
    featured: true,
  },
  {
    title: "SSOT Platform",
    description:
      "Internal Single Source of Truth platform for centralising company documents, regulations, and procedures. Provides structured access and consistent information across all departments.",
    problem: "Fragmented knowledge across teams led to inconsistencies and duplication.",
    tech: ["Python", "Flask", "SQL Server", "JavaScript"],
    category: "Enterprise App",
    github: "https://github.com/AbrorRahmatullah",
    featured: true,
  },
  {
    title: "AI Chatbot PoC",
    description:
      "Proof-of-concept internal chatbot powered by a Local LLM via Ollama. Implements a Retrieval-Augmented Generation pipeline using FAISS for vector search and HuggingFace embeddings.",
    problem: "Need to make internal knowledge accessible via natural language without cloud APIs.",
    tech: ["Flask", "Ollama", "FAISS", "HuggingFace", "DeepSeek"],
    category: "AI / LLM",
    github: "https://github.com/AbrorRahmatullah",
    featured: true,
  },
  {
    title: "Order Management System",
    description:
      "Full-featured OMS for a logistics company. Manages charter vessel bookings, commercial orders, logistics workflow states, and operational monitoring dashboards.",
    problem: "No centralised system for managing diverse order types in a logistics operation.",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    category: "Fullstack Web",
    github: "https://github.com/AbrorRahmatullah",
  },
  {
    title: "Odoo Integration API",
    description:
      "REST API middleware that bridges internal logistics systems with Odoo ERP. Handles authentication, data transformation, and bidirectional synchronisation with robust error handling.",
    problem: "Manual data re-entry between internal system and ERP caused delays and errors.",
    tech: ["Django REST Framework", "FastAPI", "Odoo", "Python"],
    category: "API / Integration",
    github: "https://github.com/AbrorRahmatullah",
  },
];

const allCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const categoryConfig: Record<string, { color: string; icon: React.ElementType }> = {
  "Data Engineering": { color: "var(--accent-teal)", icon: Database },
  "Enterprise App":  { color: "var(--accent-blue)", icon: LayoutGrid },
  "AI / LLM":        { color: "#f472b6",            icon: Cpu },
  "Fullstack Web":   { color: "var(--accent-purple)", icon: Globe },
  "API / Integration": { color: "#fb923c",           icon: Link2 },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.46, ease: [0.34, 1.06, 0.64, 1] } },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" ref={ref} style={{ padding: "100px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.48 }}
        >
          <p className="section-label">Projects</p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: 32,
            }}
          >
            <div>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)", lineHeight: 1.1, marginBottom: 8 }}
              >
                Things I&apos;ve built
              </h2>
              <p style={{ color: "var(--fg-muted)", fontSize: "var(--text-base)" }}>
                Internal tools that replaced manual processes — used daily by real teams.
              </p>
            </div>
            <a
              href="https://github.com/AbrorRahmatullah"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: "var(--text-sm)", padding: "8px 16px", gap: 6 }}
            >
              <GithubIcon size={14} />
              View GitHub
            </a>
          </div>

          {/* Filter Tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 40 }}>
            {allCategories.map((cat) => {
              const active = activeCategory === cat;
              const cfg = cat !== "All" ? categoryConfig[cat] : null;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "6px 14px",
                    borderRadius: 8,
                    fontSize: "var(--text-sm)",
                    fontWeight: active ? 600 : 500,
                    border: "1px solid",
                    cursor: "pointer",
                    transition: "all 0.18s",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    background: active ? (cfg ? cfg.color : "var(--accent-blue)") : "transparent",
                    borderColor: active ? (cfg ? cfg.color : "var(--accent-blue)") : "var(--border-strong)",
                    color: active ? "white" : "var(--fg-muted)",
                    boxShadow: active ? `0 4px 12px ${cfg ? cfg.color : "var(--accent-blue)"}33` : "none",
                  }}
                >
                  {cfg && !active && <cfg.icon size={11} style={{ color: cfg.color }} />}
                  {cat}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 16,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => {
              const cfg = categoryConfig[project.category] || { color: "var(--accent-blue)", icon: Code2 };
              const CatIcon = cfg.icon;
              return (
                <motion.div
                  key={project.title}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.18 } }}
                  layout
                  className="glass"
                  style={{
                    borderRadius: 14,
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}
                  whileHover={{
                    y: -5,
                    boxShadow: `0 20px 40px rgba(0,0,0,0.35), 0 0 0 1px ${cfg.color}22`,
                  }}
                >
                  {/* Accent top bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0,
                      height: 2,
                      background: `linear-gradient(90deg, ${cfg.color}, transparent)`,
                      opacity: project.featured ? 1 : 0.45,
                    }}
                  />

                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14, gap: 10 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            background: `${cfg.color}15`,
                            border: `1px solid ${cfg.color}28`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <CatIcon size={14} style={{ color: cfg.color }} />
                        </div>
                        <h3
                          className="font-display"
                          style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--fg)", letterSpacing: "-0.01em" }}
                        >
                          {project.title}
                        </h3>
                      </div>
                      <span
                        style={{
                          fontSize: "var(--text-2xs)",
                          fontFamily: "var(--font-mono), monospace",
                          padding: "2px 8px",
                          borderRadius: 999,
                          background: `${cfg.color}12`,
                          border: `1px solid ${cfg.color}28`,
                          color: cfg.color,
                          textTransform: "uppercase",
                          letterSpacing: "0.07em",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        style={{
                          width: 30, height: 30, borderRadius: 7,
                          background: "var(--bg-elevated)",
                          border: "1px solid var(--border)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "var(--fg-muted)",
                          transition: "all 0.18s",
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget;
                          el.style.color = "var(--fg)";
                          el.style.borderColor = "var(--border-accent)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget;
                          el.style.color = "var(--fg-muted)";
                          el.style.borderColor = "var(--border)";
                        }}
                      >
                        <GithubIcon size={13} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} live demo`}
                          style={{
                            width: 30, height: 30, borderRadius: 7,
                            background: "var(--bg-elevated)",
                            border: "1px solid var(--border)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: "var(--fg-muted)",
                            transition: "all 0.18s",
                          }}
                        >
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-muted)", lineHeight: 1.65, marginBottom: 14, flexGrow: 1 }}>
                    {project.description}
                  </p>

                  {/* Problem */}
                  <div
                    style={{
                      padding: "10px 12px",
                      borderRadius: 8,
                      background: "var(--bg-elevated)",
                      border: `1px solid ${cfg.color}18`,
                      marginBottom: 14,
                    }}
                  >
                    <p style={{ fontSize: "var(--text-2xs)", color: cfg.color, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-mono), monospace", marginBottom: 4 }}>
                      Problem Solved
                    </p>
                    <p style={{ fontSize: "var(--text-xs)", color: "var(--fg-muted)", lineHeight: 1.5 }}>
                      {project.problem}
                    </p>
                  </div>

                  {/* Tech */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
