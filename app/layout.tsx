import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughtful writing about culture, work, books, and the overlooked details of a good life.",
  openGraph: {
    type: "website",
    title: "Blog",
    description: "Thoughtful writing about culture, work, books, and the overlooked details of a good life.",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
