"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { Trash2 } from "lucide-react";

import { cn } from "@/lib/utils";

import { toast } from "@/hooks/use-toast";
import { useCurrentNetflixUser } from "@/hooks/use-current-user";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { AddProfile } from "./AddProfile";
import { ProfilesProps } from "./Profiles.types";
import { useRouter } from "next/navigation";
import { UserNetflix } from "@prisma/client";

export function Profiles(props: ProfilesProps) {
  const { users } = props;
  const { changeCurrentUser, currentUser } = useCurrentNetflixUser();

  const [manageProfiles, setManageProfiles] = useState(false);
  const router = useRouter();

  const onClickUser = (user: UserNetflix) => {
    changeCurrentUser(user);
    router.push("/");
  };

  const deleteUser = async (userIdNetflix: string) => {
    try {
      axios.delete("/api/userNetflix", { data: { userIdNetflix } });
      setManageProfiles(false);
      router.refresh();
    } catch (error) {
      console.log(error);
      toast({
        title: "Ups! Something went wrong",
        variant: "destructive",
      });
    }
  };
  return (
    <div>
      <div className="flex gap-7">
        {users.map((user) => (
          <div
            key={user.id}
            className="relative cursor-pointer text-center"
            onClick={() => onClickUser(user)}
          >
            <Image
              src={user.avatarUrl || ""}
              alt={`Profile Image ${user.profileName}`}
              width={140}
              height={140}
              className={cn(
                manageProfiles ? "blur-md" : "",
                "rounded-md border-transparent hover:border-2 hover:border-white",
              )}
            />
            <p className="mt-2 text-lg uppercase text-gray-500">
              {user.profileName}
            </p>

            <div
              className={cn(
                "top-14 z-20 flex w-full cursor-pointer items-center justify-center gap-4",
                manageProfiles ? "absolute" : "hidden",
              )}
            >
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="rounded-full bg-white p-1 hover:bg-red-100">
                    <Trash2 className="h-6 w-6 text-red-500" />
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-zinc-900">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to delete this profile?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Back</AlertDialogCancel>
                    <AlertDialogAction
                      className="border border-red-500 text-red-500"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
        <AddProfile />
      </div>

      <div className="mt-16 flex items-center justify-center">
        <Button
          variant="outline"
          size="lg"
          className="border-gray-500 text-gray-500"
          onClick={() => setManageProfiles(!manageProfiles)}
        >
          Manage Profiles
        </Button>
      </div>
    </div>
  );
}
