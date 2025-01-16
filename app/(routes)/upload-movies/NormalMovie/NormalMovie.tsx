"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

export function NormalMovie() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="border-white-400 hover: rounded-lg border p-6 transition-all duration-300 hover:bg-[#E50914]">
      <h1 className="mb-4 text-xl font-bold">Normal movies</h1>
      <Button
        className="w-full"
        variant="outline"
        onClick={() => console.log("click")}
        disabled={isLoading}
      >
        Upload movies
        <Upload className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
