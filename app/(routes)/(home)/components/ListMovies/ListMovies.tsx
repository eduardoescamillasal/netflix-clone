import { BlockMovies } from "@/components/Shared/BlockMovies";
import { ListMoviesProps } from "./ListMovies.types";

export function ListMovies(props: ListMoviesProps) {
  const { movies } = props;
  return (
    <div>
      <BlockMovies
        title="Most Recent Movies"
        movies={movies}
        isMyList={false}
      />
    </div>
  );
}
