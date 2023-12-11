import "@/styles/globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

import Provider from "@/hooks/useGlobalContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Goout",
  description: "Travel web app",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
