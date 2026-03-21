import { useCart } from "../Context/CartsContext";

function PaymentCard() {
  const { carts } = useCart();

  const totalAmount = carts.reduce((acc, el) => acc + el.price * el.qty, 0);
  const taxPercentageAmount = (totalAmount * 8) / 100;
  const totalTaxAmount = totalAmount + taxPercentageAmount;

  return (
    <div className="mt-4 px-8 py-8 border-2 ml-4 border-border-medium rounded-2xl bg-bg-section w-[400px] h-fit">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-text-primary text-sm">Subtotal</span>
          <span className="text-text-primary text-md">
            {totalAmount.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-text-primary text-sm">Shipping</span>
          <span className="text-text-primary text-md">Free</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-text-primary text-sm">Tax(8%)</span>
          <span className="text-text-primary text-md">
            ${taxPercentageAmount.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="mt-4 border-t-2 border-t-text-muted"></div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-text-primary text-md">Total</span>
        <span className="text-text-primary text-lg">
          ${totalTaxAmount.toFixed(2)}
        </span>
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <button className="mt-4 bg-[#111111] text-white rounded-2xl border border-[#111111] font-bold py-2 text-center hover:bg-[#333333] transition-colors cursor-pointer">
          Proceed to checkout
        </button>
        <button className="mt-4 bg-white text-[#111111] rounded-2xl border border-[#D3D1C7] font-bold py-2 text-center hover:bg-[#F1EFE8] transition-colors cursor-pointer">
          Continue shopping
        </button>
      </div>
    </div>
  );
}
export default PaymentCard;
