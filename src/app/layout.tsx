import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuji Kurokawa",
  description:
    "a programmer who are producing useless code for fun, interested in web development / mobile phone photographer",
  applicationName: "Yuji Kurokawa",
  authors: {
    name: "Yuji Kurokawa",
    url: "https://inewsk.me/",
  },
  keywords: [
    "Yuji Kurokawa",
    "Junkcode Maker",
    "Web Developer",
    "Mobile Application Developer",
    "Photographer",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
  creator: "Yuji Kurokawa",
  publisher: "Yuji Kurokawa",
  icons: {
    icon: "/assets/images/avatar.jpg",
    apple: "/assets/images/avatar.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://inewsk.me/",
    title: "Yuji Kurokawa",
    description:
      "a programmer who are producing useless code for fun, interested in web development / mobile phone photographer",
    images: [
      {
        url: "/assets/images/avatar.jpg",
        width: 400,
        height: 400,
        alt: "avatar",
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
      <body className={inter.className} data-theme="dark">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
