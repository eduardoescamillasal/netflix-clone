import { Logo } from "@/components/Shared/Logo";
import { NormalMovie } from "./NormalMovie";

export default function UploadMoviesPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-zinc-900">
      <Logo />
      <h1 className="my-8 text-2xl font-semibold">
        Upload your favorite movies 👍
      </h1>
      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4">
        <NormalMovie />
        <p>Popular Movies</p>
      </div>
    </div>
  );
}
