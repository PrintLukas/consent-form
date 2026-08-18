import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Browser tab title / meta description. Keep this in sync with
// CONSENT_TEXT.title in consent-content.ts if the notice's subject changes.
export const metadata: Metadata = {
  title: "Einwilligungserklärung | Vetter Consulting",
  description: "Einwilligungserklärung zur Aufzeichnung, Transkription und Protokollierung von Microsoft Teams-Besprechungen.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
