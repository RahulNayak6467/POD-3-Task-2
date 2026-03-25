"use client";
import { createContext, useContext, useState } from "react";
import { CartItem } from "../types";

interface childrenProps {
  children: React.ReactNode;
}

export interface cartValueProps {
  carts: CartItem[];
  handleCarts: (cart: CartItem) => void;
  removeFromCarts: (id: number) => void;
  adjust: (id: number, delta: number) => void;
}

// const dummyData: CartItem[] = [];

const CartsContext = createContext<cartValueProps | null>(null);

export const useCart = () => {
  const context = useContext(CartsContext);

  if (!context) {
    throw new Error("No such context exist");
  }

  return context;
};

function CartsContextProvider({ children }: childrenProps) {
  const [carts, setCarts] = useState<CartItem[]>([]);

  const handleCarts = (cart: CartItem) => {
    setCarts((prev) => [...prev, cart]);
  };

  const removeFromCarts = (id: number) => {
    setCarts((prev) => prev.filter((item) => item.id !== id));
  };

  const adjust = (id: number, delta: number) => {
    setCarts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item,
      ),
    );
  };

  const value: cartValueProps = {
    carts,
    handleCarts,
    removeFromCarts,
    adjust,
  };

  return (
    <CartsContext.Provider value={value}>{children}</CartsContext.Provider>
  );
}

export default CartsContextProvider;
