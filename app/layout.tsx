import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingChatButton from "../components/FloatingChatButton";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Uchoice - E-commerce',
  description: 'Modern E-commerce website built with Next.js',
  openGraph: {
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingChatButton />
      </body>
    </html>
  );
}
