import { Button } from "@/components/ui/button";
import { Info, Play } from "lucide-react";

export function SliderVideo() {
  return (
    <div className="relative h-[80vw] w-full md:h-[56.25vw] lg:h-[45vw]">
      <video
        autoPlay
        loop
        muted
        className="h-[80vw] w-full object-fill brightness-50 md:h-[56.25vw] lg:h-[45vw]"
        src="/videos/video-1.mp4"
      />
      <div className="absolute -bottom-7 top-0 z-20 flex w-full flex-col justify-end px-4 md:bottom-[36%] md:left-[4%] md:w-[36%] md:px-0">
        <div className="pt-24 md:pt-0">
          <h2 className="text-2xl font-bold drop-shadow-xl md:text-5xl lg:text-8xl">
            EDES
          </h2>
          <p className="mt-2 max-w-md text-xs md:text-base">
            Dream of a world where you can be whoever you want to be. In this
            world, you can be anyone you want to be. You can be a superhero, a
            villain, a heroine, or a hero.
          </p>
          <div className="mt-5 flex flex-col gap-4 md:flex-row">
            <Button size="lg" variant="secondary">
              <Play className="mr-2 h-6 w-6 fill-black" />
              Play
            </Button>
            <Button size="lg" className="bg-gray-500/50 hover:bg-gray-500/40">
              <Info className="mr-2 h-6 w-6" />
              More Info
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-video absolute -bottom-16 top-auto h-[14vw] w-full bg-transparent bg-contain bg-no-repeat opacity-100" />
    </div>
  );
}
