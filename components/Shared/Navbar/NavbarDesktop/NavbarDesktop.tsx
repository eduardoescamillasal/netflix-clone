import { BellRing, Search } from "lucide-react";

import { cn } from "@/lib/utils";

import { Logo } from "@/components/Shared/Logo";

export function NavbarDesktop() {
  return (
    <div
      className={cn(
        "fixed left-0 right-0 z-30 h-16 w-full transition-all duration-300",
      )}
    >
      <div className="mx-auto h-full px-[4%]">
        <div className="flex h-full items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo />
            <div className="ml-10 flex gap-4">
              <p>Home</p>
              <p>Movies</p>
              <p>Series</p>
              <p>Profile</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Search className="cursor-pointer" />
            <BellRing className="cursor-pointer" />
            <div className="flex items-center gap-2">
              {/* Todo: Add Profile Picture */}
              <p>User</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
