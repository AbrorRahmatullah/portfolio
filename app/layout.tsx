import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
    title: "Abror Rahmatullah — Full-Stack Python Developer & AI Engineer",
    description:
      "4+ years building production-grade Python systems in fintech, logistics & enterprise. REST APIs, async pipelines, RAG architecture.",
    type: "website",
    url: "https://abrorrahmatullah.vercel.app",
    siteName: "Abror Rahmatullah Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Abror Rahmatullah — Full-Stack Python Developer & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abror Rahmatullah — Full-Stack Python Developer & AI Engineer",
    description:
      "4+ years building production-grade Python systems in fintech, logistics & enterprise. REST APIs, async pipelines, RAG architecture.",
    images: ["/opengraph-image"],
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
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='dark'){document.documentElement.classList.remove('light');document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');document.documentElement.classList.add('light');}}catch(e){document.documentElement.classList.add('light');}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
