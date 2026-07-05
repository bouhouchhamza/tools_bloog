import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://workflowtools.space"),
  title: {
    default: "WorkflowTools.space | Free Online Business, SEO, Developer, Productivity, and AI Tools",
    template: "%s | WorkflowTools.space"
  },
  description:
    "Free online business, SEO, developer, productivity, marketing, and AI tools with practical workflow guides.",
  openGraph: {
    siteName: "WorkflowTools.space",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image"
  },
  alternates: {
    canonical: "/"
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
