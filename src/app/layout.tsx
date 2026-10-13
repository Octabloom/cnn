import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1A5A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://toronto.csnn.ca"),
  title: "Healthy Eating & Lifestyle Certificate | CSNN Toronto",
  description:
    "Learn practical nutrition live online with Rasha Abu Rabi, BSc., MSc., R.H.N. 10 interactive workshops, 21 hours of expert-led education. Starts October 28, 2026. Approved for 4 canfitpro CECs.",
  keywords: [
    "Healthy Eating Certificate",
    "CSNN Toronto",
    "Canadian School of Natural Nutrition",
    "Rasha Abu Rabi",
    "Holistic Nutrition",
    "canfitpro CECs",
    "Gut Health",
    "Whole Foods Nutrition",
  ],
  authors: [{ name: "CSNN Toronto" }],
  openGraph: {
    title: "Healthy Eating & Lifestyle Certificate | CSNN Toronto",
    description:
      "What if your wellness started in your kitchen? 10 live workshops, 21 hours of interactive learning with Rasha Abu Rabi, BSc., MSc., R.H.N. Teaching since 1994.",
    url: "https://toronto.csnn.ca",
    siteName: "CSNN Toronto",
    images: [
      {
        url: "/assets/ad-pillars.jpg",
        width: 1200,
        height: 630,
        alt: "CSNN Toronto Healthy Eating & Lifestyle Certificate",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  icons: {
    icon: "/graphics/logo.jpg",
    apple: "/graphics/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FDF6DC] text-[#0F1F5C] antialiased flex flex-col selection:bg-[#F6C915] selection:text-[#071245]">
        {children}
      </body>
    </html>
  );
}
