"use client";
import { Button } from "@/components/ui/button";
import { ActionsButtonsProps } from "./ActionsButtons.types";
import { Play, Plus, ThumbsUp, X } from "lucide-react";

export function ActionsButtons(props: ActionsButtonsProps) {
  const { movieId, movie, isMyList } = props;
  return (
    <div className="mb-5 flex justify-between">
      <div className="flex gap-2">
        <Button
          size="icon"
          variant="ghost"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50"
          onClick={() => {
            console.log("click");
          }}
        >
          <Play className="h-3 w-3 fill-zinc-900 text-zinc-900" />
        </Button>
        {isMyList ? (
          <Button
            size="icon"
            variant="ghost"
            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-gray-400 bg-zinc-900"
          >
            <X
              width={10}
              height={10}
              className="h-3 w-3 fill-zinc-900 text-slate-50 hover:text-zinc-900"
            />
          </Button>
        ) : (
          <Button
            size="icon"
            variant="ghost"
            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-gray-400 bg-zinc-900"
          >
            <ThumbsUp className="h-3 w-3 fill-zinc-900 text-slate-50" />
          </Button>
        )}
      </div>
    </div>
  );
}
