import { BellRing, Menu, Search } from "lucide-react";
import Link from "next/link";

import { itemsNavbar } from "@/data/itemsNavbar";

import { Logo } from "@/components/Shared/Logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function NavbarMobile() {
  return (
    <div className="flex justify-between p-4">
      <Logo />

      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="bg-black">
          <div className="flex flex-col gap-4">
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
          <div className="my-5 border-[1px] border-white/70" />
          <div className="mt-4 flex justify-between gap-6">
            <Search className="cursor-pointer" />
            <BellRing className="cursor-pointer" />
            <p>User</p>
            {/* Todo: Add User Profile  */}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
