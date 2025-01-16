"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { dataMovies } from "./NormalMovie.data";
import { toast } from "@/hooks/use-toast";

export function NormalMovie() {
  const [isLoading, setIsLoading] = useState(false);

  const uploadMovies = async () => {
    setIsLoading(true);
    try {
      axios.post("/api/create-movies", {
        movies: dataMovies,
      });
      toast({ title: "Movies uploaded successfully" });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div className="border-white-400 rounded-lg border p-6 transition-all duration-300 hover:bg-[#E50914]">
      <h1 className="mb-4 text-xl font-bold">Normal movies</h1>
      <Button
        className="w-full"
        variant="outline"
        onClick={uploadMovies}
        disabled={isLoading}
      >
        Upload movies
        <Upload className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
