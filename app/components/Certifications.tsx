"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Award, ExternalLink, Calendar, TrendingUp } from "lucide-react";

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
    category: "Database",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "2021",
    category: "Backend",
  },
  {
    title: "Golang Backend Development",
    issuer: "Sanbercode",
    date: "2023",
    category: "Backend",
  },
];

const categoryConfig: Record<string, { color: string; label: string }> = {
  "Backend":  { color: "var(--accent-blue)",   label: "Backend" },
  "Database": { color: "var(--accent-teal)",    label: "Database" },
  "Cloud":    { color: "#38bdf8",               label: "Cloud" },
  "Data":     { color: "#fb923c",               label: "Data" },
  "AI/ML":    { color: "#f472b6",               label: "AI/ML" },
  "General":  { color: "var(--fg-subtle)",      label: "General" },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, rotateX: 4 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} style={{ padding: "100px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.48 }}
        >
          <p className="section-label">Certifications</p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: 10, lineHeight: 1.1 }}
          >
            Formal credentials
          </h2>
          <p style={{ color: "var(--fg-muted)", fontSize: "var(--text-base)", marginBottom: 44 }}>
            Verified coursework alongside the on-the-job learning that actually sticks.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 14 }}
        >
          {certifications.map((cert, i) => {
            const cfg = categoryConfig[cert.category] ?? { color: "var(--accent-blue)", label: cert.category };

            return (
              <motion.div
                key={cert.title + i}
                variants={cardVariants}
                className="glass hover-lift"
                style={{ borderRadius: 14, padding: "24px", position: "relative", overflow: "hidden" }}
                whileHover={{ boxShadow: `0 12px 32px ${cfg.color}14, var(--shadow-card)` }}
              >
                {/* Top accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    height: 2,
                    background: `linear-gradient(90deg, ${cfg.color}, transparent)`,
                  }}
                />

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 14 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: `${cfg.color}15`,
                      border: `1px solid ${cfg.color}28`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Award size={17} style={{ color: cfg.color }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
                      {cfg.label}
                    </span>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "var(--fg-subtle)", transition: "color 0.18s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-blue)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg-subtle)"; }}
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                <h3
                  className="font-display"
                  style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--fg)", marginBottom: 5, letterSpacing: "-0.01em", lineHeight: 1.35 }}
                >
                  {cert.title}
                </h3>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-muted)", marginBottom: 14 }}>{cert.issuer}</p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: "var(--text-xs)",
                      color: "var(--fg-subtle)",
                      fontFamily: "var(--font-mono), monospace",
                    }}
                  >
                    <Calendar size={11} />
                    {cert.date}
                  </div>
                  {cert.credentialId && (
                    <span style={{ fontSize: "var(--text-2xs)", color: "var(--fg-subtle)", fontFamily: "var(--font-mono), monospace" }}>
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Info banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          style={{
            marginTop: 28,
            padding: "16px 20px",
            borderRadius: 12,
            background: "var(--bg-card)",
            border: "1px solid var(--border-accent)",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: "rgba(212,170,125,0.10)",
              border: "1px solid rgba(212,170,125,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <TrendingUp size={15} style={{ color: "var(--accent-blue)" }} />
          </div>
          <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-muted)", lineHeight: 1.55 }}>
            <span style={{ color: "var(--fg)", fontWeight: 500 }}>Actively learning</span> — pursuing certifications in Cloud Architecture, AI Engineering, and Backend Development. Check back soon.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
