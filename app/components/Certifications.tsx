"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Award, ExternalLink, Plus, Calendar } from "lucide-react";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  category: string;
  placeholder?: boolean;
};

const certifications: Cert[] = [
  {
    title: "PostgreSQL for Database Developer",
    issuer: "Native Enterprise",
    date: "2023",
    category: "Database"
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "2021",
    category: "Backend"
  },
  {
    title: "Golang Backend Development",
    issuer: "Sanbercode",
    date: "2023",
    category: "Backend"
  },
];

const categoryColors: Record<string, string> = {
  "Backend": "var(--accent-blue)",
  "Cloud": "#38bdf8",
  "Data": "var(--accent-teal)",
  "AI/ML": "#f472b6",
  "General": "var(--fg-subtle)",
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="certifications"
      ref={ref}
      style={{ padding: "100px 24px", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Certifications</p>
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
            Credentials & Learning
          </h2>
          <p style={{ color: "var(--fg-muted)", fontSize: "0.95rem", marginBottom: 48 }}>
            Professional certifications and continuous learning milestones.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 14,
          }}
        >
          {certifications.map((cert, i) => {
            const catColor = categoryColors[cert.category] || "var(--fg-subtle)";

            if (cert.placeholder) {
              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  style={{
                    borderRadius: 14,
                    padding: "24px",
                    border: "1px dashed var(--border-strong)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    cursor: "pointer",
                    minHeight: 140,
                    transition: "all 0.2s",
                    background: "transparent",
                  }}
                  whileHover={{
                    borderColor: "var(--border-accent)",
                    background: "var(--bg-card)",
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
                    }}
                  >
                    <Plus size={15} style={{ color: "var(--fg-subtle)" }} />
                  </div>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--fg-subtle)",
                      textAlign: "center",
                    }}
                  >
                    Add certification here
                  </p>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={cert.title + i}
                variants={cardVariants}
                className="glass"
                style={{ borderRadius: 14, padding: "24px" }}
                whileHover={{ y: -4 }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: `${catColor}12`,
                      border: `1px solid ${catColor}28`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Award size={16} style={{ color: catColor }} />
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--fg-subtle)",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-blue)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg-subtle)";
                      }}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--fg)",
                    marginBottom: 4,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {cert.title}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "var(--fg-muted)", marginBottom: 10 }}>
                  {cert.issuer}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: "0.72rem",
                      color: "var(--fg-subtle)",
                      fontFamily: "var(--font-mono), monospace",
                    }}
                  >
                    <Calendar size={11} />
                    {cert.date}
                  </div>
                  {cert.credentialId && (
                    <span
                      style={{
                        fontSize: "0.65rem",
                        color: "var(--fg-subtle)",
                        fontFamily: "var(--font-mono), monospace",
                      }}
                    >
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: 32,
            padding: "16px 20px",
            borderRadius: 10,
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Award size={15} style={{ color: "var(--accent-blue)", flexShrink: 0 }} />
          <p style={{ fontSize: "0.82rem", color: "var(--fg-muted)" }}>
            Actively pursuing certifications in Cloud, AI Engineering, and Backend Development.
            Check back soon for updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
