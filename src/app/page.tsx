"use client";
import ItemCard from "@/components/dashboard/ItemCard";
import ResumenCard from "@/components/dashboard/resumenCard";
import { Button } from "@/components/ui/button";
import { useProducts } from "@/context/ProductsContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const products = [
  {
    productName: "Combo 8 Nuggets",
    productImage:
      "https://cdn.tictuk.com/fbaba5c6-70cb-d548-0aa1-915f89e4a48c/ecommerce_pickup/WEB_CMB_8_NUG_PCK_10112_202407221023332003.jpg",
    productPrice: 20,
    description: "Combo de 8 nuggets con papas y gaseosa",
  },
  {
    productName: "Toasted Twister",
    productImage:
      "https://cdn.tictuk.com/fbaba5c6-70cb-d548-0aa1-915f89e4a48c/ecommerce_pickup/WEB_TTW_TRADICIONAL_PCK_486_202407021521327548.jpg",
    productPrice: 25,
    description: "Toasted Twister de pollo",
  },
  {
    productName: "Combo Kentucky Chicken Sandwich",
    productImage:
      "https://cdn.tictuk.com/fbaba5c6-70cb-d548-0aa1-915f89e4a48c/ecommerce_pickup/WEB_CMB_KCS_PCK_12759_202407221033158463.jpg",
    productPrice: 30,
    description: "Combo de sandwich de pollo + papas + gaseosa",
  },
];

export default function Home() {
  const router = useRouter();
  const { productsInCart, setProductsInCart } = useProducts();

  return (
    <div className="grid md:grid-cols-[auto_40%] grid-cols-1">
      <main className="flex min-h-screen flex-wrap md:justify-start justify-center gap-1 items-start md:p-10 p-2 w-full">
        {products.map((product) => (
          <ItemCard
            productName={product.productName}
            productImage={product.productImage}
            productPrice={product.productPrice}
            productDescription={product.description}
            setProductsInCart={setProductsInCart}
            key={product.productName}
          />
        ))}
      </main>

      <section className="p-10 flex flex-col justify-between h-[calc(100vh-80px)] ">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Resumen de pedido:</h1>
          {productsInCart &&
            productsInCart.map((product) => (
              <ResumenCard
                productName={product.productName}
                productPrice={product.productPrice}
                productQty={product.productQty}
                productDescription={product.productDescription}
                setProductsInCart={setProductsInCart}
                key={product.productName}
              />
            ))}
        </div>
        {productsInCart.length !== 0 && (
          <Button className="w-full" onClick={() => router.push("/pagar")}>
            Finalizar Pedido
          </Button>
        )}
      </section>
    </div>
  );
}
