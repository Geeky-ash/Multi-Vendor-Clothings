"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Home", icon: HomeIcon, href: "/" },
  { label: "Shop", icon: ShopIcon, href: "/shop" },
  { label: "Bag", icon: BagIcon, href: "/bag" },
  { label: "Account", icon: AccountIcon, href: "/account" },
];

// SVG icons for clarity (feel free to replace with any icon library)

function HomeIcon({ active }: { active: boolean }) {
  return (
    <svg
      className={`w-6 h-6 ${active ? "text-primary" : "text-gray-500"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9v9a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4H7v4a2 2 0 01-2 2H3v-9z" />
    </svg>
  );
}

function ShopIcon({ active }: { active: boolean }) {
  return (
    <svg
      className={`w-6 h-6 ${active ? "text-primary" : "text-gray-500"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2M4 7v12a2 2 0 002 2h12a2 2 0 002-2V7" />
    </svg>
  );
}

function BagIcon({ active }: { active: boolean }) {
  return (
    <svg
      className={`w-6 h-6 ${active ? "text-primary" : "text-gray-500"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V9a4 4 0 00-8 0v2a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2v-4a2 2 0 00-2-2z" />
    </svg>
  );
}

function AccountIcon({ active }: { active: boolean }) {
  return (
    <svg
      className={`w-6 h-6 ${active ? "text-primary" : "text-gray-500"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx={12} cy={7} r={4} strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 21h13a2 2 0 002-2v-1a6 6 0 00-6-6H9.5a6 6 0 00-6 6v1a2 2 0 002 2z" />
    </svg>
  );
}

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md flex justify-around py-2 sm:hidden">
      {navItems.map(({ label, icon: Icon, href }) => {
        const active = pathname === href;
        return (
          <button
            key={href}
            aria-label={label}
            onClick={() => router.push(href)}
            className={`flex flex-col items-center justify-center text-xs font-medium ${
              active ? "text-primary" : "text-gray-500"
            }`}
          >
            <Icon active={active} />
            <span className={active ? "font-semibold" : "font-normal"}>{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
