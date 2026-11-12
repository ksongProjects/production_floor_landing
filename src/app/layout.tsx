import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SITE } from "@/site";
import "./globals.css";

// Public URL of this site, used for absolute social-card links. Set on Vercel.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3400";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${SITE.name} — floor layout, work planning and live progress`,
  description: SITE.description,
  openGraph: {
    type: "website",
    title: SITE.name,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: { card: "summary", title: SITE.name, description: SITE.description },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0e12" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
