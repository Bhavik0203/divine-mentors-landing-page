import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProvider from "./components/I18nProvider";
import ScrollButton from "./components/scrollbutton";
import WhatsAppPopup from "./components/whatsapp";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divine Mentors - Authentic Spiritual Wisdom",
  description: "Connect with India's timeless masters and discover the path to inner peace, clarity, and sustainable transformation in your life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <I18nProvider>
            <ScrollButton/>
            <WhatsAppPopup 
              companyName="Divine Mentors"
              phoneNumber="+91 9156123575"
              defaultMessage="Hello! I'm interested in learning more about your spiritual guidance services."
              position="left"
              theme="spiritual"
            />
            {children}
          </I18nProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
