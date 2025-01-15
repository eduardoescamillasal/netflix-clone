"use client";
import { Button } from "@/components/ui/button";
import { ProfilesProps } from "./Profiles.types";
import { AddProfile } from "./AddProfile";

export function Profiles(props: ProfilesProps) {
  const { users } = props;
  console.log({ users });
  return (
    <div>
      <div className="flex gap-7">
        <p>Profile Users...</p>
        <AddProfile />
      </div>

      <div className="mt-16 flex items-center justify-center">
        <Button
          variant="outline"
          size="lg"
          className="border-gray-500 text-gray-500"
          onClick={() => console.log("click")}
        >
          Manage Profiles
        </Button>
      </div>
    </div>
  );
}
