import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SearchCheckIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-14 pb-7 gap-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Find Home <span className="text-primary">Service/Repair </span>
        <br />
        Near You
      </h1>
      <h5 className="text-center text-lg md:text-xl text-gray-500">
        Explore best home service experience
      </h5>
      <Link href="/search/Cleaning" className="flex gap-2 items-center">
        <Button
          variant={"default"}
          className="w-[190px] flex items-center gap-3"
        >
          <Search />
          Look for Services
        </Button>
      </Link>
    </div>
  );
}

export default Hero;
