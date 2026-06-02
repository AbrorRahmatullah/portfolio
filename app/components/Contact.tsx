"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

const socialLinks = [
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/AbrorRahmatullah",
    href: "https://github.com/AbrorRahmatullah",
    color: "var(--fg-muted)",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/abrorrahmatullah",
    href: "https://www.linkedin.com/in/abrorrahmatullah/",
    color: "#0a66c2",
  },
  {
    icon: Mail,
    label: "Email",
    value: "abrorrahmatullah@gmail.com",
    href: "mailto:abrorrahmatullah@gmail.com",
    color: "var(--accent-blue)",
  },
];

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: 8,
  background: "var(--bg-elevated)",
  border: "1px solid var(--border-strong)",
  color: "var(--fg)",
  fontSize: "0.875rem",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "var(--font-dm-sans), sans-serif",
  boxSizing: "border-box" as const,
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission — replace with your API endpoint
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "100px 24px", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Contact</p>
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
            Get In Touch
          </h2>
          <p style={{ color: "var(--fg-muted)", fontSize: "0.95rem", marginBottom: 56 }}>
            Open to Fullstack, Backend, or Junior AI Engineer opportunities. Let&apos;s connect.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 24,
          }}
          className="lg:grid-cols-[1fr_380px]"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit}>
              <div className="glass" style={{ borderRadius: 16, padding: "32px" }}>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--fg)",
                    marginBottom: 24,
                  }}
                >
                  Send a Message
                </h3>

                {/* Name + Email Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                    marginBottom: 12,
                  }}
                  className="sm:grid-cols-2 grid-cols-1"
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.75rem",
                        color: "var(--fg-muted)",
                        marginBottom: 6,
                        fontWeight: 500,
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      required
                      style={{
                        ...inputStyle,
                        borderColor: focused === "name" ? "var(--accent-blue)" : "var(--border-strong)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.75rem",
                        color: "var(--fg-muted)",
                        marginBottom: 6,
                        fontWeight: 500,
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      required
                      style={{
                        ...inputStyle,
                        borderColor: focused === "email" ? "var(--accent-blue)" : "var(--border-strong)",
                      }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div style={{ marginBottom: 12 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      color: "var(--fg-muted)",
                      marginBottom: 6,
                      fontWeight: 500,
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    required
                    style={{
                      ...inputStyle,
                      borderColor: focused === "subject" ? "var(--accent-blue)" : "var(--border-strong)",
                    }}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: 20 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      color: "var(--fg-muted)",
                      marginBottom: 6,
                      fontWeight: 500,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about the opportunity or project..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    required
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: 120,
                      borderColor: focused === "message" ? "var(--accent-blue)" : "var(--border-strong)",
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    opacity: status === "sending" ? 0.7 : 1,
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <span
                        style={{
                          width: 14,
                          height: 14,
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTopColor: "white",
                          borderRadius: "50%",
                          display: "inline-block",
                          animation: "spin 0.6s linear infinite",
                        }}
                      />
                      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle size={15} />
                      Message Sent!
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle size={15} />
                      Try Again
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            {/* Info card */}
            <div className="glass" style={{ borderRadius: 14, padding: "24px" }}>
              <h3
                className="font-display"
                style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--fg)", marginBottom: 8 }}
              >
                Let&apos;s Build Something
              </h3>
              <p style={{ fontSize: "0.82rem", color: "var(--fg-muted)", lineHeight: 1.65 }}>
                I&apos;m actively looking for my next opportunity in Fullstack Development,
                Backend Engineering, or AI Engineering. Feel free to reach out — I respond
                within 24 hours.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 14,
                  fontSize: "0.78rem",
                  color: "var(--fg-muted)",
                }}
              >
                <MapPin size={12} style={{ color: "var(--accent-blue)" }} />
                Jakarta, Indonesia · Open to Remote
              </div>
            </div>

            {/* Social Links */}
            {socialLinks.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="glass"
                style={{
                  borderRadius: 12,
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  textDecoration: "none",
                  transition: "all 0.2s",
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
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: `${color === "var(--fg-muted)" ? "rgba(255,255,255,0.06)" : color + "15"}`,
                    border: `1px solid ${color === "var(--fg-muted)" ? "var(--border)" : color + "30"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={15} style={{ color }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.7rem", color: "var(--fg-subtle)", marginBottom: 1 }}>
                    {label}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "var(--fg)", fontWeight: 500 }}>
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
