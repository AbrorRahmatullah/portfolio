"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download, Mail, ArrowRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const roles = ["Fullstack Developer", "Backend Engineer", "Junior AI Engineer"];

const techStack = ["Python", "FastAPI", "Flask", "Django", "PostgreSQL", "React", "AWS Bedrock", "LangChain"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 100px",
      }}
    >
      {/* Background layers */}
      <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.35 }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 55% at 15% 20%, rgba(37,99,235,0.07) 0%, transparent 65%)," +
            "radial-gradient(ellipse 55% 65% at 85% 75%, rgba(124,58,237,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: 760,
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px 6px 10px",
            borderRadius: 999,
            background: "var(--bg-card)",
            border: "1px solid var(--border-strong)",
            fontSize: "var(--text-xs)",
            color: "var(--fg-muted)",
            marginBottom: 28,
            fontFamily: "var(--font-mono), monospace",
            letterSpacing: "0.04em",
          }}
        >
          <span className="status-dot" />
          Available for opportunities
          <span style={{ color: "var(--border-strong)", marginLeft: 2 }}>·</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <MapPin size={10} style={{ color: "var(--accent-blue)" }} />
            Jakarta
          </span>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1, type: "spring", stiffness: 160 }}
          style={{
            width: 88,
            height: 88,
            borderRadius: "50%",
            background: "var(--bg-elevated)",
            border: "1.5px solid var(--border-strong)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            fontSize: "1.5rem",
            fontWeight: 800,
            color: "var(--accent-blue)",
            fontFamily: "var(--font-syne), sans-serif",
            letterSpacing: "-0.03em",
            boxShadow: "0 0 0 4px var(--bg), 0 0 0 5px var(--border), 0 16px 40px rgba(0,0,0,0.3)",
          }}
          aria-hidden="true"
        >
          AR
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="font-display"
          style={{
            fontSize: "clamp(2.6rem, 8vw, 5.2rem)",
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            color: "var(--fg)",
            marginBottom: 14,
          }}
        >
          Abror Rahmatullah
        </motion.h1>

        {/* Role cycler */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          style={{
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
            overflow: "hidden",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="gradient-text font-display"
              style={{
                fontSize: "clamp(1.05rem, 3vw, 1.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          style={{
            fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)",
            color: "var(--fg-muted)",
            lineHeight: 1.7,
            maxWidth: 520,
            margin: "0 auto 36px",
            fontWeight: 400,
          }}
        >
          Full-stack Python engineer with 4+ years in fintech, logistics & enterprise.
          REST APIs, async pipelines, and RAG systems at{" "}
          <span style={{ color: "var(--fg)", fontWeight: 500 }}>PT Sarana Multi Infrastruktur</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.46 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            View Projects
            <ArrowRight size={14} />
          </button>
          <a href="/resume.pdf" download className="btn-secondary">
            <Download size={14} />
            Download CV
          </a>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-secondary"
          >
            <Mail size={14} />
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.54 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            marginBottom: 48,
          }}
        >
          {[
            { href: "https://github.com/AbrorRahmatullah", icon: GithubIcon, label: "GitHub" },
            { href: "https://www.linkedin.com/in/abrorrahmatullah/", icon: LinkedinIcon, label: "LinkedIn" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                color: "var(--fg-muted)",
                textDecoration: "none",
                fontSize: "var(--text-sm)",
                fontWeight: 500,
                padding: "7px 14px",
                borderRadius: 8,
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border-accent)";
                el.style.color = "var(--fg)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--fg-muted)";
                el.style.transform = "translateY(0)";
              }}
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
        </motion.div>

        {/* Tech strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            justifyContent: "center",
          }}
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.72 + i * 0.04 }}
              className="tech-badge"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        aria-label="Scroll to about section"
        style={{
          position: "absolute",
          bottom: 28,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          color: "var(--fg-subtle)",
          cursor: "pointer",
          background: "none",
          border: "none",
          padding: "4px 8px",
          borderRadius: 6,
        }}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span style={{ fontSize: "var(--text-2xs)", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={15} />
        </motion.div>
      </motion.button>
    </section>
  );
}
