import Image from "next/image";
import { TrendingMoviesProps } from "./TrendingMovies.types";
import { InfoExtraFilm } from "./InfoExtraFilm";

export function TrendingMovies(props: TrendingMoviesProps) {
  const { movies } = props;
  return (
    <div className="relative px-[4%] pt-11 md:-top-24 md:pt-0 lg:-top-28">
      <h3 className="mb-3 text-2xl font-semibold">
        Trending movies today: Mexico
      </h3>
      <div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-5">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="group relative cursor-pointer transition delay-300 hover:h-[14vh]"
            >
              <div className="duration flex w-full justify-center transition delay-300 group-hover:opacity-90">
                <Image
                  src={`https://raw.githubusercontent.com/ratasi/images-netflix-clone/refs/heads/main/ranking/${movie.ranking}.png`}
                  alt="Number"
                  width={116}
                  height={150}
                  className="h-auto w-auto lg:max-h-full"
                />
                <Image
                  src={movie.thumbnailUrl}
                  alt="Image"
                  width={116}
                  height={150}
                  className="h-auto w-auto md:max-h-[100px] lg:max-w-full"
                />
              </div>
              <InfoExtraFilm movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
