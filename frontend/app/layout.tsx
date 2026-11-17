import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adarsh Singh | AI Engineer",
  description:
    "AI engineer building retrieval and LLM infrastructure: hybrid search measured on public benchmarks, a LangGraph research workflow with verified citations, and an OpenAI-compatible LLM gateway.",

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
    title: "Adarsh Singh | AI Engineer",
    description:
      "AI engineer building retrieval and LLM infrastructure, with evaluations that report what did not work as well as what did.",
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
    title: "Adarsh Singh | AI Engineer",
    description:
      "AI engineer building retrieval and LLM infrastructure.",
    images: ["og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
