import { cn } from "@/lib/utils";

import { ChaptersInfoProps } from "./ChaptersInfo.types";

export function ChaptersInfo(props: ChaptersInfoProps) {
  const { age, duration } = props;

  const colorByAge = (age: string) => {
    if (age === "0") {
      return "bg-green-500";
    }
    if (age === "12") {
      return "bg-yellow-500 text-black";
    }
    if (age === "16") {
      return "bg-orange-500";
    }
    if (age === "18") {
      return "bg-red-600";
    }
  };

  return (
    <div className="mb-3 flex gap-1">
      <p
        className={cn(
          "h-fit w-fit rounded-md px-1 py-0.5 text-[10px] font-semibold text-white",
          colorByAge(age),
        )}
      >
        +{age}
      </p>
      <p className="flex items-center text-[12px] text-slate-50">{duration}</p>
      <p className="height-[15px] flex items-center rounded-md border-[1px] border-gray-400 px-2 text-[0.5rem] text-gray-400">
        HD
      </p>
    </div>
  );
}
