"use client";
import { useEffect, useState } from "react";
import CategoriesRow from "../Components/CategoryRow";
import ProductCardSkeleton from "../Components/Loader";
import ProductCard from "../Components/ProductCard";
import Toolbar from "../Components/ToolBar";
import { useCategory } from "../Context/CategoryContext";
import CategoryDescription from "./CategoryDescription";
import PaginationProducts from "../Components/Pagination";

const CategoriesArray = [
  "smartphones",
  "all",
  "laptops",
  "mens-shirts",
  "womens-dresses",
  "skin-care",
  "fragrances",
  "furniture",
  "sports-accessories",
  "groceries",
  "sunglasses",
  "mens-watches",
];

const PAGE_SIZE = 4;

function CategoriesPage() {
  const { data, isLoading, category, handleCategories } = useCategory();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    handleCategories("all");
  }, []);

  const getData =
    category === "all"
      ? data?.products
      : data?.products.filter((el) => el.category === category);

  const onSortChange = (sort: string) => {
    if (sort === "price-asc") {
      data?.products?.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-desc") {
      data?.products?.sort((a, b) => b.price - a.price);
    }
    if (sort === "rating") {
      data?.products?.sort((a, b) => b.rating - a.rating);
    }
  };
  const pageNumber = getData ? Math.ceil(getData.length / PAGE_SIZE) : 0;

  return (
    <div>
      <CategoryDescription />
      <div className="flex items-center justify-between gap-4">
        <div className="mt-12 grid grid-cols-3 w-fit gap-y-2">
          <CategoriesRow
            category={CategoriesArray}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <Toolbar
          resultCount={data?.products.length ?? 0}
          //   onSortChange={(sort) => console.log(sort)} // wire up sort logic later
          onSortChange={onSortChange}
        />
      </div>

      {!isLoading ? (
        <div className="grid grid-cols-4">
          {getData
            ?.slice((currentPage - 1) * 4, (currentPage - 1) * 4 + 4)
            ?.map((product) => (
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
      <div className="mt-6">
        <PaginationProducts
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageNumber={pageNumber}
        />
      </div>
    </div>
  );
}

export default CategoriesPage;
