import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Vaibhav Kadam — Business Analyst & IT Product Specialist",
  description:
    "Business Analyst and IT Product Support specialist with 5 years of enterprise experience at Accelya Kale Solutions. Skilled in requirements gathering, UAT, stakeholder management, and production support.",
  keywords: [
    "Business Analyst",
    "UAT",
    "Production Support",
    "JIRA",
    "SQL",
    "Agile",
    "ITIL",
    "Vaibhav Kadam",
  ],
  authors: [{ name: "Vaibhav Kadam" }],
  openGraph: {
    title: "Vaibhav Kadam — Business Analyst",
    description: "5 years of enterprise BA & IT support experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body style={{ backgroundColor: "#0a0a0a" }}>{children}</body>
    </html>
  );
}
