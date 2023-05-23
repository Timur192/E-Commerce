import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { CartContextProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce App",
  description: "E-Commerce App",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ marginInline: "100px" }}>
        <CartContextProvider>
          <NavBar />
          {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
