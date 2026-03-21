"use client";
function Footer() {
  return (
    <footer className="bg-bg-navbar mt-16 ">
      <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <span className="text-white text-sm font-medium tracking-widest">
          STORE
        </span>

        <span className="text-text-muted text-xs">
          © 2024 Store. All rights reserved.
        </span>

        <div className="flex gap-6">
          <span className="text-text-muted text-xs cursor-pointer hover:text-white transition-colors">
            Privacy
          </span>
          <span className="text-text-muted text-xs cursor-pointer hover:text-white transition-colors">
            Terms
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
