import { writeOrden } from "@/lib/orden";
import { Button } from "../ui/button";
import ResumenCardDash from "./resumenDashboardCard";

function ContainerResDash({ orden }) {
  if (orden.status === "Atendido") return null;
  return (
    <div className="border-dashed border-4 border-sky-500 w-fit">
      {Object.entries(orden).map(([productKey, product]) => {
        if (productKey === "id") return;
        return (
          <ResumenCardDash
            productName={product.productName}
            productQty={product.productQty}
            productPrice={product.productPrice}
            productDescription={product.productDescription}
            key={productKey}
          />
        );
      })}

      <Button
        className="w-full"
        onClick={() => {
          console.log("Atender");
          writeOrden({ ...orden, status: "Atendido" });
        }}
      >
        Atender
      </Button>
    </div>
  );
}

export default ContainerResDash;
