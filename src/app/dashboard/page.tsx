"use client";
import ContainerResDash from "@/components/dashboard/containerResDash";
import { Button } from "@/components/ui/button";
import { database } from "@/lib/firebase";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

function Page() {
  const [ordenes, setOrdenes] = useState([]);
  useEffect(() => {
    const dbRef = ref(database, "ordenes");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const ordenes = [];
      for (let key in data) {
        ordenes.push(data[key]);
      }
      setOrdenes(ordenes);
    });
  }, []);
  console.log("ORDENES", ordenes);

  let hayOrdenes = false;
  hayOrdenes = ordenes.some((orden) => orden.status !== "Atendido");
  if (!hayOrdenes) {
    return <h1 className="text-2xl font-bold">No hay órdenes por atender</h1>;
  }
  return (
    <div className="flex flex-wrap gap-2 p-4">
      {ordenes.map((orden) => {
        console.log("ORDEN", orden);
        return <ContainerResDash orden={orden} key={orden.id} />;
      })}
    </div>
  );
}

export default Page;
