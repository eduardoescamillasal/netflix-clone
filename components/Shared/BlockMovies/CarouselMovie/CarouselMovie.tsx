import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { ActionsButtons } from "./ActionsButtons";
import { ChaptersInfo } from "./ChaptersInfo";
import { FilmGenres } from "./FilmGenres";

import { CarouselMovieProps } from "./CarouselMovie.types";

export function CarouselMovie(props: CarouselMovieProps) {
  const { movies, isMyList } = props;
  return (
    <Carousel className="w-full">
      <CarouselContent className="overflow-inherit -ml-1">
        {movies.map((movie) => (
          <CarouselItem
            key={movie.id}
            className="group relative pl-1 transition delay-300 hover:bg-transparent md:basis-1/2 lg:basis-1/5"
          >
            <Card className="group relative cursor-pointer transition delay-300">
              <CardContent className="relative flex aspect-video items-center justify-center rounded-md border-none bg-zinc-900 p-6">
                <Image
                  src={movie.thumbnailUrl}
                  alt="Image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-md"
                />
                <div className="group-hover: invisible absolute top-0 z-10 w-full scale-0 rounded-lg bg-zinc-900 opacity-0 transition-all delay-300 duration-300 group-hover:-translate-y-[5vw] group-hover:opacity-100 sm:visible group-hover:md:scale-150 lg:scale-125">
                  <Image
                    src={movie.thumbnailUrl}
                    alt="Movie"
                    width={200}
                    height={200}
                    className="w-full cursor-pointer rounded-t-lg object-cover shadow-xl transition-all duration-300"
                  />
                  <div className="p-2 shadow-lg">
                    <ActionsButtons
                      movieId={movie.id}
                      movie={movie}
                      isMyList={isMyList}
                    />
                    <ChaptersInfo age={movie.age} duration={movie.duration} />
                    <FilmGenres genres={movie.genre} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
