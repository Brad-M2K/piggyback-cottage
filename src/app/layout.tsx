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
  title: "Lewis & Co Cottages – Piggyback Cottage, Northumberland",
  description:
    "Piggyback Cottage, part of Lewis & Co Cottages, is a cosy self-catering retreat on the Northumberland coast – perfect for relaxed breaks, coastal walks and countryside escapes.",
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: "https://www.lewisandcocottages.co.uk",
  },
  openGraph: {
    type: "website",
    title: "Lewis & Co Cottages – Piggyback Cottage, Northumberland",
    description:
      "Stay at Piggyback Cottage, a welcoming self-catering cottage on the Northumberland coast. Book direct with Lewis & Co Cottages for your next countryside or coastal break.",
    siteName: "Lewis & Co Cottages",
    url: "https://www.lewisandcocottages.co.uk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lewis & Co Cottages – Piggyback Cottage, Northumberland",
    description:
      "A cosy self-catering cottage on the Northumberland coast. Book your stay direct with Lewis & Co Cottages.",
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
        { label: "Enquire", href: '#contact', ariaLabel: "Go to contact form", icon: 'email' },
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
