// components/features/products/Toolbar.tsx
"use client";

import { useCategory } from "../Context/CategoryContext";

interface ToolbarProps {
  resultCount: number;
  onSortChange: (sort: string) => void;
}

function Toolbar({ resultCount, onSortChange }: ToolbarProps) {
  const { handleSort } = useCategory();

  return (
    <div className="flex items-center justify-end gap-4 ml-auto mr-10">
      <span className="text-sm text-gray-500 font-mono">
        {resultCount} results
      </span>
      <select
        onChange={(e) => {
          handleSort(e.target.value);
          onSortChange(e.target.value);
        }}
        className="text-sm border border-gray-300 bg-white px-3 py-2 rounded-lg outline-none cursor-pointer"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>
    </div>
  );
}

export default Toolbar;
