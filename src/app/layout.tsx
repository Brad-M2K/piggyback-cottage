import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import "./globals.css";

// Cozy cottage typography: Lora for headings, Nunito for body text
const heading = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const body = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Piggyback Cottage B&B",
  description: "A cozy Northumberland getaway — bed & breakfast by the moors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
