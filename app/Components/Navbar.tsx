"use client";

import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-bg-navbar p-6 ">
      <nav className="flex justify-between items-center pr-8 pl-8">
        <div>
          <h1 className="text-lg text-text-inverse font-sans">E-Commerce</h1>
        </div>
        <ul className="text-text-inverse text-lg flex gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
          <li className="flex items-center gap-2">
            <Link href="/cart">Cart</Link>
            <span className="w-5 h-5 rounded-full bg-bg-page text-text-primary text-center text-sm">
              3
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
