import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "[Your Name] CPA - Professional Accounting Services",
  description: "Trusted CPA providing comprehensive accounting, tax preparation, bookkeeping, and financial consulting services. Get expert financial guidance for your business and personal needs.",
  keywords: "CPA, accountant, tax preparation, bookkeeping, financial services, business consulting, GST filing, payroll management",
  author: "[Your Name]",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
