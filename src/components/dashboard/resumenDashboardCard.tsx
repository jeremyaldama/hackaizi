/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WwtLvjt3TKL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Button } from "../ui/button";

export default function ResumenCardDash({
  productName,
  productQty,
  productPrice,
  productDescription,
}) {
  return (
    <Card className="w-full max-w-md p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <Badge
            variant="outline"
            className="text-sm border border-red-500 text-red-500"
          >
            x{productQty}
          </Badge>
          <div>
            <h3 className="text-lg font-bold">{productName}</h3>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">S/.{productPrice}</span>
          <FilePenIcon className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">
        <p>{productDescription}</p>
      </div>
      <div className="flex items-center justify-between mt-4 border-t pt-2">
        <span className="text-lg font-bold">
          Subtotal: S/.{productPrice * productQty}
        </span>
      </div>
    </Card>
  );
}

function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
