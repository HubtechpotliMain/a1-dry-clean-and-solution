import type React from "react"
import type { Metadata } from "next"
import { Outfit, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/contexts/AuthContext"
import { ToastProvider, Toaster } from "@/components/ui/simple-toast"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "A1 Dry Clean & Solution | Premium Dry Cleaning in Bikaner",
  description: "Experience pristine care for every fiber. A1 Dry Clean & Solution provides expert dry cleaning, steam press, and textile care services in Bikaner since 2018.",
  generator: "Next.js",
  keywords: "Dry cleaning Bikaner, laundry services, steam press, textile cleaning, A1 Dry Clean, Bikaner laundry, professional laundry",
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} light`}>
      <body className="font-jakarta antialiased bg-[#F0FDFA] text-[#0F172A]">
        <ToastProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
          <Toaster />
        </ToastProvider>
      </body>
    </html>
  )
}
