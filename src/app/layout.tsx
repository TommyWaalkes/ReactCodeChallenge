import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music Tinder",
  description: "Find someone for your band!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-green-500  p-4" lang="en">
      
      <body className={inter.className}>
      <h2 className="text-2xl antialiased font-bold">Musical Tinder ❤️‍🔥</h2>
        <div className="bg-green-700 w-4/5 text-white p-4 shadow rounded font-mono border-4 border-black">
          
          {children}
        </div>
      </body>
    </html>
  );
}
