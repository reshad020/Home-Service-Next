import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center pt-14 pb-7 gap-6">
      <h1 className="text-3xl md:text-6xl font-bold text-center">
        Find Home <span className="text-primary">Service/Repair </span>
        <br />
        Near You
      </h1>
      <h5 className="text-center text-xl text-gray-500">
        Explore best home service experience
      </h5>
      <div className="flex gap-2 items-center">
        <Input placeholder="search" className="rounded-full w-[350px]" />
        <Search className="h-5 w-5 text-primary" />
      </div>
    </div>
  );
}

export default Hero;
