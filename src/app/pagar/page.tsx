"use client";
import Pasarela from "@/components/dashboard/pasarela";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

function Page() {
  const [pagado, setPagado] = useState(false);
  const [notificacion, setNotificacion] = useState(false);
  const [telefono, setTelefono] = useState("");
  return (
    <div>
      {!pagado && <Pasarela setPagado={setPagado} />}
      {pagado && (
        <div className="w-full max-w-2xl mx-auto p-4 space-y-6">
          <h1 className="text-2xl font-bold">¡Gracias por tu pedido!</h1>
          <p>
            Tu pedido está siendo procesado.{" "}
            <strong>
              Quédate en la página para recibir un aviso de tu pedido listo
            </strong>
            .
          </p>
          {!notificacion && (
            <div className="mt-4">
              <Label htmlFor="numero">
                Ingresa tu número si deseas recibir la notificación vía SMS o
                whatsApp:{" "}
              </Label>
              <Input
                type="tel"
                id="numero"
                className="bg-ghost ring-offset-white"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
              <Button
                className="w-full bg-marca mt-4"
                onClick={() => setNotificacion(true)}
              >
                Recibir notificación
              </Button>
            </div>
          )}{" "}
          {notificacion && (
            <div>
              <p>
                Se te enviará la notificación a tu número de teléfono {telefono}
                . Gracias.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Page;
