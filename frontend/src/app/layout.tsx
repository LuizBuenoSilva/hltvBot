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

export const metadata: Metadata = {
  title: "CS2 Bot Discord - Estatísticas e Rankings Counter-Strike 2",
  description: "Bot Discord para Counter-Strike 2 com estatísticas, rankings, partidas ao vivo e muito mais. Adicione ao seu servidor agora!",
  keywords: "Discord bot, Counter-Strike 2, CS2, estatísticas, rankings, partidas, gaming",
  authors: [{ name: "CS2 Bot Team" }],
  openGraph: {
    title: "CS2 Bot Discord - Estatísticas e Rankings Counter-Strike 2",
    description: "Bot Discord para Counter-Strike 2 com estatísticas, rankings, partidas ao vivo e muito mais.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "CS2 Bot Discord - Estatísticas e Rankings Counter-Strike 2",
    description: "Bot Discord para Counter-Strike 2 com estatísticas, rankings, partidas ao vivo e muito mais.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
