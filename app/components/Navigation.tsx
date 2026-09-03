"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["hero", "about", "skills", "experience", "projects", "github", "certifications", "contact"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (href: string) => activeSection === href.replace("#", "");

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
          background: scrolled ? "var(--nav-bg-scrolled)" : "transparent",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: 9,
                background: "var(--accent-blue)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                color: "white",
                fontFamily: "var(--font-syne), sans-serif",
                boxShadow: "0 2px 8px rgba(212,170,125,0.28)",
                flexShrink: 0,
              }}
            >
              AR
            </div>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "var(--text-base)",
                  color: "var(--fg)",
                  display: "block",
                  lineHeight: 1.1,
                }}
              >
                Abror
              </span>
              <span
                style={{
                  fontSize: "var(--text-2xs)",
                  color: "var(--fg-subtle)",
                  fontFamily: "var(--font-mono), monospace",
                  letterSpacing: "0.05em",
                }}
              >
                Full-Stack · AI
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: 2 }}>
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                  style={{
                    position: "relative",
                    padding: "6px 14px",
                    borderRadius: 7,
                    fontSize: "var(--text-sm)",
                    fontWeight: active ? 600 : 500,
                    color: active ? "var(--fg)" : "var(--fg-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s, background 0.2s",
                    background: active ? "var(--bg-elevated)" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg)";
                      (e.currentTarget as HTMLAnchorElement).style.background = "var(--bg-elevated)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--fg-muted)";
                      (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    }
                  }}
                >
                  {link.label}
                  {active && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 3,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 16,
                        height: 2,
                        borderRadius: 999,
                        background: "linear-gradient(90deg, var(--accent-blue), var(--accent-purple))",
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Side */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleLinkClick("#contact"); }}
              className="btn-primary hidden md:inline-flex"
              style={{ padding: "8px 18px", fontSize: "var(--text-sm)" }}
            >
              Hire Me
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "var(--bg-elevated)",
                border: "1px solid var(--border)",
                color: "var(--fg-muted)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              className="flex md:hidden"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: 60,
              left: 0,
              right: 0,
              zIndex: 999,
              background: "var(--nav-bg-mobile)",
              borderBottom: "1px solid var(--border)",
              padding: "12px 20px 20px",
              backdropFilter: "blur(24px)",
            }}
            className="md:hidden"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    style={{
                      padding: "12px 16px",
                      borderRadius: 8,
                      fontSize: "var(--text-base)",
                      fontWeight: active ? 600 : 500,
                      color: active ? "var(--fg)" : "var(--fg-muted)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: active ? "var(--bg-elevated)" : "transparent",
                      borderLeft: active ? "2px solid var(--accent-blue)" : "2px solid transparent",
                      transition: "all 0.15s",
                    }}
                  >
                    {link.label}
                    {active && (
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "var(--accent-blue)",
                        }}
                      />
                    )}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleLinkClick("#contact"); }}
                className="btn-primary"
                style={{ marginTop: 10, justifyContent: "center" }}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
