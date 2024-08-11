"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FhxgbYDb7qT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function ItemCard({
  productName,
  productImage,
  productPrice,
  productDescription,
  setProductsInCart,
}) {
  const [qty, setQty] = useState(1);
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <Image
            src={productImage}
            alt="Product image"
            width="300"
            height="200"
            className="rounded-md object-cover"
            style={{ aspectRatio: "300/200", objectFit: "cover" }}
          />
          <CardTitle>{productName}</CardTitle>
          <CardDescription>{productDescription}</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <div className="flex w-full justify-between gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  className="px-2 py-1 text-sm"
                  onClick={() => {
                    setQty((qty) => qty - 1);
                  }}
                >
                  -
                </Button>
                <Input
                  type="number"
                  min="1"
                  // defaultValue="1"
                  className="w-16 text-center bg-secondary"
                  value={qty}
                  onChange={(e) => {
                    setQty(parseInt(e.target.value));
                  }}
                />
                <Button
                  variant="secondary"
                  className="px-2 py-1 text-sm"
                  onClick={() => {
                    setQty((qty) => qty + 1);
                  }}
                >
                  +
                </Button>
              </div>
              <div>
                <span className="text-lg font-bold">S/.{productPrice}</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className="bg-background"
            onClick={() => {
              setProductsInCart((productsInCart) => {
                const productIndex = productsInCart.findIndex(
                  (product) => product.productName === productName
                );
                if (productIndex !== -1) {
                  console.log("productIndex", productIndex);
                  productsInCart[productIndex].productQty += qty;
                  return [...productsInCart];
                } else
                  return [
                    ...productsInCart,
                    {
                      productName,
                      productPrice,
                      productQty: qty,
                      productDescription,
                    },
                  ];
              });
            }}
          >
            Agregar al carrito
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
