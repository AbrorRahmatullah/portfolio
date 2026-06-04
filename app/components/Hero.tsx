"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download, Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const roles = [
  "Fullstack Developer",
  "Backend Engineer",
  "Junior AI Engineer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

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
        padding: "120px 24px 80px",
      }}
    >
      {/* Background Elements */}
      <div className="dot-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />

      {/* Gradient blobs */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(79,134,247,0.08) 0%, transparent 70%)",
          top: "10%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(157,112,255,0.07) 0%, transparent 70%)",
          bottom: "10%",
          right: "15%",
          transform: "translate(30%, 30%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: 900,
          width: "100%",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            borderRadius: 999,
            background: "var(--bg-card)",
            border: "1px solid var(--border-strong)",
            fontSize: "0.75rem",
            color: "var(--fg-muted)",
            marginBottom: 32,
            fontFamily: "var(--font-mono), monospace",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--accent-teal)",
              display: "inline-block",
              boxShadow: "0 0 6px var(--accent-teal)",
              animation: "pulse 2s infinite",
            }}
          />
          <style>{`@keyframes pulse { 0%,100%{opacity:1}50%{opacity:0.5} }`}</style>
          Available for opportunities
        </motion.div>

        {/* Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 28px",
            fontSize: "1.75rem",
            fontWeight: 800,
            color: "white",
            fontFamily: "var(--font-syne), sans-serif",
            boxShadow: "0 0 0 3px var(--bg), 0 0 0 5px var(--border-accent), 0 16px 40px rgba(79,134,247,0.25)",
          }}
        >
          AR
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--fg)",
            marginBottom: 16,
          }}
        >
          Abror Rahmatullah
        </motion.h1>

        {/* Animated Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="gradient-text font-display"
              style={{
                fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)",
            color: "var(--fg-muted)",
            lineHeight: 1.65,
            maxWidth: 580,
            margin: "0 auto 40px",
            fontWeight: 400,
          }}
        >
          Full-stack Python engineer with 4+ years in fintech, logistics, and enterprise systems.
          REST APIs, async pipelines, and RAG architecture at{" "}
          <span style={{ color: "var(--fg)", fontWeight: 500 }}>
            PT Sarana Multi Infrastruktur (Persero)
          </span>
          .
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <button onClick={scrollToProjects} className="btn-primary">
            View Projects
            <ArrowRight size={15} />
          </button>
          <a
            href="/resume.pdf"
            download
            className="btn-secondary"
          >
            <Download size={15} />
            Download CV
          </a>
          <button onClick={scrollToContact} className="btn-secondary">
            <Mail size={15} />
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <a
            href="https://github.com/AbrorRahmatullah"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "var(--fg-muted)",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 500,
              padding: "8px 14px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border-accent)";
              el.style.color = "var(--fg)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--fg-muted)";
            }}
          >
            <GithubIcon size={15} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abrorrahmatullah/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "var(--fg-muted)",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 500,
              padding: "8px 14px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--bg-card)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border-accent)";
              el.style.color = "var(--fg)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--fg-muted)";
            }}
          >
            <LinkedinIcon size={15} />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          color: "var(--fg-subtle)",
          cursor: "pointer",
        }}
        onClick={() =>
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span style={{ fontSize: "0.65rem", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
