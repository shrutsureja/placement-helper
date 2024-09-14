import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Placement Helper",
  description: "A quick interview question's handbook for college students before placement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body>
        {children}
      </body>
    </html>
  );
}
