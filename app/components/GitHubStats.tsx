"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Star, GitFork, GitCommitHorizontal, Code2 } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const stats = [
  { label: "Public Repos", value: "18", icon: GithubIcon, color: "var(--accent-blue)" },
  { label: "Total Commits", value: "340+", icon: GitCommitHorizontal, color: "var(--accent-teal)" },
  { label: "Stars Earned", value: "12", icon: Star, color: "#fbbf24" },
  { label: "Forks", value: "5", icon: GitFork, color: "var(--accent-purple)" },
];

const languages = [
  { name: "Python", percentage: 52, color: "#3b82f6" },
  { name: "PHP", percentage: 22, color: "#a855f7" },
  { name: "JavaScript", percentage: 16, color: "#fbbf24" },
  { name: "TypeScript", percentage: 6, color: "#38bdf8" },
  { name: "Other", percentage: 4, color: "#6b7280" },
];

const intensityColors = [
  "var(--border-strong)",
  "rgba(79,134,247,0.25)",
  "rgba(79,134,247,0.5)",
  "rgba(79,134,247,0.85)",
];

function ContributionGrid() {
  const [contributionData, setContributionData] = useState<number[]>([]);

  useEffect(() => {
    const data = Array.from({ length: 52 * 7 }, () => {
      const random = Math.random();
      if (random > 0.75) return 3;
      if (random > 0.55) return 2;
      if (random > 0.38) return 1;
      return 0;
    });
    setContributionData(data);
  }, []);

  return (
    <div style={{ overflowX: "auto", paddingBottom: 4 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(52, 10px)`,
          gridTemplateRows: `repeat(7, 10px)`,
          gap: 2,
          width: "fit-content",
        }}
      >
        {contributionData.map((level, i) => (
          <div
            key={i}
            title={`Level ${level}`}
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              background: intensityColors[level],
            }}
          />
        ))}
      </div>
    </div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GitHubStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const barRef = useRef(null);
  const barInView = useInView(barRef, { once: true });

  return (
    <section
      id="github"
      ref={ref}
      style={{ padding: "100px 24px", background: "var(--bg-secondary)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">GitHub</p>
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
            Open Source Activity
          </h2>
          <p style={{ color: "var(--fg-muted)", fontSize: "0.95rem", marginBottom: 48 }}>
            Consistent contributions across backend, data, and integration projects.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 12,
            marginBottom: 24,
          }}
        >
          {stats.map(({ label, value, icon: Icon, color }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="glass"
              style={{
                borderRadius: 12,
                padding: "20px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
              whileHover={{ y: -3 }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 9,
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
                <div
                  className="font-display"
                  style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--fg)", lineHeight: 1 }}
                >
                  {value}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--fg-muted)", marginTop: 2 }}>
                  {label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Grid: Languages + Contribution graph */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
          }}
          className="lg:grid-cols-[320px_1fr]"
        >
          {/* Languages */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glass"
            style={{ borderRadius: 14, padding: "24px" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <Code2 size={15} style={{ color: "var(--accent-blue)" }} />
              <span
                className="font-display"
                style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--fg)" }}
              >
                Top Languages
              </span>
            </div>

            {/* Language Bar */}
            <div ref={barRef} style={{ marginBottom: 16 }}>
              <div
                style={{
                  height: 8,
                  borderRadius: 999,
                  overflow: "hidden",
                  display: "flex",
                  gap: 2,
                }}
              >
                {languages.map((lang) => (
                  <motion.div
                    key={lang.name}
                    initial={{ width: 0 }}
                    animate={{ width: barInView ? `${lang.percentage}%` : 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    style={{ height: "100%", background: lang.color, borderRadius: 999 }}
                  />
                ))}
              </div>
            </div>

            {/* Language Legend */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: lang.color,
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ fontSize: "0.82rem", color: "var(--fg-muted)" }}>
                      {lang.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--fg-subtle)",
                      fontFamily: "var(--font-mono), monospace",
                    }}
                  >
                    {lang.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contribution Graph */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="glass"
            style={{ borderRadius: 14, padding: "24px", overflow: "hidden" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <GitCommitHorizontal size={15} style={{ color: "var(--accent-blue)" }} />
                <span
                  className="font-display"
                  style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--fg)" }}
                >
                  Contribution Activity
                </span>
              </div>
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "var(--fg-subtle)",
                  fontFamily: "var(--font-mono), monospace",
                }}
              >
                Last 12 months
              </span>
            </div>
            <ContributionGrid />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginTop: 12,
                justifyContent: "flex-end",
              }}
            >
              <span style={{ fontSize: "0.65rem", color: "var(--fg-subtle)" }}>Less</span>
              {intensityColors.map((color, i) => (
                <div
                  key={i}
                  style={{ width: 10, height: 10, borderRadius: 2, background: color }}
                />
              ))}
              <span style={{ fontSize: "0.65rem", color: "var(--fg-subtle)" }}>More</span>
            </div>
          </motion.div>
        </div>

        {/* GitHub Link */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginTop: 32 }}
        >
          <a
            href="https://github.com/AbrorRahmatullah"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ gap: 8 }}
          >
            <GithubIcon size={15} />
            View Full Profile on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
