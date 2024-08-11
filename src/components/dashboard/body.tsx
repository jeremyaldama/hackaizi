"use client";
import { ProductsProvider } from "@/context/ProductsContext";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

function Body({ children }) {
  return (
    <ProductsProvider>
      <body className={inter.className}>
        <header className="flex items-center justify-center h-20 bg-marca">
          <Image
            src={
              "https://iziweb001b.s3.amazonaws.com/webresources/img/logo.png"
            }
            alt="Logo"
            width={100}
            height={100}
          />
        </header>
        {children}
      </body>
    </ProductsProvider>
  );
}

export default Body;
