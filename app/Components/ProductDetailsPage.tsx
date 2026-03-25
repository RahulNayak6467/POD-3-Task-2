"use client";

import { useState } from "react";
import { ProductDetailsProps } from "../products/[id]/page";
import { useRouter } from "next/navigation";
import { useCart } from "../Context/CartsContext";

function ProductDetailsPage({
  data,
  id,
}: {
  data: ProductDetailsProps;
  id: number;
}) {
  const {
    title,
    description,
    price,
    rating,
    tags,
    brand,
    images,
    thumbnail,
    category,
    stock,
  } = data;

  const [currentImage, setCurrentImage] = useState<string>(thumbnail);

  const handleCurrentImage = (img: string) => {
    setCurrentImage(img);
  };

  const { carts, adjust, handleCarts } = useCart();

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

  const router = useRouter();

  return (
    <section className="mt-12 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Images Section */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="bg-bg-section border border-border-medium rounded-2xl h-96 lg:h-[500px] flex items-center justify-center overflow-hidden">
              <img
                src={currentImage}
                alt={title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto">
              {images.slice(0, 4).map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-20 h-20 bg-bg-section border border-border-medium rounded-xl flex items-center justify-center cursor-pointer hover:border-accent transition-colors"
                >
                  <img
                    src={img}
                    alt={`${title} ${index + 1}`}
                    onClick={() => handleCurrentImage(img)}
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-sm text-text-muted font-semibold uppercase tracking-wide">
                {category}
              </span>
              <h1 className="text-2xl lg:text-3xl font-bold text-text-primary mt-2">
                {title}
              </h1>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs py-1 px-3 font-medium text-text-primary bg-bg-section rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="text-accent text-lg">
                    {i < Math.round(rating) ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <span className="text-text-primary font-semibold">
                {rating} / 5
              </span>
            </div>

            {/* Price */}
            <div className="text-3xl font-extrabold text-text-primary">
              ${price}
            </div>

            {/* Description */}
            <p className="text-text-secondary leading-relaxed">{description}</p>

            {/* Stock */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-text-primary font-medium">In stock</span>
              <span className="text-text-muted text-sm">
                ({stock} units left)
              </span>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => {
                addItems(id);
                router.push("/carts");
              }}
              className="w-full py-4 bg-bg-navbar cursor-pointer text-text-inverse font-semibold rounded-2xl hover:opacity-90 transition-opacity"
            >
              Add to Cart
            </button>

            {/* Meta Information */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-bg-section rounded-2xl">
                <p className="text-text-muted uppercase font-bold text-xs mb-2">
                  Brand
                </p>
                <h3 className="text-text-primary font-semibold">{brand}</h3>
              </div>
              <div className="p-4 bg-bg-section rounded-2xl">
                <p className="text-text-muted uppercase font-bold text-xs mb-2">
                  Category
                </p>
                <h3 className="text-text-primary font-semibold">{category}</h3>
              </div>
              <div className="p-4 bg-bg-section rounded-2xl">
                <p className="text-text-muted uppercase font-bold text-xs mb-2">
                  Rating
                </p>
                <h3 className="text-text-primary font-semibold">
                  {rating} / 5
                </h3>
              </div>
              <div className="p-4 bg-bg-section rounded-2xl">
                <p className="text-text-muted uppercase font-bold text-xs mb-2">
                  Stock
                </p>
                <h3 className="text-text-primary font-semibold">
                  {stock} units
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
