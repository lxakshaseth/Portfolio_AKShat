import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { PERSONAL_INFO } from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL("https://akshat-dev.com"),
  title: {
    default: `${PERSONAL_INFO.name} | ${PERSONAL_INFO.role}`,
    template: `%s | ${PERSONAL_INFO.name}`,
  },
  description: PERSONAL_INFO.bio,
  keywords: [
    "Akshat",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Backend Engineer",
    "AI Engineer",
    "Next.js Developer",
    "TypeScript",
    "React",
    "Node.js",
    "Cloud Development",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.github }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akshat-dev.com",
    title: `${PERSONAL_INFO.name} | Full Stack Developer & AI Enthusiast`,
    description: PERSONAL_INFO.bio,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Full Stack Developer`,
    description: PERSONAL_INFO.bio,
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.role,
    url: "https://akshat-dev.com",
    sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin, PERSONAL_INFO.twitter],
    knowsAbout: [
      "Full Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "AWS Infrastructure",
      "Generative AI",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-slate-950 text-slate-100 antialiased selection:bg-purple-500/30 selection:text-purple-200">
          <a className="skip-link" href="#main-content">Skip to content</a>
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
      </body>
    </html>
  );
}
