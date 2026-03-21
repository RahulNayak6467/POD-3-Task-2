"use client";
import { createContext, useContext, useState } from "react";
import useFetcher from "../Hooks/useFetcher";
import { ApiProductResponse } from "../types";
export interface ValueProps {
  category: string | null;
  handleCategories: (cat: string) => void;
  data: ApiProductResponse | undefined;
  isLoading: boolean;
  sort: string;
  handleSort: (sort: string) => void;
}

const categoryContext = createContext<ValueProps | null>(null);

// export const useCategory = () => {
//   if (!categoryContext) {
//     throw new Error("No such category exist");
//   }

//   return useContext(categoryContext);
// };

export const useCategory = () => {
  const context = useContext(categoryContext);
  if (!context) {
    throw new Error("useCategory must be used within CategoryContextProvider");
  }
  return context; // ← returns ValueProps, not ValueProps | null
};

function CategoryContextProvider({ children }: { children: React.ReactNode }) {
  const [category, setCategory] = useState<string>("smartphones");
  const { data, isLoading } = useFetcher<ApiProductResponse>(
    `https://dummyjson.com/products?limit=194`,
  );
  const [sort, setSort] = useState<string>("price-asc");

  const handleCategories = (cat: string) => {
    setCategory(cat);
  };
  const handleSort = (type: string) => {
    setSort(type);
  };
  const value: ValueProps = {
    category,
    handleCategories,
    data,
    isLoading,
    sort,
    handleSort,
  };

  return (
    <categoryContext.Provider value={value}>
      {children}
    </categoryContext.Provider>
  );
}

export default CategoryContextProvider;
