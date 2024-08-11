"use client";
import { ProductsProvider } from "@/context/ProductsContext";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function Body({ children }) {
  return (
    <ProductsProvider>
      <body className={inter.className}>
        <header className="flex items-center justify-center h-20 bg-marca">
          <Link href="/">
            <Image src="/arigo.png" alt="Logo" width={250} height={250} />
          </Link>
        </header>
        {children}
      </body>
    </ProductsProvider>
  );
}

export default Body;
