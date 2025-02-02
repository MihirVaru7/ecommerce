

"use client";

import DemoteStore from "@/components/dashboard/DemoteStore";
import Pencil from "@/components/icons/Pencil";
import Dashboard from "@/components/shared/layouts/Dashboard";
import { useGetStoresQuery } from "@/services/store/storeApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ListStores = () => {
  const {
    data: storesData,
    isError: storesError,
    isLoading,
  } = useGetStoresQuery();
  const stores = storesData?.data || [];
  const router = useRouter();

  useEffect(() => {
    if (storesError) {
      alert("Something went wrong, refresh the page.");
    }
  }, [storesError]);

  return (
    <Dashboard>
      {isLoading || stores.length === 0 ? (
        <DashboardLading />
      ) : (
        <div className="w-full grid grid-cols-3 gap-4">
          {stores.map((store) => (
            <div
              key={store?._id}
              className="flex flex-col gap-y-2 border p-4 rounded relative"
            >
              <Image
                src={store?.thumbnail?.url}
                alt={store?.thumbnail?.public_id}
                height={30}
                width={50}
                className="rounded h-[30px] w-[50px] object-cover"
              />
              <article className="flex flex-col gap-y-1">
                <h2 className="">{store?.title}</h2>
                <p className="text-xs line-clamp-2 mb-1.5">
                  {store?.description}
                </p>
                <p className="text-xs flex flex-row flex-wrap gap-2">
                  {store?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-100/50 border border-purple-500 text-purple-500 px-1 rounded"
                    >
                      {`#${tag}`}
                    </span>
                  ))}
                  <span className="!text-xs bg-indigo-100/50 border border-indigo-500 text-indigo-500 rounded w-fit px-2">
                    {store?.products?.length} Products
                  </span>
                </p>
              </article>

              <div className="absolute top-2 right-2 flex flex-row gap-x-2">
                {!store?.trashable && <DemoteStore store={store} />}
                <button
                  className="bg-green-50 border border-green-900 p-0.5 rounded-secondary text-green-900"
                  onClick={() =>
                    router.push(`/dashboard/list-stores/${store?._id}`)
                  }
                >
                  <Pencil />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Dashboard>
  );
};

export default ListStores;
