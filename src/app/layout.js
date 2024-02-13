import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "News Site",
  description: "This is a News Portal site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Container className="min-h-screen">{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
