import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "LawHelper.ch – Schweizer Gesetzesartikel finden",
  description:
    "Finden Sie relevante Artikel aus dem ZGB und OR zu Ihrer rechtlichen Frage. Kostenlose rechtliche Informationsplattform für die Schweiz.",
  keywords: [
    "Schweizer Recht", "ZGB", "OR", "Gesetzesartikel",
    "Rechtssuche", "Schweiz", "Zivilgesetzbuch", "Obligationenrecht",
  ],
  openGraph: {
    title: "LawHelper.ch – Schweizer Gesetzesartikel finden",
    description:
      "Finden Sie relevante Artikel aus dem ZGB und OR zu Ihrer rechtlichen Frage.",
    type: "website",
    locale: "de_CH",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
