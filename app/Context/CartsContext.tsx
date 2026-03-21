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

const dummyData: CartItem[] = [
  {
    id: 1,
    name: "Classic White Tee",
    meta: "Size: M · White",
    price: 29.99,
    qty: 1,
  },
  {
    id: 2,
    name: "Slim Fit Chinos",
    meta: "Size: 32×30 · Black",
    price: 49.99,
    qty: 2,
  },
  {
    id: 3,
    name: "Leather Belt",
    meta: "Size: 34 · Black",
    price: 24.99,
    qty: 1,
  },
  {
    id: 4,
    name: "Classic White Tee",
    meta: "Size: M · White",
    price: 29.99,
    qty: 1,
  },
  {
    id: 5,
    name: "Slim Fit Chinos",
    meta: "Size: 32×30 · Black",
    price: 49.99,
    qty: 2,
  },
  {
    id: 6,
    name: "Leather Belt",
    meta: "Size: 34 · Black",
    price: 24.99,
    qty: 1,
  },
  {
    id: 7,
    name: "Classic White Tee",
    meta: "Size: M · White",
    price: 29.99,
    qty: 1,
  },
  {
    id: 8,
    name: "Slim Fit Chinos",
    meta: "Size: 32×30 · Black",
    price: 49.99,
    qty: 2,
  },
  {
    id: 9,
    name: "Leather Belt",
    meta: "Size: 34 · Black",
    price: 24.99,
    qty: 1,
  },
];

const CartsContext = createContext<cartValueProps | null>(null);

export const useCart = () => {
  const context = useContext(CartsContext);

  if (!context) {
    throw new Error("No such context exist");
  }

  return context;
};

function CartsContextProvider({ children }: childrenProps) {
  const [carts, setCarts] = useState<CartItem[]>(dummyData);

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
