"use client";
import { Product } from "../types";

type StarRatingProp = Pick<Product, "rating" | "price">;

function StarRating({ rating, price }: StarRatingProp) {
  return (
    <div className="flex justify-between items-center">
      {/* left bottom — rating */}
      <div className="flex items-center gap-1 bg-bg-section px-2 rounded-2xl">
        <span className="text-accent text-lg">★</span>
        <span className="text-text-secondary font-extrabold text-md">
          {rating}
        </span>
        <span className="text-md font-medium ">${price}</span>
      </div>

      {/* right bottom — price + button */}
      <div className="flex items-center gap-2">
        <button className="bg-bg-navbar text-white text-sm px-6 py-2 rounded-md cursor-pointer hover:opacity-80">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default StarRating;
