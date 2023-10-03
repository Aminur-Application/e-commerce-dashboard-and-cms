import primsadb from "@/lib/prismadb";
import React from "react";
import ColorForm from "./components/colorForm";

const ColorPage = async ({
  params,
}: {
  params: { colorId: string };
}) => {
  const billboard = await primsadb.color.findUnique({
    where: {
      id: params.colorId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={billboard}/>
      </div>
      
    </div>
  );
};

export default ColorPage;
