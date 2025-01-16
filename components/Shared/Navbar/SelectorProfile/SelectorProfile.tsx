"use client";

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { ChevronDown, LogOut, Pencil } from "lucide-react";
import Image from "next/image";

import { useCurrentNetflixUser } from "@/hooks/use-current-user";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SelectorProfileProps } from "./SelectorProfile.types";
import { UserNetflix } from "@prisma/client";

export function SelectorProfile(props: SelectorProfileProps) {
  const { users } = props;
  const router = useRouter();
  const { changeCurrentUser, currentUser } = useCurrentNetflixUser();

  const onChangeUser = (userNetflix: UserNetflix) => {
    changeCurrentUser(userNetflix);
    router.refresh();
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
      <DropdownMenuContent className="w-56 border-transparent bg-black/80 p-2">
        {users.map((user) => (
          <DropdownMenuItem
            key={user.id}
            onClick={() => onChangeUser(user)}
            className="group mb-3 flex gap-2"
          >
            <Image
              src={user.avatarUrl}
              alt="Profile Image"
              width={30}
              height={30}
            />
            <p className="text-white group-hover:text-black">
              {user.profileName}
            </p>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem
          className="group mb-3 flex cursor-pointer gap-2 text-white"
          onClick={() => router.push("/profiles")}
        >
          <Pencil className="h-4 w-4" />
          Manage profiles
        </DropdownMenuItem>
        <DropdownMenuItem
          className="mb-3 flex cursor-pointer gap-2 text-white"
          onClick={() => signOut()}
        >
          <LogOut className="h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
