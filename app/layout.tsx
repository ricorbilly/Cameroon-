import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "OrangePay CM — Paiements sécurisés",
  description: "Une expérience de paiement Orange Money simple et sécurisée au Cameroun.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>
}
