"use client";

import { useRouter } from "next/navigation";
import { CartItem, Product } from "../types";
import StarRating from "./StarRating";
import { useCart } from "../Context/CartsContext";
import { useState } from "react";

function ProductCard({
  id,
  title,
  description,
  thumbnail,
  category,
  rating,
  price,
}: Product) {
  const router = useRouter();

  const { carts, handleCarts, adjust } = useCart();

  console.log(carts);

  const addItems = (id: number) => {
    if (carts.some((item) => item.id === id)) {
      adjust(id, 1);
    } else {
      handleCarts({
        id,
        name: title,
        meta: description,
        price,
        qty: 1,
      });
    }
  };

  return (
    <div className="border border-border-dark w-100 ml-4 mt-8 rounded-2xl cursor-pointer">
      <div className="relative w-full h-70">
        <img
          className="absolute inset-0 h-full w-full bg-bg-section object-contain rounded-t-2xl"
          src={thumbnail}
          alt="Product Image"
          onClick={() => router.push(`/products/${id}`)}
        />
      </div>
      <div className="flex flex-col  p-4">
        <h3 className="text-text-secondary font-bold text-sm">{category}</h3>
        <p className="text-text-primary font-black text-lg">{title}</p>
        <p className="text-text-primary font-black text-md line-clamp-1">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <StarRating rating={rating} price={price} />
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                addItems(id);
                router.push("/carts");
              }}
              className="bg-bg-navbar text-white text-sm px-6 py-2 rounded-md cursor-pointer hover:opacity-80"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
