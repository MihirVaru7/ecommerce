

"use client";

import React, { useEffect } from "react";
import Container from "../shared/Container";
import Card from "../shared/Card";
import Spinner from "../shared/Spinner";
import { useRouter } from "next/navigation";
import { useGetProductsQuery } from "@/services/product/productApi";
import ProductCard from "../shared/skeletonLoading/ProductCard";

const Trending = () => {
  const router = useRouter();
  const {
    data: productsData,
    isError: productsError,
    isLoading: productsLoading,
  } = useGetProductsQuery();
  const products = productsData?.data || [];

  useEffect(() => {
    if (productsError) {
      alert("Something went wrong, refresh the page.");
    }
  }, [productsError]);

  return (
    <Container>
      <section className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-4xl">
            What's <span className="">Trending Now</span>
          </h1>
          <p className="text-base">
            Discover the most trending products in Canim.
          </p>
        </div>
        <div className="flex flex-col gap-y-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-6 gap-y-8">
            {productsLoading || products?.length === 0 ? (
              <>
                {[1, 2, 3, 4].map((_, index) => (
                  <ProductCard key={index} />
                ))}
              </>
            ) : (
              <>
                {products?.slice(-16)?.map((product, index) => (
                  <Card key={index} product={product} />
                ))}
              </>
            )}
          </div>
          <button
            className="px-8 py-4 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mx-auto flex flex-row gap-x-2 items-center"
            onClick={() => router.push("/products")}
          >
            <Spinner /> Show Me More
          </button>
        </div>
      </section>
    </Container>
  );
};

export default Trending;
