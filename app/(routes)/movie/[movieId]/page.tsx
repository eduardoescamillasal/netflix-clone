import React from "react";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

import { NavbarFilm } from "./components/NavbarFilm";

export default async function MovieIdPage({
  params,
}: {
  params: { movieId: string };
}) {
  const movieFilm = await db.movie.findUnique({
    where: {
      id: params.movieId,
    },
  });

  const popularMovie = await db.popularMovie.findUnique({
    where: {
      id: params.movieId,
    },
  });

  if (!movieFilm && !popularMovie) {
    redirect("/");
  }

  const currentMovie = movieFilm
    ? movieFilm.movieVideo
    : popularMovie
      ? popularMovie.movieVideo
      : null;

  const titleMovie = movieFilm
    ? movieFilm.title
    : popularMovie
      ? popularMovie.title
      : "";

  return (
    <div>
      <NavbarFilm titleMovie={titleMovie} />
    </div>
  );
}
