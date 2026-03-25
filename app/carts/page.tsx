"use client";

import PaymentCard from "../Components/PaymentCard";

import CartItemsList from "./CartItemsList";

function CartsPage() {
  return (
    <div className="flex gap-20 items-center">
      <CartItemsList />
      <PaymentCard />
    </div>
  );
}

export default CartsPage;
