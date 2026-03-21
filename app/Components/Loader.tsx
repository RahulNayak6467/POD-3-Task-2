// components/ui/ProductCardSkeleton.tsx

function ProductCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#f0ede8] animate-pulse">
      {/* image area */}
      <div className="w-full h-64 bg-[#e0ddd8]" />

      {/* content */}
      <div className="p-4 space-y-3">
        {/* category */}
        <div className="h-3 w-16 bg-[#d0cdc8] rounded" />

        {/* title */}
        <div className="h-4 w-3/4 bg-[#d0cdc8] rounded" />

        {/* description */}
        <div className="h-3 w-full bg-[#d0cdc8] rounded" />
        <div className="h-3 w-2/3 bg-[#d0cdc8] rounded" />

        {/* rating + price + button */}
        <div className="flex items-center justify-between pt-2">
          <div className="h-4 w-20 bg-[#d0cdc8] rounded" />
          <div className="h-8 w-24 bg-[#1a1a1a] rounded" />
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
