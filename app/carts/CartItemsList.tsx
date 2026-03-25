import { useCart } from "../Context/CartsContext";

function CartItemsList() {
  const { carts, removeFromCarts, adjust } = useCart();

  console.log(carts);
  const totalItems = carts.reduce((s, i) => s + i.qty, 0);

  console.log(totalItems);

  return (
    <div className="m-6 bg-white border border-border-medium  p-6 w-[60%] max-h-[520px] overflow-y-scroll">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <span className="text-sm font-medium text-text-primary">
          Cart items
        </span>
        <span className="text-xs text-[#888780] bg-[#F1EFE8] px-3 py-0.5 rounded-full">
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </span>
      </div>

      {/* Items */}
      <div className="flex flex-col">
        {carts.map((item, idx) => (
          <div
            key={item.id}
            className={`grid grid-cols-[80px_1fr_auto] gap-3 items-center py-4 ${
              idx !== carts.length - 1 ? "border-b border-[#E5E5E5]" : ""
            }`}
          >
            {/* Thumbnail */}
            <div className="w-20 h-20 rounded-xl bg-[#F1EFE8] border border-[#E5E5E5] flex items-center justify-center">
              <svg
                className="w-7 h-7 stroke-[#888780] fill-none"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-medium text-text-primary">
                  {item.name}
                </p>
              </div>
              <p className="text-xs text-[#888780] mb-2.5 line-clamp-1">
                {item.meta}
              </p>

              {/* Qty controls */}
              <div className="flex items-center w-fit border border-[#D3D1C7] rounded-lg overflow-hidden">
                <button
                  disabled={item.id === 0}
                  onClick={() => adjust(item.id, -1)}
                  className="w-7 h-7 bg-white hover:bg-[#F1EFE8] flex items-center justify-center text-sm transition-colors cursor-pointer"
                >
                  −
                </button>
                <div className="w-8 h-7 border-x border-[#D3D1C7] flex items-center justify-center text-xs font-medium text-text-primary">
                  {item.qty}
                </div>
                <button
                  onClick={() => adjust(item.id, +1)}
                  className="w-7 h-7 bg-white hover:bg-[#F1EFE8] flex items-center justify-center text-sm transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Price + Remove */}
            <div className="flex flex-col items-end gap-2">
              <span className="text-sm font-medium text-[#111]">
                ${(item.price * item.qty).toFixed(2)}
              </span>
              <button
                onClick={() => removeFromCarts(item.id)}
                className="group cursor-pointer"
              >
                <svg
                  className="w-5 h-5 border-2 border-accent-hover hover:opacity-80 rounded-full stroke-accent-hover group-hover:stroke-[#E24B4A] fill-none transition-colors"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartItemsList;
