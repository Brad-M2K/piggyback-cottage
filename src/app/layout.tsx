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
  description: "A cozy coastal Northumberland getaway.",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    title: "Piggyback Cottage B&B",
    description: "A cozy coastal Northumberland getaway.",
    siteName: "Piggyback Cottage",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Piggyback Cottage B&B",
    description: "A cozy coastal Northumberland getaway.",
  },
};

const items: CardNavItem[] = [
    {
      label: "About the Cottage",
      bgColor: "#5E7E6A", // darker sage
      textColor: "var(--background)",
      links: [
        { label: "Overview", href: '#details', ariaLabel: "Cottage overview" },
        { label: "Stay Info & Rates", href: '#pricing', ariaLabel: "Cottage pricing" },
        { label: "Gallery", href: '#gallery', ariaLabel: "Cottage gallery" },
        { label: "Reviews", href: '#reviews', ariaLabel: "Guest reviews" }
      ]
    },
    {
      label: "Explore", 
      bgColor: "#6F8F79", // mid sage
      textColor: "var(--background)",
      links: [
        { label: "Visit Northumbria Travel Guide", ariaLabel: "Travel Guide", href: 'https://www.visitnorthumberland.com/explore/things-to-do' },
        { label: "Northumbria Interactive map", ariaLabel: "Travel Guide", href: 'https://www.visitnorthumberland.com/travel-tips/while-youre-here/tourist-information-centres?map' },
        { label: "Local favourites", href: '#local-favourites', ariaLabel: "Local favourites" },
        { label: "Experience", href: '#experience-heading', ariaLabel: "Northumberland experience" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#86A28E", // lightest sage (still darker than background)
      textColor: "var(--background)",
      links: [
        { label: "Email", href: 'mailto:stay@piggybackcottage.example', ariaLabel: "Email us", icon: 'email' },
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
