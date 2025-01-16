"use client";
import dynamic from "next/dynamic";

import { ActionsButtonsFilm } from "@/components/Shared/ActionsButtonsFilm";

import { InfoExtraFilmProps } from "./InfoExtraFilm.types";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export function InfoExtraFilm(props: InfoExtraFilmProps) {
  const { movie } = props;

  return (
    <div className="invisible absolute top-0 z-10 w-full scale-0 rounded-lg bg-zinc-900 opacity-0 transition-all delay-300 duration-300 group-hover:-translate-y-[5vw] group-hover:opacity-100 sm:visible group-hover:md:scale-150 group-hover:lg:scale-150">
      <div className="aspect-video">
        <ReactPlayer
          url={movie.trailerVideo}
          loop={true}
          width="100%"
          height="100%"
          playing={true}
          controls={true}
          muted={true}
        />
      </div>
      <div className="p-4 shadow-lg">
        <ActionsButtonsFilm idFilm={movie.id} />
      </div>
    </div>
  );
}
