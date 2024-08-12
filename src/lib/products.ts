"use client";
import { ref, set, onValue } from "firebase/database";
import { database } from "./firebase";

export function writeProduct(product) {
  set(ref(database, "products/" + product.id), product);
}

export async function readProducts() {
  const productsRef = ref(database, "products/");
  let data;
  onValue(productsRef, async (snapshot) => {
    console.log("snapshot", snapshot);
    data = await snapshot.val();
    console.log("data", data);
  });
  return data;
}
