import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface SingleBusinessList {
  id: string;
  name: string;
  contactPerson: string;
  images: { url: string }[];
  email: string;
  about: string;
  address: string;
  category: { name: string };
}
interface BusinessListProps {
  list: SingleBusinessList[];
  title: string;
  grid: number;
  titleTextSize: string;
  titleMargin: string;
}
const gridCols: any = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  // ... up to the max number you support
};

function BusinessList(props: BusinessListProps) {
  const gridColumnClass = gridCols[props.grid];
  return (
    <div>
      <h2 className={`text-center text-primary text-2xl font-bold my-6`}>
        {props.title}
      </h2>
      <div className={`md:grid ${gridColumnClass} gap-4 mx-4`}>
        {
          props.list.length === 0
            ? [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <div
                  key={index}
                  className="w-full h-[300px]
              bg-slate-200 rounded-lg animate-pulse"
                ></div>
              ))
            : props.list.map((item) => (
                <Link
                  href={"/details/" + item.id}
                  key={item.email}
                  className="shadow-lg hover:scale-105 transition-all ease-in-out"
                >
                  <div className="p-4">
                    <Image
                      src={item?.images[0]?.url}
                      alt={item.name}
                      width={290}
                      height={160}
                      className="rounded-lg w-[300px] h-[220px]"
                    />
                    <h2 className="bg-secondary p-1 w-32 rounded-full text-center my-2">
                      {item.category.name}
                    </h2>
                    <h2 className="text-lg font-semibold my-2">{item.name}</h2>
                    <h2 className="text-primary font-semibold my-2 text-lg">
                      {item.contactPerson}
                    </h2>
                    <p className="text-gray-500 my-2">{item.address}</p>
                    <Button className="bg-primary my-2">Book now</Button>
                  </div>
                </Link>
              ))
          //   : [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          //       <div
          //         key={index}
          //         className="w-full h-[300px]
          // bg-slate-200 rounded-lg animate-pulse"
          //       ></div>
          //     ))}
        }
      </div>
    </div>
  );
}

export default BusinessList;
