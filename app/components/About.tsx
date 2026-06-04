"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Briefcase, Code2, Database, Brain, Zap, MapPin, Calendar } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "4+", icon: Calendar },
  { label: "Enterprise Apps", value: "10+", icon: Briefcase },
  { label: "APIs Built", value: "20+", icon: Zap },
  { label: "Technologies", value: "25+", icon: Code2 },
];

const focuses = [
  { icon: Code2, label: "Backend Development", color: "var(--accent-blue)" },
  { icon: Zap, label: "REST API Design", color: "var(--accent-purple)" },
  { icon: Database, label: "Data Engineering", color: "var(--accent-teal)" },
  { icon: Brain, label: "AI & RAG Systems", color: "#f472b6" },
  { icon: Briefcase, label: "Enterprise Apps", color: "var(--accent-blue)" },
  { icon: Code2, label: "ERP Integration", color: "#fb923c" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "100px 24px",
        background: "var(--bg-secondary)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
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
              Crafting reliable software <br />
              <span className="gradient-text">one layer at a time</span>
            </h2>
          </motion.div>

          {/* Main Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 32,
            }}
            className="lg:grid-cols-[1fr_320px]"
          >
            {/* Left: Bio */}
            <div>
              <motion.div
                variants={itemVariants}
                className="glass"
                style={{ borderRadius: 16, padding: "32px", marginBottom: 24 }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: "0.75rem",
                      color: "var(--fg-muted)",
                      fontFamily: "var(--font-mono), monospace",
                    }}
                  >
                    <MapPin size={12} style={{ color: "var(--accent-blue)" }} />
                    Jakarta, Indonesia
                  </div>
                </div>

                <p
                  style={{
                    color: "var(--fg)",
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    marginBottom: 16,
                  }}
                >
                  Full-stack and AI engineer with 4+ years delivering production-grade Python systems
                  across fintech, logistics, and enterprise environments. Specializes in REST API
                  development (FastAPI, Django, Flask), multi-database architecture, and building
                  scalable data platforms.
                </p>
                <p
                  style={{
                    color: "var(--fg-muted)",
                    fontSize: "0.925rem",
                    lineHeight: 1.75,
                    marginBottom: 16,
                  }}
                >
                  Currently at{" "}
                  <span style={{ color: "var(--fg)", fontWeight: 500 }}>
                    PT Sarana Multi Infrastruktur (Persero)
                  </span>{" "}
                  as Full-Stack Python Developer & AI Engineer — building a centralized data platform
                  (SSOT), an async credit report pipeline, and supporting a production{" "}
                  <span style={{ color: "var(--accent-purple)" }}>AWS Bedrock RAG chatbot</span>{" "}
                  in a regulated financial environment.
                </p>
                <p
                  style={{
                    color: "var(--fg-muted)",
                    fontSize: "0.925rem",
                    lineHeight: 1.75,
                  }}
                >
                  Python-first stack — Flask, FastAPI, Django, SQLAlchemy — with deep experience in
                  async pipelines, Pandas data engineering, and Odoo ERP integrations. Also holds a{" "}
                  <span style={{ color: "var(--accent-blue)" }}>Golang Backend certification</span>{" "}
                  and B2 English proficiency (TOEIC 665).
                </p>
              </motion.div>

              {/* Focus Areas */}
              <motion.div variants={itemVariants}>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono), monospace",
                    color: "var(--fg-subtle)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: 12,
                  }}
                >
                  Focus Areas
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  {focuses.map(({ icon: Icon, label, color }) => (
                    <div
                      key={label}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 7,
                        padding: "7px 14px",
                        borderRadius: 8,
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                        fontSize: "0.8rem",
                        color: "var(--fg-muted)",
                        fontWeight: 500,
                        transition: "all 0.2s",
                      }}
                    >
                      <Icon size={13} style={{ color }} />
                      {label}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                alignContent: "start",
              }}
              className="lg:grid-cols-1"
            >
              {stats.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  variants={itemVariants}
                  transition={{ delay: i * 0.08 }}
                  className="glass"
                  style={{
                    borderRadius: 12,
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 12px",
                    }}
                  >
                    <Icon size={16} style={{ color: "var(--accent-blue)" }} />
                  </div>
                  <div
                    className="font-display gradient-text"
                    style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--fg-muted)",
                      marginTop: 6,
                      lineHeight: 1.3,
                    }}
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
