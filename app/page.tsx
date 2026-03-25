"use client";
import CategoriesRow from "./Components/CategoryRow";
// import { useState } from "react";
// import CategoriesRow from "./Components/CatgoriesRow";
import Hero from "./Components/Hero";
import ProductCard from "./Components/ProductCard";
import useFetcher from "./Hooks/useFetcher";
// import CategoryContextProvider, {
//   useCategory,
//   valueProps,
// } from "./Context/CategoryContext";
import { ApiProductResponse, Product } from "./types";
import ProductCardSkeleton from "./Components/Loader";
import { useCategory, ValueProps } from "./Context/CategoryContext";
import { useEffect } from "react";

export default function Home() {
  const { data, isLoading, category, handleCategories } = useCategory();

  const getData = data?.products.filter(
    (el) => el.category === category,
  ) as Product[];

  useEffect(() => {
    handleCategories("smartphones");
  }, []);

  return (
    <div className="mt-12">
      <Hero />
      <div className="mt-6">
        <CategoriesRow
          category={["smartphones", "laptops", "beauty", "furniture"]}
        />
      </div>

      {!isLoading ? (
        <div className="grid grid-cols-4">
          {getData.slice(0, 20).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              thumbnail={product.thumbnail}
              rating={product.id}
              description={product.description}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <ProductCardSkeleton />
      )}
      {/* <CategoriesRow />
      {!isLoading ? (
        <div className="grid grid-cols-4">
          {data?.products.map((product) => (
            <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
              rating={product.id}
              description={product.description}
              category={product.category}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <ProductCardSkeleton />
        )} */}
    </div>
  );
}
