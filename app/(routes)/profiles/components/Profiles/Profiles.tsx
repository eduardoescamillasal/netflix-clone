"use client";
import { Button } from "@/components/ui/button";
import { ProfilesProps } from "./Profiles.types";
import { AddProfile } from "./AddProfile";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";

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

import { Trash2 } from "lucide-react";

export function Profiles(props: ProfilesProps) {
  const { users } = props;
  const [manageProfiles, setManageProfiles] = useState(false);

  return (
    <div>
      <div className="flex gap-7">
        {users.map((user) => (
          <div key={user.id} className="relative cursor-pointer text-center">
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
                      onClick={() => console.log("DELETE USER ...")}
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
