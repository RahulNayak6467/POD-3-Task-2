"use client";

import PaymentCard from "../Components/PaymentCard";
import CartsContextProvider from "../Context/CartsContext";
import CartItemsList from "./CartsItemsList";

function CartsPage() {
  return (
    <div className="flex gap-20 items-center">
      <CartsContextProvider>
        <CartItemsList />
        <PaymentCard />
      </CartsContextProvider>
    </div>
  );
}

export default CartsPage;
