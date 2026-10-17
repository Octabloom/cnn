import React from "react";
import type { Metadata } from "next";
import ThankYouHelcClient from "./ThankYouHelcClient";

export const metadata: Metadata = {
  title: "Thank You · Healthy Eating & Lifestyle Certificate (HELC) | CSNN Toronto",
  description:
    "Thank you for registering your interest in CSNN Toronto's Healthy Eating & Lifestyle Certificate (HELC).",
  alternates: {
    canonical: "https://octobloomwellness.com/thank-you-helc",
  },
  openGraph: {
    title: "Thank You · Healthy Eating & Lifestyle Certificate (HELC)",
    description:
      "Thank you for registering your interest in CSNN Toronto's Healthy Eating & Lifestyle Certificate (HELC).",
    url: "https://octobloomwellness.com/thank-you-helc",
    siteName: "Octabloom Wellness · CSNN Toronto",
    type: "website",
  },
};

export default function ThankYouHelcPage() {
  return <ThankYouHelcClient />;
}
