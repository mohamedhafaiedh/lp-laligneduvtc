import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chauffeur VTC à Toulouse 24/7 | La Ligne du VTC",
  description: "Réservez votre Chauffeur VTC à Toulouse et dans toute la région toulousaine. Service de transport privé 24/7, gares, aéroports, trajets pro & perso.",
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="home wp-singular page-template page-template-elementor_header_footer page page-id-69 wp-custom-logo wp-embed-responsive wp-theme-hello-elementor wp-child-theme-hello-theme-child-master theme-default elementor-default elementor-template-full-width elementor-kit-11 elementor-page elementor-page-69">
        {children}
      </body>
    </html>
  );
}
