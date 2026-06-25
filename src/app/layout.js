import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet"></link>
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ZAVELO",
  description: "Next-gen social commerce platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-black text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}