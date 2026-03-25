"use client";

import Link from "next/link";

function Hero() {
  return (
    <section className="border-2 rounded-2xl bg-bg-navbar">
      <div className="pt-20 pb-20 pl-20 flex flex-col">
        <div className="flex flex-col gap-2">
          <p className="text-text-muted text-lg mb-4">NEW ARRIVALS 2026</p>
          <h1 className="text-5xl text-text-inverse">Shop the latest trends</h1>
        </div>
        <div className="text-text-secondary text-md mt-4 whitespace-wrap">
          <p>Discover our curated collection of electronics,</p>
          <p> jewellery, and clothing.</p>
        </div>
        <div className="flex gap-4 mt-8">
          <Link
            href="/categories"
            className="text-text-inverse bg-bg-navbar border border-border-dark px-6 py-3 rounded-2xl cursor-pointer  hover:text-text-primary hover:bg-bg-page transition-all"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
