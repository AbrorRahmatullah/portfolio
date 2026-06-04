import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abror Rahmatullah — Full-Stack Python Developer & AI Engineer",
  description:
    "Full-stack Python Developer & AI Engineer with 4+ years building production-grade systems across fintech, logistics, and enterprise. Specializes in REST APIs, async pipelines, RAG architecture, and ERP integrations.",
  keywords: [
    "Full-Stack Developer",
    "Backend Engineer",
    "AI Engineer",
    "Python Developer",
    "FastAPI",
    "Django",
    "Flask",
    "REST API",
    "RAG",
    "AWS Bedrock",
    "LangChain",
    "Data Engineering",
    "Go Golang",
    "Abror Rahmatullah",
  ],
  authors: [
    {
      name: "Abror Rahmatullah",
      url: "https://github.com/AbrorRahmatullah",
    },
  ],
  creator: "Abror Rahmatullah",
  metadataBase: new URL("https://abrorrahmatullah.vercel.app"),
  openGraph: {
    title: "Abror Rahmatullah — Fullstack Developer",
    description:
      "Building Reliable Enterprise Applications, Data Solutions, REST APIs, and Exploring AI Technologies.",
    type: "website",
    url: "https://abrorrahmatullah.vercel.app",
    siteName: "Abror Rahmatullah Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abror Rahmatullah — Fullstack Developer",
    description:
      "Building Reliable Enterprise Applications, Data Solutions, REST APIs, and Exploring AI Technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');}else{document.documentElement.classList.remove('light');document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
