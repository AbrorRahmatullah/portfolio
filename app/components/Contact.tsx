"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, useInView, type Variants } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, MapPin, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

type FormState = { name: string; email: string; subject: string; message: string };
type Status = "idle" | "sending" | "success" | "error";

const socialLinks = [
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/AbrorRahmatullah",
    href: "https://github.com/AbrorRahmatullah",
    color: "var(--fg-muted)",
    hoverColor: "var(--fg)",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/abrorrahmatullah",
    href: "https://www.linkedin.com/in/abrorrahmatullah/",
    color: "#0a66c2",
    hoverColor: "#0a66c2",
  },
  {
    icon: Mail,
    label: "Email",
    value: "rahmatullahabror@gmail.com",
    href: "mailto:rahmatullahabror@gmail.com",
    color: "var(--accent-blue)",
    hoverColor: "var(--accent-blue)",
  },
];

const MAX_MESSAGE = 1000;

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_MESSAGE) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setTimeout(() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }, 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.56, ease: [0.16, 1, 0.3, 1] } },
  };

  const fieldStyle = (name: string) => ({
    width: "100%",
    padding: "11px 14px",
    borderRadius: 9,
    background: "var(--bg-elevated)",
    border: `1px solid ${focused === name ? "var(--accent-blue)" : "var(--border-strong)"}`,
    color: "var(--fg)",
    fontSize: "var(--text-sm)",
    outline: "none",
    transition: "border-color 0.18s, box-shadow 0.18s",
    fontFamily: "var(--font-dm-sans), sans-serif",
    boxSizing: "border-box" as const,
    boxShadow: focused === name ? "0 0 0 3px rgba(37,99,235,0.12)" : "none",
  });

  return (
    <section id="contact" ref={ref} style={{ padding: "100px 24px", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.48 }}
        >
          <p className="section-label">Contact</p>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: 10, lineHeight: 1.1 }}
          >
            Let&apos;s talk
          </h2>
          <p style={{ color: "var(--fg-muted)", fontSize: "var(--text-base)", marginBottom: 52 }}>
            Open to Fullstack, Backend, or AI Engineering roles. I usually reply within a day.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}
          className="lg:grid-cols-[1fr_360px]"
        >
          {/* Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit}>
              <div className="glass" style={{ borderRadius: 16, padding: "30px 32px" }}>
                <h3
                  className="font-display"
                  style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--fg)", marginBottom: 22 }}
                >
                  Send a Message
                </h3>

                <div
                  style={{ display: "grid", gap: 12, marginBottom: 12 }}
                  className="grid-cols-1 sm:grid-cols-2"
                >
                  {(["name", "email"] as const).map((field) => (
                    <div key={field}>
                      <label
                        htmlFor={`contact-${field}`}
                        style={{ display: "block", fontSize: "var(--text-xs)", color: "var(--fg-muted)", marginBottom: 6, fontWeight: 500 }}
                      >
                        {field === "name" ? "Name" : "Email"}
                      </label>
                      <input
                        id={`contact-${field}`}
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        placeholder={field === "name" ? "Your name" : "your@email.com"}
                        value={form[field]}
                        onChange={handleChange}
                        onFocus={() => setFocused(field)}
                        onBlur={() => setFocused(null)}
                        required
                        style={fieldStyle(field)}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: 12 }}>
                  <label
                    htmlFor="contact-subject"
                    style={{ display: "block", fontSize: "var(--text-xs)", color: "var(--fg-muted)", marginBottom: 6, fontWeight: 500 }}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    required
                    style={fieldStyle("subject")}
                  />
                </div>

                <div style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <label
                      htmlFor="contact-message"
                      style={{ fontSize: "var(--text-xs)", color: "var(--fg-muted)", fontWeight: 500 }}
                    >
                      Message
                    </label>
                    <span
                      style={{
                        fontSize: "var(--text-2xs)",
                        fontFamily: "var(--font-mono), monospace",
                        color: form.message.length > MAX_MESSAGE * 0.85 ? "var(--accent-teal)" : "var(--fg-subtle)",
                      }}
                    >
                      {form.message.length}/{MAX_MESSAGE}
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about the opportunity or project..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                    rows={5}
                    style={{ ...fieldStyle("message"), resize: "vertical", minHeight: 120 }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    opacity: status === "sending" ? 0.75 : 1,
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <span
                        style={{
                          width: 14, height: 14,
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTopColor: "white",
                          borderRadius: "50%",
                          display: "inline-block",
                          animation: "spin 0.6s linear infinite",
                        }}
                      />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <><CheckCircle size={15} /> Message Sent!</>
                  ) : status === "error" ? (
                    <><AlertCircle size={15} /> Try Again</>
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Info panel */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div className="glass" style={{ borderRadius: 14, padding: "24px", borderLeft: "3px solid var(--accent-blue)" }}>
              <h3 className="font-display" style={{ fontSize: "var(--text-base)", fontWeight: 700, color: "var(--fg)", marginBottom: 10 }}>
                Currently available
              </h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--fg-muted)", lineHeight: 1.65, marginBottom: 14 }}>
                Looking for Fullstack, Backend, or AI Engineering roles — especially in
                fintech, data infrastructure, or any team that ships real products.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "var(--text-xs)", color: "var(--fg-muted)" }}>
                <MapPin size={11} style={{ color: "var(--accent-blue)" }} />
                Jakarta, Indonesia · Open to Remote
              </div>
            </div>

            {socialLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="glass"
                style={{
                  borderRadius: 12,
                  padding: "15px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  textDecoration: "none",
                  transition: "all 0.18s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border-accent)";
                  el.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateX(0)";
                }}
              >
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={15} style={{ color: "var(--fg-muted)" }} />
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p style={{ fontSize: "var(--text-xs)", color: "var(--fg-subtle)", marginBottom: 1 }}>{label}</p>
                  <p style={{ fontSize: "var(--text-xs)", color: "var(--fg)", fontWeight: 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {value}
                  </p>
                </div>
                <ArrowRight size={13} style={{ color: "var(--fg-subtle)", flexShrink: 0 }} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
