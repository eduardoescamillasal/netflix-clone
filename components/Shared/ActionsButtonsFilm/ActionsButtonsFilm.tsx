import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { ActionsButtonsFilmProps } from "./ActionsButttonsFilm.types";
import { ChevronDown, Play } from "lucide-react";

export function ActionsButtonsFilm(props: ActionsButtonsFilmProps) {
  const router = useRouter();
  const { idFilm } = props;

  const onPlayButton = () => {
    console.log(idFilm);
  };

  return (
    <div className="mb-5 flex justify-between">
      <div className="flex gap-2">
        <Button
          size="icon"
          variant="ghost"
          className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50"
          onClick={onPlayButton}
        >
          <Play className="h-3 w-3 fill-zinc-900 text-zinc-900" />
        </Button>
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-gray-400 bg-zinc-900 hover:border-slate-50 hover:bg-transparent"
      >
        <ChevronDown width={10} height={10} className="h-3 w-3 text-slate-50" />
      </Button>
    </div>
  );
}
