import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBM_PLEX = IBM_Plex_Sans({ 
  subsets: ["latin"],
   weight: ['400', '500', '600', "700"],
   variable: "--font-ibm-plex"
});

export const metadata: Metadata = {
  title: "Imageginify",
  description: "GenAI-Powered Image Generator App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: '#624cf5'}
    }}>
      <html lang="en">
        <body className={cn("font-IBM_PLEX antialiased", IBM_PLEX.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
