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
    role: "Fullstack Developer – Data Warehouse Division",
    period: "2025 – Present",
    status: "current",
    description:
      "Building internal enterprise applications for data processing, business automation, system integration, and Data Warehouse support.",
    projects: [
      {
        title: "Single Source of Truth (SSOT)",
        description:
          "Centralised platform for company documents, regulations, and information — ensuring consistent, structured access across departments.",
        contributions: [
          "Backend & API Development",
          "Database Design",
          "Data Processing",
          "System Integration",
        ],
        tech: ["Python", "Flask", "SQL Server", "JavaScript"],
        impact: [
          "Centralised company knowledge base",
          "Eliminated document duplication",
          "Improved cross-team information access",
        ],
      },
      {
        title: "iDEB SLIK Reader",
        description:
          "Automated system for parsing and processing iDEB SLIK credit bureau files, dramatically reducing manual data entry and analysis time.",
        contributions: [
          "File & Data Processing",
          "Pandas Data Pipeline",
          "Background Job Processing",
          "Database Integration",
        ],
        tech: ["Python", "Flask", "Pandas", "SQL Server"],
        impact: [
          "Reduced manual processing by ~80%",
          "Improved data accuracy",
          "Faster debtor analysis cycles",
        ],
      },
      {
        title: "Internal AI Chatbot Exploration",
        description:
          "Proof-of-concept chatbot for internal knowledge management using Local LLM and Retrieval-Augmented Generation.",
        contributions: [
          "Local LLM Integration",
          "RAG Architecture",
          "Document Retrieval",
          "Knowledge Base Preparation",
        ],
        tech: ["Flask", "Ollama", "FAISS", "HuggingFace", "DeepSeek"],
        impact: [
          "Validated Local LLM for enterprise use",
          "Improved internal knowledge retrieval",
          "Foundation for future AI tooling",
        ],
      },
    ],
  },
  {
    company: "Puninar Logistics",
    role: "Information Technology Developer",
    period: "2022 – 2025",
    status: "past",
    description:
      "Developed operational applications, REST APIs, and ERP integrations to support logistics business processes.",
    projects: [
      {
        title: "Order Management System",
        description:
          "Full-featured OMS for charter vessel management, commercial orders, and logistics workflow monitoring.",
        contributions: [
          "Fullstack Development",
          "Database Architecture",
          "Business Process Automation",
          "Operational Monitoring",
        ],
        tech: ["PHP", "JavaScript", "MySQL"],
        impact: [
          "Streamlined charter and order workflows",
          "Reduced operational bottlenecks",
          "Centralised logistics data",
        ],
      },
      {
        title: "Odoo Integration API",
        description:
          "REST API layer bridging the internal logistics system with Odoo ERP, enabling real-time data synchronisation.",
        contributions: [
          "API Development",
          "ERP Integration",
          "Authentication & Security",
          "Data Synchronisation",
        ],
        tech: ["Django REST Framework", "FastAPI", "Odoo"],
        impact: [
          "Seamless ERP data sync",
          "Reduced manual data entry",
          "Improved reporting accuracy",
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
            4+ years across logistics, infrastructure finance, and enterprise software.
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
