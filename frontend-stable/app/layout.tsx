import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adarsh Singh | Full-Stack Developer",
  description:
    "Full-Stack Developer building scalable, high-performance web applications with modern technologies. Experienced in AI, Full-Stack systems, and clean architecture.",

  keywords: [
    "Adarsh Singh",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "MongoDB",
    "Portfolio",
  ],

  authors: [{ name: "Adarsh Singh" }],

  openGraph: {
    title: "Adarsh Singh | Full-Stack Developer",
    description:
      "Full-Stack Developer building scalable, high-performance web applications with modern technologies.",
    url: "https://mlgadarsh-portfolio.vercel.app",
    siteName: "Adarsh Portfolio",
    images: [
      {
        url: "/og.png", // can replace later with custom OG banner
        width: 1200,
        height: 630,
        alt: "Adarsh Singh Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Adarsh Singh | Full-Stack Developer",
    description:
      "Full-Stack Developer building scalable web applications and AI systems.",
    images: ["og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
