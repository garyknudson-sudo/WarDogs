import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "War Dogs Football | Elite 12U & 14U Tackle Program",
  description:
    "Join War Dogs Football for fall season evaluations. Elite coaching, disciplined development, and championship culture for 7th and 8th grade players.",
  openGraph: {
    title: "War Dogs Football",
    description: "Sign up for fall season evaluations.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
