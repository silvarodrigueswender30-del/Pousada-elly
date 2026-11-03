import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif-editorial",
  display: "swap",
  preload: true,
  weight: "400",
  style: ["normal", "italic"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://site-phi-pied-11.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pousada e Restaurante Eliiy Zita Pedro | Pé na Areia na Praia do Ubatumirim, Ubatuba/SP",
  description:
    "Pousada pé na areia na enseada de mar calmo da Praia do Ubatumirim, Ubatuba/SP. 5 chalés com cozinha privativa (3 a 15 pessoas), 3 suítes, piscina, capela e restaurante próprio.",
  icons: {
    icon: "/brand/favicon-32x32.webp",
    apple: "/brand/favicon-192x192.webp",
  },
  keywords: [
    "pousada ubatumirim",
    "pousada eliiy zita pedro",
    "pousada zita pedro",
    "pousada pe na areia ubatuba",
    "chale com cozinha ubatumirim",
    "chale para 15 pessoas ubatuba",
    "praia do ubatumirim",
    "pousada com capela ubatuba",
    "pousada mar calmo criancas ubatuba",
    "reserva direta pousada ubatuba",
  ],
  authors: [{ name: "Pousada e Restaurante Eliiy Zita Pedro" }],
  openGraph: {
    title: "Pousada e Restaurante Eliiy Zita Pedro | Pé na Areia em Ubatumirim",
    description:
      "Enseada de mar calmo em Ubatuba/SP. Chalés com cozinha para até 15 pessoas, suítes, piscina e restaurante na areia. Reserva direta com Dona Zita pelo WhatsApp.",
    url: siteUrl,
    siteName: "Pousada e Restaurante Eliiy Zita Pedro",
    images: [
      {
        url: "/media/og-whatsapp.jpg",
        width: 1200,
        height: 630,
        alt: "Fachada da Pousada e Restaurante Eliiy Zita Pedro na areia da Praia do Ubatumirim",
        type: "image/jpeg",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pousada e Restaurante Eliiy Zita Pedro | Pé na Areia em Ubatumirim",
    description:
      "Enseada de mar calmo em Ubatuba/SP. Chalés com cozinha para até 15 pessoas, suítes, piscina e restaurante na areia.",
    images: ["/media/og-whatsapp.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "Restaurant"],
    name: "Pousada e Restaurante Eliiy Zita Pedro",
    alternateName: "Pousada Zita Pedro",
    description:
      "Pousada pé na areia e restaurante caiçara na Praia do Ubatumirim, Ubatuba/SP. Chalés com cozinha privativa para 3 a 15 pessoas, suítes para 2 a 4 pessoas, piscina e estacionamento privativo.",
    url: "https://pousadaeliiyzitapedro.com.br",
    telephone: "+55-12-99232-3656",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Maria José de Jesus, 3006 — Praia do Ubatumirim",
      addressLocality: "Ubatuba",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.3486585,
      longitude: -44.928734,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "117",
      bestRating: "5",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Pé na areia na Praia do Ubatumirim", value: true },
      { "@type": "LocationFeatureSpecification", name: "5 Chalés com cozinha privativa (3 a 15 pessoas)", value: true },
      { "@type": "LocationFeatureSpecification", name: "3 Suítes para 2 a 4 pessoas", value: true },
      { "@type": "LocationFeatureSpecification", name: "Piscina ao ar livre com cascata", value: true },
      { "@type": "LocationFeatureSpecification", name: "Restaurante e quiosque próprio na areia", value: true },
      { "@type": "LocationFeatureSpecification", name: "Capela com jardim na propriedade", value: true },
    ],
  };

  return (
    <html lang="pt-BR" className={`${plusJakarta.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-[#f8faf8] text-[#0a301a] selection:bg-[#0a301a] selection:text-[#f8faf8]">
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
