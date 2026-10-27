import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Version Computers | Computer Parts, Custom PC & CCTV Solutions Rajkot",
  description:
    "Version Computers is Rajkot's leading destination for wholesale computer parts, custom gaming/workstation PC builds, 4K ColorVu CCTV systems, and chip-level motherboard repairs.",
  keywords: [
    "Version Computers Rajkot",
    "Computer parts Rajkot",
    "CCTV camera installation Rajkot",
    "Hikvision CP PLUS Rajkot",
    "Gaming PC build Rajkot",
    "Laptop repair Mangla Main Road Rajkot",
  ],
  authors: [{ name: "Version Computers" }],
  openGraph: {
    title: "Version Computers | Computer Parts & CCTV Solutions in Rajkot",
    description:
      "Quality computer hardware, custom PCs, professional CCTV camera installations, and chip-level repairs in Rajkot, Gujarat.",
    url: "https://version-computer.vercel.app",
    siteName: "Version Computers",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Version Computers | Computer Parts & CCTV Solutions",
    description: "Quality computer parts and CCTV solutions in Rajkot.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Schema.org Local Business structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ComputerStore",
              name: "Version Computers",
              image: "https://version-computer.vercel.app/favicon.ico",
              telephone: "+919327107280",
              email: "vcrajkot@gmail.com",
              url: "https://version-computer.vercel.app",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9A, Manahar plot Cornet, Mangla Main Rd",
                addressLocality: "Rajkot",
                addressRegion: "Gujarat",
                postalCode: "360002",
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "10:00",
                  closes: "20:30",
                },
              ],
              priceRange: "₹₹",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased selection:bg-blue-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
