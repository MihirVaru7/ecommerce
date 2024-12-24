

"use client";

import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Bag from "../icons/Bag";
import { useUpdateUserMutation } from "@/services/user/userApi";
import { useSelector } from "react-redux";
import Spinner from "../shared/Spinner";

const CartButton = ({ product }) => {
  const [qty, setQty] = useState(0);
  const { user } = useSelector((state) => state.auth);

  const [updateCart, { isLoading: cartUpdating }] = useUpdateUserMutation();

  return (
    <section className="flex flex-row items-center gap-x-4">
      <div className="flex flex-row gap-x-2 items-center border px-4 rounded-secondary h-full">
        <button
          className="border border-black/30 disabled:border-zinc-100 p-1.5 rounded-secondary"
          onClick={() => setQty(qty - 1)}
          disabled={qty === 0}
        >
          <AiOutlineMinus className="w-4 h-4" />
        </button>
        <span className="px-2 py-0.5 rounded-primary border w-12 inline-block text-center">
          {qty}
        </span>
        <button
          className="border border-black/30 disabled:border-zinc-100 p-1.5 rounded-secondary"
          onClick={() => setQty(qty + 1)}
        >
          <AiOutlinePlus className="w-4 h-4" />
        </button>
      </div>
      <button
        className="px-8 py-2 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit flex flex-row gap-x-2 items-center"
        disabled={qty === 0 || cartUpdating}
        onClick={() => {
          updateCart({
            id: user?._id,
            body: { product: product._id, quantity: qty },
          });
        }}
      >
        {cartUpdating ? (
          <Spinner />
        ) : (
          <>
            <Bag /> Add to Cart
          </>
        )}
      </button>
    </section>
  );
};

export default CartButton;
