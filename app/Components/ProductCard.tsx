"use client";

import { Product } from "../types";
import StarRating from "./StarRating";

function ProductCard({
  title,
  description,
  thumbnail,
  category,
  rating,
  price,
}: Product) {
  return (
    <div className="border border-border-dark w-100 ml-4 mt-8 rounded-2xl">
      <img
        className="bg-bg-section object-contain  w-full h-70 rounded-t-2xl"
        src={thumbnail}
        alt="Product Image"
      />
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
