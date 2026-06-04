"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Code2, Globe, Database, BarChart2, Link2, Brain, Building2, Terminal } from "lucide-react";

type Skill = { name: string; level: number };
type SkillGroup = {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  skills: Skill[];
  badge?: string;
};

const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    label: "Backend Development",
    icon: Code2,
    color: "var(--accent-blue)",
    skills: [
      { name: "Python", level: 92 },
      { name: "Flask", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "Django / DRF", level: 85 },
      { name: "PHP / Laravel", level: 75 },
      { name: "Go (Golang)", level: 65 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend Development",
    icon: Globe,
    color: "#38bdf8",
    skills: [
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "HTML5 / CSS3", level: 85 },
      { name: "Bootstrap", level: 78 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Next.js", level: 65 },
    ],
  },
  {
    id: "database",
    label: "Databases",
    icon: Database,
    color: "var(--accent-teal)",
    skills: [
      { name: "SQL Server", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 70 },
      { name: "Redis", level: 60 },
      { name: "pgvector", level: 55 },
    ],
  },
  {
    id: "data",
    label: "Data Engineering",
    icon: BarChart2,
    color: "#fb923c",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "asyncio / Threading", level: 82 },
      { name: "ETL Pipelines", level: 80 },
      { name: "openpyxl / Excel", level: 82 },
      { name: "SQLAlchemy / pyodbc", level: 85 },
      { name: "Data Warehouse", level: 72 },
    ],
  },
  {
    id: "integration",
    label: "System Integration",
    icon: Link2,
    color: "var(--accent-purple)",
    skills: [
      { name: "REST API Design", level: 92 },
      { name: "Odoo XML-RPC API", level: 78 },
      { name: "API Integration", level: 88 },
      { name: "Authentication", level: 82 },
      { name: "Microservices", level: 72 },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Tools",
    icon: Terminal,
    color: "#34d399",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Docker", level: 68 },
      { name: "Linux", level: 75 },
      { name: "Postman", level: 85 },
      { name: "Waitress / WSGI", level: 72 },
    ],
  },
  {
    id: "ai",
    label: "AI & Emerging Tech",
    icon: Brain,
    color: "#f472b6",
    badge: "Growing",
    skills: [
      { name: "RAG Systems", level: 65 },
      { name: "LangChain", level: 60 },
      { name: "Ollama / Local LLM", level: 60 },
      { name: "AWS Bedrock", level: 55 },
      { name: "FAISS", level: 58 },
      { name: "HuggingFace", level: 55 },
      { name: "Prompt Engineering", level: 65 },
    ],
  },
  {
    id: "odoo",
    label: "Enterprise Systems",
    icon: Building2,
    color: "#a78bfa",
    badge: "Learning",
    skills: [
      { name: "Odoo Development", level: 42 },
      { name: "Odoo API Integration", level: 50 },
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SkillBar({ name, level, color, delay }: Skill & { color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} style={{ marginBottom: 10 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 5,
        }}
      >
        <span style={{ fontSize: "0.8rem", color: "var(--fg-muted)", fontWeight: 500 }}>
          {name}
        </span>
        <span
          style={{
            fontSize: "0.7rem",
            color: "var(--fg-subtle)",
            fontFamily: "var(--font-mono), monospace",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: 3,
          borderRadius: 999,
          background: "var(--bg-elevated)",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 0.9, delay }}
          style={{
            height: "100%",
            borderRadius: 999,
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{ padding: "100px 24px", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Skills</p>
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
            Technical Proficiency
          </h2>
          <p
            style={{
              color: "var(--fg-muted)",
              fontSize: "0.95rem",
              marginBottom: 56,
              maxWidth: 500,
            }}
          >
            A full-stack skill set built across enterprise projects, data systems, and
            API development over 4+ years.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.id}
                variants={cardVariants}
                className="glass"
                style={{
                  borderRadius: 14,
                  padding: "24px",
                  transition: "border-color 0.2s",
                }}
                whileHover={{ y: -3 }}
              >
                {/* Card Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 20,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: `${group.color}18`,
                        border: `1px solid ${group.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={15} style={{ color: group.color }} />
                    </div>
                    <span
                      className="font-display"
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "var(--fg)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {group.label}
                    </span>
                  </div>
                  {group.badge && (
                    <span
                      style={{
                        fontSize: "0.6rem",
                        fontFamily: "var(--font-mono), monospace",
                        padding: "2px 8px",
                        borderRadius: 999,
                        background: `${group.color}18`,
                        border: `1px solid ${group.color}35`,
                        color: group.color,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {group.badge}
                    </span>
                  )}
                </div>

                {/* Skill Bars */}
                <div>
                  {group.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      {...skill}
                      color={group.color}
                      delay={i * 0.06}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
