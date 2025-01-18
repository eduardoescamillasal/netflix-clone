"use client";
import { Button } from "@/components/ui/button";
import { ActionsButtonsProps } from "./ActionsButtons.types";
import { ChevronDown, Play, ThumbsUp, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLovedFilms } from "@/hooks/use-loved-films";

export function ActionsButtons(props: ActionsButtonsProps) {
  const { movieId, movie, isMyList } = props;
  const { addLovedFilm, removeLovedItem, lovedFilmsByUser } = useLovedFilms();
  const router = useRouter();

  const onPlayButton = () => {
    router.push(`/movie/${movieId}`);
  };

  const onAddToMyList = () => {
    addLovedFilm(movie);
  };

  const onRemoveFromMyList = () => {
    removeLovedItem(movieId);
  };

  return (
    <div className="mb-5 flex justify-between">
      <div className="flex gap-2">
        <Button
          size="icon"
          variant="ghost"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50"
          onClick={() => onPlayButton()}
        >
          <Play className="h-3 w-3 fill-zinc-900 text-zinc-900" />
        </Button>
        {isMyList ? (
          <Button
            size="icon"
            variant="ghost"
            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-gray-400 bg-zinc-900"
            onClick={() => onRemoveFromMyList()}
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
            onClick={() => onAddToMyList()}
          >
            <ThumbsUp className="h-3 w-3 fill-zinc-900 text-slate-50" />
          </Button>
        )}
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-gray-400 bg-zinc-900"
      >
        <ChevronDown className="h-3 w-3 text-slate-50" height={10} width={10} />
      </Button>
    </div>
  );
}
