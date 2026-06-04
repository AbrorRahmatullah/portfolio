"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Briefcase, ChevronRight, Calendar } from "lucide-react";

type Project = {
  title: string;
  description: string;
  contributions: string[];
  tech: string[];
  impact: string[];
};

type Job = {
  company: string;
  role: string;
  period: string;
  status: "current" | "past";
  description: string;
  projects: Project[];
};

const experience: Job[] = [
  {
    company: "PT Sarana Multi Infrastruktur (Persero)",
    role: "Full-Stack Python Developer & AI Engineer",
    period: "Jan 2025 – Present",
    status: "current",
    description:
      "State-owned infrastructure finance company — building AI-integrated backend systems in a regulated financial environment where data privacy and system reliability are non-negotiable.",
    projects: [
      {
        title: "Single Source of Truth (SSOT)",
        description:
          "Centralized Flask web platform enabling multiple divisions to access and manage consistent data from a single reliable source, with Excel ingestion pipeline, Audit Trail module, and production deployment.",
        contributions: [
          "Flask & SQLAlchemy Backend",
          "Excel Ingestion (Pandas, openpyxl)",
          "Audit Trail & Logging",
          "Production Deployment (Waitress)",
        ],
        tech: ["Python", "Flask", "SQLAlchemy", "Pandas", "SQL Server", "openpyxl", "Waitress"],
        impact: [
          "Eliminated data fragmentation across divisions",
          "Full traceability via audit trail",
          "Robust production deployment with error handling",
        ],
      },
      {
        title: "iDeb SLIK Credit Report Pipeline",
        description:
          "High-throughput async pipeline handling large Base64-encoded credit report file uploads — decoupling upload from processing using asyncio, queue.Queue, and threading to eliminate main-thread blocking.",
        contributions: [
          "Async Pipeline Architecture",
          "Base64 File Processing",
          "Pandas Data Transformation",
          "Concurrent Job Queue",
        ],
        tech: ["Python", "Flask", "asyncio", "queue.Queue", "Pandas", "SQL Server"],
        impact: [
          "Eliminated main-thread blocking",
          "Concurrent multi-file handling",
          "Reduced processing latency significantly",
        ],
      },
      {
        title: "Offline RAG Chatbot (Self-Initiated R&D)",
        description:
          "Fully offline AI chatbot prototype for secure document Q&A on a government intranet — built during initial onboarding year using local LLM inference with no cloud dependency.",
        contributions: [
          "Local LLM Integration",
          "RAG Architecture",
          "Vector Search (FAISS)",
          "LangChain Pipeline",
        ],
        tech: ["Flask", "Ollama", "DeepSeek", "FAISS", "HuggingFace", "LangChain"],
        impact: [
          "Validated Local LLM for regulated environments",
          "Semantic search with FAISS",
          "Foundation for enterprise AI tooling",
        ],
      },
      {
        title: "AWS Bedrock AI Chatbot (Vendor Support)",
        description:
          "Supporting external vendor and in-house AI Engineer in deploying a production-grade enterprise AI chatbot powered by AWS Bedrock with RAG architecture for company-wide knowledge management.",
        contributions: [
          "Technical Liaison & Support",
          "RAG Pipeline Review",
          "Database Schema Design",
          "Cloud Integration Support",
        ],
        tech: ["Next.js", "FastAPI", "AWS Bedrock", "PostgreSQL", "Amazon RDS", "LangChain"],
        impact: [
          "Production-grade AI chatbot deployed",
          "Scalable RAG on AWS Bedrock",
          "Centralized enterprise knowledge access",
        ],
      },
      {
        title: "Odoo ERP Integration",
        description:
          "Integrated internal financial systems with Odoo ERP via REST API, automating finance operations data sync and eliminating manual cross-system data entry for the operations team.",
        contributions: [
          "REST API Integration",
          "Finance Data Automation",
          "Cross-system Sync",
          "Error Handling & Logging",
        ],
        tech: ["Python", "Flask", "Odoo API", "SQL Server", "MongoDB"],
        impact: [
          "Eliminated manual cross-system entry",
          "Automated finance operations sync",
          "Improved data consistency across platforms",
        ],
      },
    ],
  },
  {
    company: "PT Lintas Samudera Borneo Line",
    role: "IT Developer Officer",
    period: "Aug 2022 – Jan 2025",
    status: "past",
    description:
      "National logistics and shipping company — owned the full software development lifecycle for internal systems across order management, ERP integration, and operations.",
    projects: [
      {
        title: "VVIS Operations Management System (Re-engineering)",
        description:
          "Re-engineered the legacy VVIS platform into a modern Django + PostgreSQL Operations Management System, improving system reliability, query performance, and operational visibility company-wide.",
        contributions: [
          "Legacy System Migration",
          "Django Backend Architecture",
          "PostgreSQL Database Design",
          "Odoo ERP API Integration",
        ],
        tech: ["Python", "Django", "PostgreSQL", "Odoo API", "REST API"],
        impact: [
          "Modernized legacy platform",
          "Improved query performance & reliability",
          "Automated financial data sync with ERP",
        ],
      },
      {
        title: "Order Management Application (Phase 2)",
        description:
          "Developed and deployed Phase 2 of the Order Management Application, streamlining data entry workflows and improving UX for operations staff across multiple branches.",
        contributions: [
          "Fullstack Development",
          "Business Process Automation",
          "Multi-branch UX Improvement",
          "Database Architecture",
        ],
        tech: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
        impact: [
          "Streamlined order workflows across branches",
          "Reduced data entry time for operations staff",
          "Centralized logistics data management",
        ],
      },
      {
        title: "Odoo ERP Integration API",
        description:
          "Built REST APIs bridging internal logistics systems with Odoo ERP using Python, enabling automated data sync between logistics operations and finance systems.",
        contributions: [
          "API Development",
          "ERP Integration",
          "Authentication & Security",
          "Data Synchronisation",
        ],
        tech: ["Python", "FastAPI", "Django REST Framework", "MySQL", "Odoo API"],
        impact: [
          "Seamless ERP data sync",
          "Reduced manual data entry",
          "Improved reporting accuracy",
        ],
      },
    ],
  },
  {
    company: "PT Multipolar Technology Tbk",
    role: "Application Developer",
    period: "Jun 2021 – Jun 2022",
    status: "past",
    description:
      "Technology consulting firm — built and extended REST APIs for enterprise client systems, translating complex business requirements into implementable engineering designs.",
    projects: [
      {
        title: "REST API Development for Enterprise Clients",
        description:
          "Developed REST APIs for new and existing client systems using Python and MongoDB, enabling integration with third-party services and internal platforms across multiple enterprise clients.",
        contributions: [
          "REST API Design & Development",
          "Business Requirements Analysis",
          "Software Specification Writing",
          "Pre-QA Feature Testing",
        ],
        tech: ["Python", "FastAPI", "MongoDB", "REST API"],
        impact: [
          "Delivered APIs for multiple enterprise clients",
          "Improved integration with third-party services",
          "Reduced bugs through pre-QA testing",
        ],
      },
    ],
  },
  {
    company: "PT Industri Kereta Api (INKA) — Persero",
    role: "IT Staff Intern",
    period: "Jan 2019 – Feb 2019",
    status: "past",
    description:
      "State-owned railway manufacturer — developed employee data management features for an internal HR information system.",
    projects: [
      {
        title: "Employee Data Management System (APPS IT)",
        description:
          "Developed CRUD features for employee data management in the APPS IT information system used by HR operations, and conducted functional testing on newly developed features.",
        contributions: [
          "CRUD Feature Development",
          "HR System Integration",
          "Functional Testing",
          "Bug Documentation",
        ],
        tech: ["PHP", "Laravel", "MySQL"],
        impact: [
          "Improved HR data management efficiency",
          "Reduced manual data entry for HR operations",
          "Documented test findings for dev team",
        ],
      },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function WorkExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Experience</p>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--fg)",
              marginBottom: 12,
              lineHeight: 1.1,
            }}
          >
            Work History
          </h2>
          <p
            style={{
              color: "var(--fg-muted)",
              fontSize: "0.95rem",
              marginBottom: 56,
            }}
          >
            4+ years across fintech, logistics, technology consulting, and enterprise software.
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
              {/* Company Header */}
              <div
                className="glass"
                style={{
                  borderRadius: 14,
                  padding: "24px 28px",
                  marginBottom: 12,
                  borderLeft: `3px solid ${job.status === "current" ? "var(--accent-blue)" : "var(--border-strong)"}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 12,
                    marginBottom: 8,
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 8,
                          background: job.status === "current" ? "rgba(79,134,247,0.12)" : "var(--bg-elevated)",
                          border: `1px solid ${job.status === "current" ? "rgba(79,134,247,0.25)" : "var(--border)"}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Briefcase size={14} style={{ color: job.status === "current" ? "var(--accent-blue)" : "var(--fg-subtle)" }} />
                      </div>
                      <h3
                        className="font-display"
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: "var(--fg)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {job.company}
                      </h3>
                    </div>
                    <p style={{ fontSize: "0.85rem", color: "var(--fg-muted)", marginLeft: 42 }}>
                      {job.role}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "5px 12px",
                      borderRadius: 8,
                      background: job.status === "current" ? "rgba(45,212,191,0.08)" : "var(--bg-elevated)",
                      border: `1px solid ${job.status === "current" ? "rgba(45,212,191,0.2)" : "var(--border)"}`,
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono), monospace",
                      color: job.status === "current" ? "var(--accent-teal)" : "var(--fg-muted)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Calendar size={11} />
                    {job.period}
                    {job.status === "current" && (
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "var(--accent-teal)",
                          display: "inline-block",
                          boxShadow: "0 0 4px var(--accent-teal)",
                        }}
                      />
                    )}
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--fg-muted)",
                    lineHeight: 1.6,
                    marginLeft: 42,
                  }}
                >
                  {job.description}
                </p>
              </div>

              {/* Projects */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  paddingLeft: 20,
                  borderLeft: "1px solid var(--border)",
                }}
              >
                {job.projects.map((project) => (
                  <motion.div
                    key={project.title}
                    className="glass"
                    style={{ borderRadius: 12, padding: "20px 24px" }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        marginBottom: 8,
                      }}
                    >
                      <ChevronRight size={14} style={{ color: "var(--accent-blue)", flexShrink: 0 }} />
                      <h4
                        className="font-display"
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          color: "var(--fg)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {project.title}
                      </h4>
                    </div>

                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--fg-muted)",
                        lineHeight: 1.6,
                        marginBottom: 14,
                        paddingLeft: 22,
                      }}
                    >
                      {project.description}
                    </p>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 12,
                        paddingLeft: 22,
                      }}
                      className="sm:grid-cols-2"
                    >
                      {/* Contributions */}
                      <div>
                        <p
                          style={{
                            fontSize: "0.65rem",
                            color: "var(--fg-subtle)",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontFamily: "var(--font-mono), monospace",
                            marginBottom: 6,
                          }}
                        >
                          Contributions
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          {project.contributions.map((c) => (
                            <li
                              key={c}
                              style={{
                                fontSize: "0.77rem",
                                color: "var(--fg-muted)",
                                paddingLeft: 12,
                                position: "relative",
                                marginBottom: 2,
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  width: 4,
                                  height: 4,
                                  borderRadius: "50%",
                                  background: "var(--accent-blue)",
                                  display: "inline-block",
                                }}
                              />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact */}
                      <div>
                        <p
                          style={{
                            fontSize: "0.65rem",
                            color: "var(--fg-subtle)",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            fontFamily: "var(--font-mono), monospace",
                            marginBottom: 6,
                          }}
                        >
                          Impact
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          {project.impact.map((imp) => (
                            <li
                              key={imp}
                              style={{
                                fontSize: "0.77rem",
                                color: "var(--fg-muted)",
                                paddingLeft: 12,
                                position: "relative",
                                marginBottom: 2,
                              }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  width: 4,
                                  height: 4,
                                  borderRadius: "50%",
                                  background: "var(--accent-teal)",
                                  display: "inline-block",
                                }}
                              />
                              {imp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                        marginTop: 14,
                        paddingLeft: 22,
                      }}
                    >
                      {project.tech.map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
