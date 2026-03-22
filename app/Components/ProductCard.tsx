"use client";

import { useRouter } from "next/navigation";
import { Product } from "../types";
import StarRating from "./StarRating";
import Image from "next/image";

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

  return (
    <div
      onClick={() => router.push(`/products/${id}`)}
      className="border border-border-dark w-100 ml-4 mt-8 rounded-2xl cursor-pointer"
    >
      <div className="w-full h-70">
        <Image
          className="bg-bg-section object-contain rounded-t-2xl"
          src={thumbnail}
          alt="Product Image"
          fill
        />
      </div>
      <div className="flex flex-col  p-4">
        <h3 className="text-text-secondary font-bold text-sm">{category}</h3>
        <p className="text-text-primary font-black text-lg">{title}</p>
        <p className="text-text-primary font-black text-md line-clamp-1">
          {description}
        </p>
        <StarRating rating={rating} price={price} />
      </div>
    </div>
  );
}

export default ProductCard;
