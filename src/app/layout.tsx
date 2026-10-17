import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
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
  title: "Healthy Eating and Lifestyle Certification | Octobloom powered by CSNN Toronto",
  description:
    "Explore Octobloom’s Healthy Eating and Lifestyle Certification, powered by CSNN Toronto, to learn practical nutrition, healthy eating habits, and lifestyle strategies for better well-being.",
  keywords: [
    "Healthy Eating Certificate",
    "Octobloom",
    "Octobloom Wellness",
    "CSNN Toronto",
    "Canadian School of Natural Nutrition",
    "Rasha Abu Rabi",
    "Holistic Nutrition",
    "canfitpro CECs",
    "Gut Health",
    "Whole Foods Nutrition",
  ],
  authors: [{ name: "Octobloom & CSNN Toronto" }],
  openGraph: {
    title: "Healthy Eating and Lifestyle Certification | Octobloom powered by CSNN Toronto",
    description:
      "Explore Octobloom’s Healthy Eating and Lifestyle Certification, powered by CSNN Toronto, to learn practical nutrition, healthy eating habits, and lifestyle strategies for better well-being.",
    url: "https://toronto.csnn.ca",
    siteName: "Octobloom powered by CSNN Toronto",
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
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1708456440516347');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#FDF6DC] text-[#0F1F5C] antialiased flex flex-col selection:bg-[#F6C915] selection:text-[#071245]">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1708456440516347&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
