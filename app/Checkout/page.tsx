// app/checkout/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useCart } from "../Context/CartsContext";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function CheckoutPage() {
  const router = useRouter();
  const { carts } = useCart();

  const [paymentSuccesful, setPaymentSuccessful] = useState<boolean>(false);

  const subtotal = carts.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.08;

  const notify = () => {
    if (subtotal > 0) {
      toast.success("Payment Successful");
      setPaymentSuccessful(true);
    } else {
      toast.error("An error occured please try again");
      setPaymentSuccessful(false);
    }
  };

  const total = subtotal + tax;

  return (
    <div className="bg-[#f4f1eb] min-h-screen pb-16">
      {/* hero strip */}
      <div className="bg-black text-white px-12 py-8 flex items-end justify-between">
        <div>
          <h1 className="font-mono text-2xl font-bold mb-1">Checkout</h1>
          <p className="text-sm text-gray-400 font-light">
            Complete your order
          </p>
        </div>
      </div>

      {/* body */}
      <div className="max-w-6xl mx-auto px-12 pt-8 grid grid-cols-[1fr_380px] gap-8">
        {/* left — forms */}
        <div className="flex flex-col gap-6">
          {/* contact */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5e1da]">
            <h2 className="font-mono text-sm font-bold mb-5 tracking-wide">
              CONTACT INFO
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-gray-400 tracking-widest">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="bg-[#f4f1eb] border border-[#e5e1da] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-gray-400 tracking-widest">
                  LAST NAME
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="bg-[#f4f1eb] border border-[#e5e1da] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black"
                />
              </div>

              <div className="col-span-2 flex flex-col gap-2">
                <label className="font-mono text-[10px] text-gray-400 tracking-widest">
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-[#f4f1eb] border border-[#e5e1da] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black"
                />
              </div>

              <div className="col-span-2 flex flex-col gap-2">
                <label className="font-mono text-[10px] text-gray-400 tracking-widest">
                  PHONE
                </label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="bg-[#f4f1eb] border border-[#e5e1da] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black"
                />
              </div>
            </div>
          </div>

          {/* shipping */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5e1da]">
            <h2 className="font-mono text-sm font-bold mb-5 tracking-wide">
              SHIPPING ADDRESS
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 flex flex-col gap-2">
                <label className="font-mono text-[10px] text-gray-400 tracking-widest">
                  STREET ADDRESS
                </label>
                <input
                  type="text"
                  placeholder="123 Main Street"
                  className="bg-[#f4f1eb] border border-[#e5e1da] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-gray-400 tracking-widest">
                  CITY
                </label>
                <input
                  type="text"
                  placeholder="Mumbai"
                  className="bg-[#f4f1eb] border border-[#e5e1da] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-gray-400 tracking-widest">
                  STATE
                </label>
                <input
                  type="text"
                  placeholder="Maharashtra"
                  className="bg-[#f4f1eb] border border-[#e5e1da] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-gray-400 tracking-widest">
                  ZIP CODE
                </label>
                <input
                  type="text"
                  placeholder="400001"
                  className="bg-[#f4f1eb] border border-[#e5e1da] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-gray-400 tracking-widest">
                  COUNTRY
                </label>
                <input
                  type="text"
                  placeholder="India"
                  className="bg-[#f4f1eb] border border-[#e5e1da] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black"
                />
              </div>
            </div>
          </div>

          {/* payment */}
          <div className="bg-white rounded-2xl p-6 border border-[#e5e1da]">
            <h2 className="font-mono text-sm font-bold mb-5 tracking-wide">
              PAYMENT
            </h2>

            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] text-gray-400 tracking-widest">
                  CARD NUMBER
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="bg-[#f4f1eb] border border-[#e5e1da] rounded-lg px-3 py-2.5 text-sm outline-none focus:border-black"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="John Doe"
                  className="bg-[#f4f1eb] border border-[#e5e1da] rounded-lg px-3 py-2.5 text-sm outline-none"
                />
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="bg-[#f4f1eb] border border-[#e5e1da] rounded-lg px-3 py-2.5 text-sm outline-none"
                />
                <input
                  type="text"
                  placeholder="123"
                  className="bg-[#f4f1eb] border border-[#e5e1da] rounded-lg px-3 py-2.5 text-sm outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* right — summary */}
        <div>
          <div className="bg-white rounded-2xl p-6 border border-[#e5e1da]">
            <h2 className="font-mono text-sm font-bold mb-5 tracking-wide">
              ORDER SUMMARY
            </h2>

            {carts.map((item) => (
              <div key={item.id} className="flex justify-between text-sm mb-2">
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}

            <div className="mt-4 border-t pt-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between font-bold mt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              disabled={paymentSuccesful}
              onClick={() => {
                notify();
                setTimeout(() => router.push("/"), 1000);
              }}
              className="w-full bg-black text-white py-3 mt-4 rounded-xl cursor-pointer"
            >
              Place Order
            </button>

            <Toaster
              position="top-center"
              reverseOrder={false}
              gutter={8}
              containerClassName=""
              containerStyle={{}}
              toasterId="default"
              toastOptions={{
                className: "",
                duration: 5000,

                style: {
                  background: "green",
                  color: "fff",
                },

                success: {
                  duration: 3000,
                  iconTheme: {
                    primary: "green",
                    secondary: "fff",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
