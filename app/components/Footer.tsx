"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "GitHub",     href: "#github" },
  { label: "Contact",    href: "#contact" },
];

const socials = [
  { href: "https://github.com/AbrorRahmatullah",          icon: GithubIcon,   label: "GitHub" },
  { href: "https://www.linkedin.com/in/abrorrahmatullah/", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "mailto:rahmatullahabror@gmail.com",             icon: Mail,         label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        padding: "40px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 28,
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 9,
                background: "var(--accent-blue)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                color: "white",
                fontFamily: "var(--font-syne), sans-serif",
                boxShadow: "0 2px 8px rgba(212,170,125,0.22)",
                flexShrink: 0,
              }}
            >
              AR
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "var(--text-base)",
                  color: "var(--fg)",
                  lineHeight: 1.2,
                  marginBottom: 2,
                }}
              >
                Abror Rahmatullah
              </p>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--fg-subtle)", fontFamily: "var(--font-mono), monospace" }}>
                Fullstack · Backend · AI Explorer
              </p>
            </div>
          </div>

          {/* Socials */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--fg-muted)",
                  textDecoration: "none",
                  transition: "all 0.18s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border-accent)";
                  el.style.color = "var(--accent-blue)";
                  el.style.transform = "translateY(-2px)";
                  el.style.background = "var(--bg-card)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--fg-muted)";
                  el.style.transform = "translateY(0)";
                  el.style.background = "var(--bg-elevated)";
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            marginBottom: 24,
          }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleNav(e, href)}
              style={{
                padding: "4px 10px",
                borderRadius: 5,
                fontSize: "var(--text-xs)",
                color: "var(--fg-subtle)",
                textDecoration: "none",
                transition: "color 0.18s, background 0.18s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--fg-muted)";
                el.style.background = "var(--bg-elevated)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--fg-subtle)";
                el.style.background = "transparent";
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--fg-subtle)",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            © {year} Abror Rahmatullah · Built with Next.js & Tailwind CSS
          </p>
          <p
            style={{
              fontSize: "var(--text-xs)",
              color: "var(--fg-subtle)",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            Jakarta, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
