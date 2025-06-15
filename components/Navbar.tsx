'use client';

import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/thm-200.png"
              alt="The Honest Machine"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white leading-tight">
                The Honest Machine
              </h1>
              <span className="text-xs text-gray-400 font-medium">THM</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}