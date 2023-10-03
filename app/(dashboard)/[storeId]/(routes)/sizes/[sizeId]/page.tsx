import primsadb from "@/lib/prismadb";
import React from "react";
import SizeForm from "./components/billboardForm";

const SizePage = async ({
  params,
}: {
  params: { sizeId: string };
}) => {
  const billboard = await primsadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={billboard}/>
      </div>
      
    </div>
  );
};

export default SizePage;
