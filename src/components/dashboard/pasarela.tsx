"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { useProducts } from "@/context/ProductsContext";
import ResumenCard from "./resumenCard";

export default function Pasarela({ setPagado }) {
  const { productsInCart, setProductsInCart } = useProducts();
  const [paymentMethod, setPaymentMethod] = useState("Pago en Linea");
  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-6">
      {productsInCart &&
        productsInCart.map((product) => (
          <ResumenCard
            productName={product.productName}
            productQty={product.productQty}
            productPrice={product.productPrice}
            productDescription={product.productDescription}
            setProductsInCart={setProductsInCart}
            key={product.productName}
          />
        ))}
      <div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">MÉTODO DE PAGO</h2>
          <RadioGroup
            defaultValue="Pago en Linea"
            onValueChange={(e) => {
              console.log("Value changed", e);
              setPaymentMethod(e);
            }}
          >
            <div className="space-y-4">
              <div
                className={`flex items-center space-x-2 ${
                  paymentMethod === "Yape / Plin"
                    ? "bg-green-100 p-2 rounded-md"
                    : ""
                }`}
              >
                <RadioGroupItem value="Yape / Plin" id="yape/plin" />
                <Label
                  htmlFor="yape/plin"
                  className="flex items-center space-x-2"
                >
                  <CurrencyIcon className="h-6 w-6" />
                  <span>Yape / Plin</span>
                </Label>
              </div>
              {/* <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex items-center space-x-2">
                <CreditCardIcon className="h-6 w-6" />
                <span>Tarjeta en mesa (Card Reader)</span>
              </Label>
            </div> */}
              <div
                className={`flex items-center space-x-2 ${
                  paymentMethod === "Pago en Linea"
                    ? "bg-green-100 p-2 rounded-md"
                    : ""
                }`}
              >
                <RadioGroupItem value="Pago en Linea" id="online" />
                <Label htmlFor="online" className="flex items-center space-x-2">
                  <CreditCardIcon className="h-6 w-6" />
                  <span>Pago en Línea</span>
                  <span className="text-sm text-muted-foreground">
                    Debito y Crédito
                  </span>
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        {paymentMethod === "Pago en Linea" && (
          <div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">
                COMPLETA LOS DETALLES DE TU TARJETA DE CRÉDITO
              </h2>
              <div className="flex items-center justify-between">
                <Image
                  src="/placeholder.svg"
                  alt="KFC Logo"
                  className="h-12"
                  width="50"
                  height="50"
                  style={{ aspectRatio: "50/50", objectFit: "cover" }}
                />
                <div className="text-right">
                  <p className="text-sm">Número de pedido</p>
                  <p className="font-bold">7876606310</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Recuerda activar tus compras por internet
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Número de tarjeta</Label>
                  <Input
                    id="card-number"
                    placeholder="Número de tarjeta"
                    className="bg-ghost"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Caducidad</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/AA"
                      className="bg-ghost"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="CVV" className="bg-ghost" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Nombres</Label>
                    <Input
                      id="first-name"
                      placeholder="Jeremy"
                      className="bg-ghost"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Apellidos</Label>
                    <Input
                      id="last-name"
                      placeholder="Daniel"
                      className="bg-ghost"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo</Label>
                  <Input
                    id="email"
                    placeholder="jeremyaldama23.2@gmail.com"
                    type="email"
                    className="bg-ghost"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Button
                className="w-full bg-primary text-primary-foreground"
                onClick={() => setPagado(true)}
              >
                Pagar S/.{" "}
                {productsInCart.reduce((acc, product) => {
                  console.log("product", product);
                  return acc + product.productPrice * product.productQty;
                }, 0)}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                POWERED BY izipay
              </p>
            </div>
          </div>
        )}
        {paymentMethod === "Yape / Plin" && (
          <div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold">PAGA CON YAPE O PLIN</h2>
              <div className="flex items-center justify-between">
                <Image
                  src="/placeholder.svg"
                  alt="KFC Logo"
                  className="h-12"
                  width="500"
                  height="500"
                  style={{ aspectRatio: "50/50", objectFit: "cover" }}
                />
                <div className="text-right">
                  <p className="text-sm">Número de pedido</p>
                  <p className="font-bold">7876606310</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Escanea el código QR para realizar el pago
              </p>
              <div className="flex items-center justify-center">
                <Image
                  src="/yape.jpeg"
                  alt="KFC Logo"
                  width="300"
                  height="300"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CreditCardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function CurrencyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
}
