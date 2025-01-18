"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { NavbarFilmProps } from "./NavbarFilm.types";

export function NavbarFilm(props: NavbarFilmProps) {
  const { titleMovie } = props;
  const router = useRouter();

  const backToHome = () => {
    router.push("/");
  };
  return (
    <nav
      className="fixed z-10 flex cursor-pointer items-center gap-2 bg-zinc-900/70 p-5"
      onClick={backToHome}
    >
      <ArrowLeft className="h-6 w-6" />
      <p>
        You are watching: <span className="font-bold">{titleMovie}</span>
      </p>
    </nav>
  );
}
