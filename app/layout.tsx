import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import GA from "@/components/shared/GS";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convo - Free Unlimited File Converter",
  description:
    "Welcome to Convo, the ultimate free web app for seamless media format conversions! With Convo, you can effortlessly convert your images, audio, and video files to a variety of formats directly on your device—no downloads, no uploads, and no hidden fees. All processing happens securely on the client side, ensuring your files remain private and never leave your browser.",
  creator: "Aditya Shukla",
  keywords:
    "image converter, video converter, free image converter,free video converter,audio converter,ffmpeg,unlimited image converter,unlimited video converter,unlimited audio converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GA GA_MEASUREMENT_ID="G-52GQ441X7H" />
      <meta
        name="google-site-verification"
        content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU"
      />
      <body
        className={`${inter.className} antialiased flex flex-col items-center justify-center`}
      >
   
          <Navbar />
          <Toaster />
          <main className=" py-4  h-auto lg:py-4 2xl:py-8 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
            {children}
          </main>
      </body>
    </html>
  );
}
