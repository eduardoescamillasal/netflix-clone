"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
import axios from "axios";

import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";

import { trendingMovies } from "./TrendingMovies.data";

export function TrendingMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const uploadTrendingMovies = async () => {
    setIsLoading(true);
    try {
      await axios.post("/api/create-popular-movies", {
        movies: trendingMovies,
      });
      toast({
        title: "Movies uploaded successfully",
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div className="border-white-400 rounded-lg border p-6 transition-all duration-300 hover:bg-slate-300">
      <h1 className="mb-4 text-xl font-bold">Trending movies</h1>
      <Button
        className="w-full"
        onClick={uploadTrendingMovies}
        variant="secondary"
        disabled={isLoading}
      >
        Upload movies
        <Upload className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
