import type { Metadata } from "next";
import { Georama } from "next/font/google";
import "./globals.css";
import CardNav from "@/components/Layout/Header/Header";


// Site typography: Georama for headings and body
const heading = Georama({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const logo = '/logo.svg'

const body = Georama({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Piggyback Cottage B&B",
  description: "A cozy Northumberland getaway — bed & breakfast by the moors.",
  openGraph: {
    type: 'website',
    title: "Piggyback Cottage B&B",
    description: "A cozy Northumberland getaway — bed & breakfast by the moors.",
    siteName: "Piggyback Cottage",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Piggyback Cottage B&B",
    description: "A cozy Northumberland getaway — bed & breakfast by the moors.",
  },
};

const items = [
    {
      label: "About the Cottage",
      bgColor: "#5E7E6A", // darker sage
      textColor: "var(--background)",
      links: [
        { label: "Details", ariaLabel: "About Company" },
        { label: "Pricing", ariaLabel: "About Careers" },
        { label: "Location", ariaLabel: "About Careers" },
        { label: "Reviews", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Explore", 
      bgColor: "#6F8F79", // mid sage
      textColor: "var(--background)",
      links: [
        { label: "Visit Northumbria Travel Guide", ariaLabel: "Travel Guide", href: 'https://www.visitnorthumberland.com/explore/things-to-do' },
        { label: "Northumbria Interactive map", ariaLabel: "Travel Guide", href: 'https://www.visitnorthumberland.com/travel-tips/while-youre-here/tourist-information-centres?map' },
        { label: "Local favourites", ariaLabel: "Local favourites" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#86A28E", // lightest sage (still darker than background)
      textColor: "var(--background)",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Instagram", ariaLabel: "Instagram" },

      ]
    }
  ];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        <CardNav
          logo={logo}
          logoAlt="Company Logo"
          items={items}
          baseColor="#FFFBE7"
          menuColor="#A2B095"
          buttonBgColor="#A2B095"
          buttonTextColor="#fff"
          ease="power3.out"
          topBarHeight={67}
        />
        {/* Top banner under the header - solid color via Tailwind utilities */}
        
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
