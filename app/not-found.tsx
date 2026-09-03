"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
        padding: "40px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(212,170,125,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ textAlign: "center", position: "relative", zIndex: 1, maxWidth: 480 }}
      >
        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.34, 1.06, 0.64, 1] }}
          style={{
            fontSize: "clamp(6rem, 20vw, 10rem)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            fontFamily: "var(--font-syne), sans-serif",
            background: "linear-gradient(110deg, #d4aa7d 0%, #c49060 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: 8,
            userSelect: "none",
          }}
        >
          404
        </motion.div>

        {/* Divider */}
        <div
          style={{
            width: 40,
            height: 2,
            borderRadius: 999,
            background: "var(--accent-blue)",
            margin: "0 auto 28px",
          }}
        />

        {/* Message */}
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(1.4rem, 4vw, 1.9rem)",
            fontWeight: 700,
            color: "var(--fg)",
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            marginBottom: 14,
          }}
        >
          Page not found
        </h1>
        <p
          style={{
            fontSize: "var(--text-base)",
            color: "var(--fg-muted)",
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          This route doesn&apos;t exist — or it moved somewhere else.
          Head back to the portfolio.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/"
            className="btn-primary"
            style={{ gap: 8 }}
          >
            <Home size={14} />
            Go home
          </a>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary"
            style={{ gap: 8 }}
          >
            <ArrowLeft size={14} />
            Go back
          </button>
        </div>

        {/* Mono hint */}
        <p
          style={{
            marginTop: 48,
            fontSize: "var(--text-xs)",
            color: "var(--fg-subtle)",
            fontFamily: "var(--font-mono), monospace",
            letterSpacing: "0.06em",
          }}
        >
          HTTP 404 · abrorrahmatullah.vercel.app
        </p>
      </motion.div>
    </main>
  );
}
