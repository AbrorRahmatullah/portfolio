"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { ChevronDown, Calendar } from "lucide-react";

type Project = {
  title: string;
  description: string;
  contributions: string[];
  tech: string[];
  impact: string[];
};

type Job = {
  company: string;
  short: string;
  role: string;
  period: string;
  status: "current" | "past";
  description: string;
  projects: Project[];
  color: string;
};

const experience: Job[] = [
  {
    company: "PT Sarana Multi Infrastruktur (Persero)",
    short: "SMI",
    role: "Full-Stack Python Developer & AI Engineer",
    period: "Jan 2025 – Present",
    status: "current",
    color: "var(--accent-blue)",
    description:
      "State-owned infrastructure finance company — building AI-integrated backend systems in a regulated financial environment where data privacy and system reliability are non-negotiable.",
    projects: [
      {
        title: "Single Source of Truth (SSOT)",
        description:
          "Centralized Flask web platform enabling multiple divisions to access and manage consistent data from a single reliable source, with Excel ingestion pipeline, Audit Trail module, and production deployment.",
        contributions: ["Flask & SQLAlchemy Backend", "Excel Ingestion (Pandas, openpyxl)", "Audit Trail & Logging", "Production Deployment (Waitress)"],
        tech: ["Python", "Flask", "SQLAlchemy", "Pandas", "SQL Server", "openpyxl", "Waitress"],
        impact: ["Eliminated data fragmentation across divisions", "Full traceability via audit trail", "Robust production deployment with error handling"],
      },
      {
        title: "iDeb SLIK Credit Report Pipeline",
        description:
          "High-throughput async pipeline handling large Base64-encoded credit report file uploads — decoupling upload from processing using asyncio, queue.Queue, and threading to eliminate main-thread blocking.",
        contributions: ["Async Pipeline Architecture", "Base64 File Processing", "Pandas Data Transformation", "Concurrent Job Queue"],
        tech: ["Python", "Flask", "asyncio", "queue.Queue", "Pandas", "SQL Server"],
        impact: ["Eliminated main-thread blocking", "Concurrent multi-file handling", "Reduced processing latency significantly"],
      },
      {
        title: "Offline RAG Chatbot (Self-Initiated R&D)",
        description:
          "Fully offline AI chatbot prototype for secure document Q&A on a government intranet — built during initial onboarding year using local LLM inference with no cloud dependency.",
        contributions: ["Local LLM Integration", "RAG Architecture", "Vector Search (FAISS)", "LangChain Pipeline"],
        tech: ["Flask", "Ollama", "DeepSeek", "FAISS", "HuggingFace", "LangChain"],
        impact: ["Validated Local LLM for regulated environments", "Semantic search with FAISS", "Foundation for enterprise AI tooling"],
      },
      {
        title: "AWS Bedrock AI Chatbot (Vendor Support)",
        description:
          "Supporting external vendor and in-house AI Engineer in deploying a production-grade enterprise AI chatbot powered by AWS Bedrock with RAG architecture for company-wide knowledge management.",
        contributions: ["Technical Liaison & Support", "RAG Pipeline Review", "Database Schema Design", "Cloud Integration Support"],
        tech: ["Next.js", "FastAPI", "AWS Bedrock", "PostgreSQL", "Amazon RDS", "LangChain"],
        impact: ["Production-grade AI chatbot deployed", "Scalable RAG on AWS Bedrock", "Centralized enterprise knowledge access"],
      },
      {
        title: "Odoo ERP Integration",
        description:
          "Integrated internal financial systems with Odoo ERP via REST API, automating finance operations data sync and eliminating manual cross-system data entry for the operations team.",
        contributions: ["REST API Integration", "Finance Data Automation", "Cross-system Sync", "Error Handling & Logging"],
        tech: ["Python", "Flask", "Odoo API", "SQL Server", "MongoDB"],
        impact: ["Eliminated manual cross-system entry", "Automated finance operations sync", "Improved data consistency across platforms"],
      },
    ],
  },
  {
    company: "PT Lintas Samudera Borneo Line",
    short: "LSB",
    role: "IT Developer Officer",
    period: "Aug 2022 – Jan 2025",
    status: "past",
    color: "var(--accent-teal)",
    description:
      "National logistics and shipping company — owned the full software development lifecycle for internal systems across order management, ERP integration, and operations.",
    projects: [
      {
        title: "VVIS Operations Management System (Re-engineering)",
        description:
          "Re-engineered the legacy VVIS platform into a modern Django + PostgreSQL Operations Management System, improving system reliability, query performance, and operational visibility company-wide.",
        contributions: ["Legacy System Migration", "Django Backend Architecture", "PostgreSQL Database Design", "Odoo ERP API Integration"],
        tech: ["Python", "Django", "PostgreSQL", "Odoo API", "REST API"],
        impact: ["Modernized legacy platform", "Improved query performance & reliability", "Automated financial data sync with ERP"],
      },
      {
        title: "Order Management Application (Phase 2)",
        description:
          "Developed and deployed Phase 2 of the Order Management Application, streamlining data entry workflows and improving UX for operations staff across multiple branches.",
        contributions: ["Fullstack Development", "Business Process Automation", "Multi-branch UX Improvement", "Database Architecture"],
        tech: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
        impact: ["Streamlined order workflows across branches", "Reduced data entry time for operations staff", "Centralized logistics data management"],
      },
      {
        title: "Odoo ERP Integration API",
        description:
          "Built REST APIs bridging internal logistics systems with Odoo ERP using Python, enabling automated data sync between logistics operations and finance systems.",
        contributions: ["API Development", "ERP Integration", "Authentication & Security", "Data Synchronisation"],
        tech: ["Python", "FastAPI", "Django REST Framework", "MySQL", "Odoo API"],
        impact: ["Seamless ERP data sync", "Reduced manual data entry", "Improved reporting accuracy"],
      },
    ],
  },
  {
    company: "PT Multipolar Technology Tbk",
    short: "MPT",
    role: "Application Developer",
    period: "Jun 2021 – Jun 2022",
    status: "past",
    color: "var(--accent-purple)",
    description:
      "Technology consulting firm — built and extended REST APIs for enterprise client systems, translating complex business requirements into implementable engineering designs.",
    projects: [
      {
        title: "REST API Development for Enterprise Clients",
        description:
          "Developed REST APIs for new and existing client systems using Python and MongoDB, enabling integration with third-party services and internal platforms across multiple enterprise clients.",
        contributions: ["REST API Design & Development", "Business Requirements Analysis", "Software Specification Writing", "Pre-QA Feature Testing"],
        tech: ["Python", "FastAPI", "MongoDB", "REST API"],
        impact: ["Delivered APIs for multiple enterprise clients", "Improved integration with third-party services", "Reduced bugs through pre-QA testing"],
      },
    ],
  },
  {
    company: "PT Industri Kereta Api (INKA) — Persero",
    short: "INKA",
    role: "IT Staff Intern",
    period: "Jan 2019 – Feb 2019",
    status: "past",
    color: "#fb923c",
    description:
      "State-owned railway manufacturer — developed employee data management features for an internal HR information system.",
    projects: [
      {
        title: "Employee Data Management System (APPS IT)",
        description:
          "Developed CRUD features for employee data management in the APPS IT information system used by HR operations, and conducted functional testing on newly developed features.",
        contributions: ["CRUD Feature Development", "HR System Integration", "Functional Testing", "Bug Documentation"],
        tech: ["PHP", "Laravel", "MySQL"],
        impact: ["Improved HR data management efficiency", "Reduced manual data entry for HR operations", "Documented test findings for dev team"],
      },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function ProjectCard({ project, accentColor }: { project: Project; accentColor: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="glass"
      style={{ borderRadius: 12, overflow: "hidden" }}
      whileHover={{ x: 3 }}
      transition={{ duration: 0.18 }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        style={{
          width: "100%",
          padding: "16px 20px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: accentColor,
              flexShrink: 0,
              boxShadow: `0 0 6px ${accentColor}`,
            }}
          />
          <span
            className="font-display"
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: 700,
              color: "var(--fg)",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
            }}
          >
            {project.title}
          </span>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ flexShrink: 0, color: "var(--fg-subtle)" }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 20px 20px" }}>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-muted)", lineHeight: 1.65, marginBottom: 14 }}>
                {project.description}
              </p>

              <div style={{ display: "grid", gap: 12, marginBottom: 14 }} className="grid-cols-1 sm:grid-cols-2">
                <div>
                  <p style={{ fontSize: "var(--text-2xs)", color: "var(--fg-subtle)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-mono), monospace", marginBottom: 6 }}>
                    Contributions
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {project.contributions.map((c) => (
                      <li key={c} style={{ fontSize: "var(--text-xs)", color: "var(--fg-muted)", paddingLeft: 12, position: "relative", marginBottom: 3 }}>
                        <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 4, height: 4, borderRadius: "50%", background: accentColor, display: "inline-block" }} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: "var(--text-2xs)", color: "var(--fg-subtle)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "var(--font-mono), monospace", marginBottom: 6 }}>
                    Impact
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {project.impact.map((imp) => (
                      <li key={imp} style={{ fontSize: "var(--text-xs)", color: "var(--fg-muted)", paddingLeft: 12, position: "relative", marginBottom: 3 }}>
                        <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 4, height: 4, borderRadius: "50%", background: "var(--accent-teal)", display: "inline-block" }} />
                        {imp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function WorkExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.48 }}
        >
          <p className="section-label">Experience</p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: 10, lineHeight: 1.1 }}
          >
            Where I&apos;ve shipped
          </h2>
          <p style={{ color: "var(--fg-muted)", fontSize: "var(--text-base)", marginBottom: 52 }}>
            From internship at a state railway manufacturer to building AI systems at a fintech BUMN — each role added a different layer.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "flex", flexDirection: "column", gap: 40 }}
        >
          {experience.map((job) => (
            <motion.div key={job.company} variants={itemVariants}>
              {/* Company header */}
              <div
                className="glass"
                style={{
                  borderRadius: 14,
                  padding: "22px 26px",
                  marginBottom: 10,
                  borderLeft: `3px solid ${job.color}`,
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: `${job.color}15`,
                        border: `1px solid ${job.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "var(--text-2xs)",
                        fontWeight: 700,
                        color: job.color,
                        fontFamily: "var(--font-mono), monospace",
                        letterSpacing: "0.04em",
                        flexShrink: 0,
                      }}
                    >
                      {job.short}
                    </div>
                    <div>
                      <h3
                        className="font-display"
                        style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--fg)", letterSpacing: "-0.01em", marginBottom: 2 }}
                      >
                        {job.company}
                      </h3>
                      <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-muted)" }}>
                        {job.role}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "5px 12px",
                      borderRadius: 8,
                      background: job.status === "current" ? "rgba(45,212,191,0.08)" : "var(--bg-elevated)",
                      border: `1px solid ${job.status === "current" ? "rgba(45,212,191,0.22)" : "var(--border)"}`,
                      fontSize: "var(--text-xs)",
                      fontFamily: "var(--font-mono), monospace",
                      color: job.status === "current" ? "var(--accent-teal)" : "var(--fg-muted)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {job.status === "current" && <span className="status-dot" style={{ width: 6, height: 6 }} />}
                    {!job.status && <Calendar size={11} />}
                    {job.period}
                  </div>
                </div>

                <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-muted)", lineHeight: 1.6 }}>
                  {job.description}
                </p>
              </div>

              {/* Projects — collapsible */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingLeft: 16, borderLeft: `1px solid ${job.color}35` }}>
                {job.projects.map((project) => (
                  <ProjectCard key={project.title} project={project} accentColor={job.color} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
