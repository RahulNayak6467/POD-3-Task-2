"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { useCategory, ValueProps } from "../Context/CategoryContext";

interface CategoryListsProps {
  title: string;
  currentCategory: string;
  setCurrentCategory: Dispatch<SetStateAction<string>>;
  setCurrentPage?: Dispatch<SetStateAction<number>> | undefined;
}

const baseClass =
  "ml-4 font-medium px-4 py-2 rounded-2xl  cursor-pointer text-sm w-fit";
const activeClass = "text-text-inverse bg-bg-navbar text-sm w-fit";
const inactiveClass = "text-text-primary bg-bg-section text-sm w-fit ";

function CategoriesRow({
  category,
  setCurrentPage,
}: {
  category: string[];
  setCurrentPage?: Dispatch<SetStateAction<number>> | undefined;
}) {
  const [currentCategory, setCurrentCategory] = useState<string>(category[0]);

  return (
    <>
      {category.map((cat) => (
        <CategoryLists
          key={cat}
          title={cat}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </>
  );
}

function CategoryLists({
  title,
  currentCategory,
  setCurrentCategory,
  setCurrentPage,
}: CategoryListsProps) {
  const { handleCategories } = useCategory() as ValueProps;
  const handleCategory = () => {
    setCurrentCategory(title);
    handleCategories(title);
  };
  return (
    <span
      onClick={() => {
        handleCategory();
        if (typeof setCurrentPage !== "undefined") {
          setCurrentPage(1);
        }
      }}
      className={`${baseClass} ${title === currentCategory ? activeClass : inactiveClass}`}
    >
      {title}
    </span>
  );
}

export default CategoriesRow;
