import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | UICT React Mentorship Blog",
    default:
      "UICT React Mentorship Blog: Insights from Next.js Developers | Learn Modern Web Development"
  },
  description:
    "Explore cutting-edge web development insights from UICT's React mentorship program. Dive into Next.js 14, Tailwind CSS, and Sanity CMS tutorials. Join our community of emerging developers and level up your React skills today!",
  keywords: [
    "React",
    "Next.js",
    "Web Development",
    "Tailwind CSS",
    "Sanity CMS",
    "UICT",
    "Mentorship"
  ],
  authors: [{ name: "UICT Team" }],
  creator: "UICT",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "UICT React Mentorship Blog",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UICT React Mentorship Blog"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@YourTwitterHandle",
    creator: "@YourTwitterHandle"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen flex flex-col dark:bg-gray-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
