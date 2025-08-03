import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import BottomNav from "@/components/BottomNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Updated metadata for the Drappi App
export const metadata: Metadata = {
  title: "Drappi - Your Local Marketplace",
  description: "Find and shop from stores in your city.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* Main content area with padding at the bottom to avoid overlap with nav */}
          <main className="relative pb-20 mb-4">
            {children}
          </main>
          
          {/* Fixed bottom navigation bar */}
          <BottomNav />
        </body>
      </AuthProvider>
    </html>
  );
}