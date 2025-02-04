"use client";
import { BellRing, Search } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { itemsNavbar } from "@/data/itemsNavbar";

import { SelectorProfile } from "@/components/Shared/Navbar/SelectorProfile";
import { Logo } from "@/components/Shared/Logo";

import { NavbarDesktopProps } from "./NavbarDesktop.types";

export function NavbarDesktop(props: NavbarDesktopProps) {
  const { users } = props;
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 z-30 h-16 w-full transition-all duration-300",
        scrollPosition > 20 ? "bg-black" : "bg-transparent",
      )}
    >
      <div className="mx-auto h-full px-[4%]">
        <div className="flex h-full items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo />
            <div className="ml-10 flex gap-4">
              {itemsNavbar.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="transition-all duration-300 hover:text-gray-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Search className="cursor-pointer" />
            <BellRing className="cursor-pointer" />
            <div className="flex items-center gap-2">
              <SelectorProfile users={users} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
