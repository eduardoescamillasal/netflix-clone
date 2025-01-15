"use client";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { FormAddProfile } from "../../FormAddProfile";

export function AddProfile() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="group hover:cursor-pointer">
          <div className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-md group-hover:bg-slate-300">
            <PlusCircle className="h-16 w-16 text-gray-500" />
          </div>
          <p className="mt-2 text-lg uppercase text-gray-500">Add Profile</p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-black sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Profile</DialogTitle>
          <DialogDescription>
            Add several profiles to your account.
          </DialogDescription>
        </DialogHeader>
        <FormAddProfile setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
