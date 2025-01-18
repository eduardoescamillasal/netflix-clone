import { BlockMoviesProps } from "./BlockMovies.types";
import { CarouselMovie } from "./CarouselMovie";

export function BlockMovies(props: BlockMoviesProps) {
  const { title, movies, isMyList } = props;

  if (!movies || movies.length === 0) return null;

  return (
    <div className="relative -top-16 overflow-auto bg-[#171717] px-[4%] md:pb-20 md:pt-20">
      <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
      <CarouselMovie movies={movies} isMyList={isMyList} />
    </div>
  );
}
