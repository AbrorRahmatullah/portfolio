"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Star, GitFork, GitCommitHorizontal, Code2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const stats = [
  { label: "Public Repos", value: "18", icon: GithubIcon, color: "var(--accent-blue)" },
  { label: "Total Commits", value: "340+", icon: GitCommitHorizontal, color: "var(--accent-teal)" },
  { label: "Stars Earned", value: "12", icon: Star, color: "#c8a84a" },
  { label: "Forks", value: "5", icon: GitFork, color: "var(--accent-purple)" },
];

const languages = [
  { name: "Python",     percentage: 52, color: "#3b82f6" },
  { name: "PHP",        percentage: 22, color: "#7c3aed" },
  { name: "JavaScript", percentage: 16, color: "#f59e0b" },
  { name: "TypeScript", percentage: 6,  color: "#0d9488" },
  { name: "Other",      percentage: 4,  color: "#94a3b8" },
];

const intensityColors = [
  "var(--border-strong)",
  "rgba(59,130,246,0.28)",
  "rgba(59,130,246,0.60)",
  "rgba(59,130,246,0.92)",
];

/* Deterministic grid: seeded by index so it never re-randomises */
function seededLevel(index: number): number {
  const x = Math.sin(index * 9301 + 49297) * 233280;
  const r = x - Math.floor(x);
  if (r > 0.78) return 3;
  if (r > 0.58) return 2;
  if (r > 0.38) return 1;
  return 0;
}

function ContributionGrid() {
  const total = 52 * 7;
  return (
    <div style={{ overflowX: "auto", paddingBottom: 4 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(52, 10px)",
          gridTemplateRows: "repeat(7, 10px)",
          gap: 2,
          width: "fit-content",
        }}
      >
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            title={`Level ${seededLevel(i)}`}
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              background: intensityColors[seededLevel(i)],
              transition: "background 0.15s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.42, ease: [0.34, 1.06, 0.64, 1] } },
};

export default function GitHubStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const barRef = useRef(null);
  const barInView = useInView(barRef, { once: true });

  return (
    <section id="github" ref={ref} style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.48 }}
        >
          <p className="section-label">GitHub</p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: 10, lineHeight: 1.1 }}
          >
            Code footprint
          </h2>
          <p style={{ color: "var(--fg-muted)", fontSize: "var(--text-base)", marginBottom: 44 }}>
            Most of my production work lives in private repos at PT SMI and PT Lintas Samudera — the numbers below reflect public activity only.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12, marginBottom: 20 }}
        >
          {stats.map(({ label, value, icon: Icon, color }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="glass hover-lift"
              style={{ borderRadius: 12, padding: "18px 20px", display: "flex", alignItems: "center", gap: 14 }}
              whileHover={{ boxShadow: `0 8px 24px ${color}18, var(--shadow-card)` }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: `${color}12`,
                  border: `1px solid ${color}28`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={16} style={{ color }} />
              </div>
              <div>
                <div className="stat-number" style={{ fontSize: "1.55rem", color: "var(--fg)" }}>
                  {value}
                </div>
                <div style={{ fontSize: "var(--text-xs)", color: "var(--fg-muted)", marginTop: 2 }}>{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }} className="lg:grid-cols-[300px_1fr]">
          {/* Languages */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glass"
            style={{ borderRadius: 14, padding: "24px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
              <Code2 size={14} style={{ color: "var(--accent-blue)" }} />
              <span className="font-display" style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--fg)" }}>
                Top Languages
              </span>
            </div>

            <div ref={barRef} style={{ marginBottom: 16 }}>
              <div style={{ height: 8, borderRadius: 999, overflow: "hidden", display: "flex", gap: 2 }}>
                {languages.map((lang) => (
                  <motion.div
                    key={lang.name}
                    initial={{ width: 0 }}
                    animate={{ width: barInView ? `${lang.percentage}%` : 0 }}
                    transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
                    style={{ height: "100%", background: lang.color, borderRadius: 999 }}
                  />
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {languages.map((lang) => (
                <div key={lang.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: lang.color, flexShrink: 0 }} />
                    <span style={{ fontSize: "var(--text-sm)", color: "var(--fg-muted)" }}>{lang.name}</span>
                  </div>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--fg-subtle)", fontFamily: "var(--font-mono), monospace" }}>
                    {lang.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contribution graph */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glass"
            style={{ borderRadius: 14, padding: "24px", overflow: "hidden" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <GitCommitHorizontal size={14} style={{ color: "var(--accent-blue)" }} />
                <span className="font-display" style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--fg)" }}>
                  Contribution Activity
                </span>
              </div>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--fg-subtle)", fontFamily: "var(--font-mono), monospace" }}>
                Last 12 months
              </span>
            </div>

            <ContributionGrid />

            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12, justifyContent: "flex-end" }}>
              <span style={{ fontSize: "var(--text-2xs)", color: "var(--fg-subtle)" }}>Less</span>
              {intensityColors.map((color, i) => (
                <div key={i} style={{ width: 10, height: 10, borderRadius: 2, background: color }} />
              ))}
              <span style={{ fontSize: "var(--text-2xs)", color: "var(--fg-subtle)" }}>More</span>
            </div>
            <p style={{ fontSize: "var(--text-2xs)", color: "var(--fg-subtle)", fontFamily: "var(--font-mono), monospace", marginTop: 10, opacity: 0.7 }}>
              * Pattern is illustrative — real data from private org repos is not publicly visible via GitHub API.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginTop: 28 }}
        >
          <a
            href="https://github.com/AbrorRahmatullah"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ gap: 8 }}
          >
            <GithubIcon size={14} />
            View Full Profile on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
