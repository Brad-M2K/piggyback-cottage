import type { Metadata } from "next";
import { Georama } from "next/font/google";
import "./globals.css";
import CardNav, { type CardNavItem } from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer";


// Site typography: Georama for headings and body
const heading = Georama({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const logo = '/logo.svg';

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

const items: CardNavItem[] = [
    {
      label: "About the Cottage",
      bgColor: "#5E7E6A", // darker sage
      textColor: "var(--background)",
      links: [
        { label: "Details", href: '#details', ariaLabel: "About Details" },
        { label: "Pricing", href: '#pricing', ariaLabel: "About Pricing" },
        { label: "Location", href: '#location', ariaLabel: "About Location" },
        { label: "Reviews", href: '#reviews', ariaLabel: "About Reviews" }
      ]
    },
    {
      label: "Explore", 
      bgColor: "#6F8F79", // mid sage
      textColor: "var(--background)",
      links: [
        { label: "Visit Northumbria Travel Guide", ariaLabel: "Travel Guide", href: 'https://www.visitnorthumberland.com/explore/things-to-do' },
        { label: "Northumbria Interactive map", ariaLabel: "Travel Guide", href: 'https://www.visitnorthumberland.com/travel-tips/while-youre-here/tourist-information-centres?map' },
        { label: "Local favourites", href: '#local-favourites', ariaLabel: "Local favourites" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#86A28E", // lightest sage (still darker than background)
      textColor: "var(--background)",
      links: [
        { label: "Email", href: 'mailto:stay@piggybackcottage.example', ariaLabel: "Email us" },
        {
          label: "Instagram",
          href: 'https://www.instagram.com/lewisandco_cottages?igsh=N3U0bXZwMDVuMG1z',
          ariaLabel: "Instagram",
          icon: 'instagram',
        },

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
        <Footer />
      </body>
    </html>
  );
}
