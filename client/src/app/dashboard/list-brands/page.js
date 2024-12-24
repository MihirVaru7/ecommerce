
"use client";

import DemoteBrand from "@/components/dashboard/DemoteBrand";
import Pencil from "@/components/icons/Pencil";
import Dashboard from "@/components/shared/layouts/Dashboard";
import { useGetBrandsQuery } from "@/services/brand/brandApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ListBrands = () => {
  const { data: brandsData, isError: brandsError } = useGetBrandsQuery();
  const brands = brandsData?.data || [];
  const router = useRouter();

  useEffect(() => {
    if (brandsError) {
      alert("Something went wrong, refresh the page.");
    }
  }, [brandsError]);

  return (
    <Dashboard>
      <div className="w-full grid grid-cols-3 gap-4">
        {brands.map((brand) => (
          <div
            key={brand?._id}
            className="flex flex-col gap-y-2 border p-4 rounded relative"
          >
            <Image
              src={brand?.logo?.url}
              alt={brand?.logo?.public_id}
              height={30}
              width={50}
              className="rounded h-[30px] w-[50px] object-cover"
            />
            <article className="flex flex-col gap-y-1">
              <h2 className="">{brand?.title}</h2>
              <p className="text-xs line-clamp-2 mb-1.5">
                {brand?.description}
              </p>
              <p className="text-xs flex flex-row flex-wrap gap-2">
                {brand?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-100/50 border border-purple-500 text-purple-500 px-1.5 rounded"
                  >
                    {`#${tag}`}
                  </span>
                ))}
                <span className="!text-xs bg-indigo-100/50 border border-indigo-500 text-indigo-500 rounded w-fit px-2">
                  {brand?.products?.length} Products
                </span>
              </p>
            </article>

            <div className="absolute top-2 right-2 flex flex-row gap-x-2">
              {!brand?.trashable && <DemoteBrand brand={brand} />}
              <button
                className="bg-green-50 border border-green-900 p-0.5 rounded-secondary text-green-900"
                onClick={() =>
                  router.push(`/dashboard/list-brands/${brand?._id}`)
                }
              >
                <Pencil />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Dashboard>
  );
};

export default ListBrands;
