"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        padding: "40px 24px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {/* Top Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          {/* Branding */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 7,
                background: "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: "white",
                fontFamily: "var(--font-syne), sans-serif",
              }}
            >
              AR
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "var(--fg)",
                  lineHeight: 1.2,
                }}
              >
                Abror Rahmatullah
              </p>
              <p style={{ fontSize: "0.72rem", color: "var(--fg-subtle)" }}>
                Fullstack Developer · Backend Engineer · AI Explorer
              </p>
            </div>
          </div>

          {/* Social */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {[
              { href: "https://github.com/AbrorRahmatullah", icon: GithubIcon, label: "GitHub" },
              { href: "https://www.linkedin.com/in/abrorrahmatullah/", icon: LinkedinIcon, label: "LinkedIn" },
              { href: "mailto:abrorrahmatullah@gmail.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 7,
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--fg-muted)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border-accent)";
                  el.style.color = "var(--accent-blue)";
                  el.style.background = "var(--bg-card)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--fg-muted)";
                  el.style.background = "var(--bg-elevated)";
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Nav Links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          {["About", "Skills", "Experience", "Projects", "GitHub", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(`#${link.toLowerCase()}`)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                padding: "4px 10px",
                borderRadius: 5,
                fontSize: "0.78rem",
                color: "var(--fg-subtle)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "var(--fg-muted)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "var(--fg-subtle)";
              }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              color: "var(--fg-subtle)",
              fontFamily: "var(--font-mono), monospace",
            }}
          >
            © {year} Abror Rahmatullah. Built with Next.js & Tailwind CSS.
          </p>
          <p
            style={{
              fontSize: "0.72rem",
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
