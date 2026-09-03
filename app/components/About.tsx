"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Briefcase, Code2, Database, Brain, Zap, MapPin, Calendar, Server, GitBranch } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "4+", icon: Calendar, color: "var(--accent-blue)", glow: "rgba(37,99,235,0.12)" },
  { label: "Enterprise Apps", value: "10+", icon: Briefcase, color: "var(--accent-purple)", glow: "rgba(124,58,237,0.12)" },
  { label: "APIs Built", value: "20+", icon: Zap, color: "var(--accent-teal)", glow: "rgba(13,148,136,0.12)" },
  { label: "Technologies", value: "25+", icon: Code2, color: "#fb923c", glow: "rgba(251,146,60,0.12)" },
];

const focuses = [
  { icon: Server, label: "Backend Development", color: "var(--accent-blue)" },
  { icon: Zap, label: "REST API Design", color: "var(--accent-purple)" },
  { icon: Database, label: "Data Engineering", color: "var(--accent-teal)" },
  { icon: Brain, label: "AI & RAG Systems", color: "#f472b6" },
  { icon: Briefcase, label: "Enterprise Apps", color: "var(--accent-blue)" },
  { icon: GitBranch, label: "ERP Integration", color: "#fb923c" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const statVariants: Variants = {
  hidden: { opacity: 0, x: 20, scale: 0.96 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.45, ease: [0.34, 1.06, 0.64, 1] } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "100px 24px", background: "var(--bg-secondary)", position: "relative" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <p className="section-label">About</p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "var(--fg)",
                marginBottom: 48,
                lineHeight: 1.1,
              }}
            >
              Backend first,{" "}
              <span className="gradient-text">full picture always</span>
            </h2>
          </motion.div>

          {/* Grid */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}
            className="lg:grid-cols-[1fr_300px]"
          >
            {/* Left: Bio + focuses */}
            <div>
              <motion.div
                variants={itemVariants}
                className="glass"
                style={{ borderRadius: 16, padding: "28px 32px", marginBottom: 20, borderLeft: "3px solid var(--accent-blue)" }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: "var(--text-xs)",
                    color: "var(--fg-muted)",
                    fontFamily: "var(--font-mono), monospace",
                    marginBottom: 18,
                    padding: "4px 10px",
                    borderRadius: 6,
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <MapPin size={11} style={{ color: "var(--accent-blue)" }} />
                  Jakarta, Indonesia · Open to Remote
                </div>

                <p style={{ color: "var(--fg)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 14 }}>
                  Full-stack and AI engineer with 5+ years delivering production-grade Python systems
                  across fintech, logistics, and enterprise environments. Specializes in REST API
                  development (FastAPI, Django, Flask), multi-database architecture, and scalable data platforms.
                </p>
                <p style={{ color: "var(--fg-muted)", fontSize: "0.925rem", lineHeight: 1.75, marginBottom: 14 }}>
                  Currently at{" "}
                  <span style={{ color: "var(--fg)", fontWeight: 500 }}>PT Sarana Multi Infrastruktur (Persero)</span>{" "}
                  as Full-Stack Python Developer & AI Engineer — building a centralized data platform
                  (SSOT), an async credit report pipeline, and supporting a production{" "}
                  <span style={{ color: "var(--accent-purple)", fontWeight: 500 }}>AWS Bedrock RAG chatbot</span>{" "}
                  in a regulated financial environment.
                </p>
                <p style={{ color: "var(--fg-muted)", fontSize: "0.925rem", lineHeight: 1.75 }}>
                  Python-first stack — Flask, FastAPI, Django, SQLAlchemy — with deep experience in
                  async pipelines, Pandas data engineering, and Odoo ERP integrations. Golang Backend
                  certified · TOEIC 665 (B2 English).
                </p>
              </motion.div>

              {/* Focus Areas */}
              <motion.div variants={itemVariants}>
                <p
                  style={{
                    fontSize: "var(--text-xs)",
                    fontFamily: "var(--font-mono), monospace",
                    color: "var(--fg-subtle)",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: 10,
                  }}
                >
                  Focus Areas
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {focuses.map(({ icon: Icon, label, color }) => (
                    <div
                      key={label}
                      className="hover-lift"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                        padding: "7px 14px",
                        borderRadius: 8,
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        fontSize: "var(--text-sm)",
                        color: "var(--fg-muted)",
                        fontWeight: 500,
                        cursor: "default",
                      }}
                    >
                      <Icon size={12} style={{ color }} />
                      {label}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Stats */}
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignContent: "start" }}
              className="lg:grid-cols-1"
            >
              {stats.map(({ label, value, icon: Icon, color, glow }, i) => (
                <motion.div
                  key={label}
                  variants={statVariants}
                  transition={{ delay: i * 0.09 }}
                  className="glass hover-lift"
                  style={{
                    borderRadius: 14,
                    padding: "22px 20px",
                    textAlign: "center",
                    background: `var(--bg-card)`,
                    cursor: "default",
                  }}
                  whileHover={{ boxShadow: `0 8px 32px ${glow}, var(--shadow-card)` }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: glow,
                      border: `1px solid ${color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 14px",
                    }}
                  >
                    <Icon size={17} style={{ color }} />
                  </div>
                  <div
                    className="stat-number gradient-text"
                    style={{ fontSize: "2.2rem" }}
                  >
                    {value}
                  </div>
                  <div
                    style={{ fontSize: "var(--text-xs)", color: "var(--fg-muted)", marginTop: 6, lineHeight: 1.3 }}
                  >
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
