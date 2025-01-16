"use client";

import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

import { useCurrentNetflixUser } from "@/hooks/use-current-user";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SelectorProfileProps } from "./SelectorProfile.types";

export function SelectorProfile(props: SelectorProfileProps) {
  const { users } = props;
  const router = useRouter();
  const { changeCurrentUser, currentUser } = useCurrentNetflixUser();

  const onChangeUser = (userNetflix: UserNetflix) => {
    console.log("changing user");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-1">
          <Image
            src={
              currentUser ? currentUser.avatarUrl : "/profiles/profile-1.png"
            }
            alt="Profile Image"
            width={35}
            height={35}
          />
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
