import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface singleCategory {
  id: string;
  name: string;
  icon: { url: string };
  bgcolor: { hex: string };
}
interface CategoryProps {
  list: singleCategory[];
}
function Categories(props: CategoryProps) {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:mx-52 md:mx-20 mx-6 my-10">
      {props.list.length === 0
        ? [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="h-[120px]
          w-full bg-slate-200 animate-pulse
          rounded-lg"
            ></div>
          ))
        : props.list.map((item) => (
            <Link
              href={"/search/" + item.name}
              key={item.id}
              className="flex flex-col items-center justify-center bg-indigo-100 p-6 cursor-pointer  rounded-lg hover:scale-110 transition-all ease-in-out"
            >
              <Image
                src={item.icon.url}
                alt={item.name}
                width={40}
                height={40}
              />
              <h2 className="text-primary">{item.name}</h2>
            </Link>
          ))}
    </div>
  );
}

export default Categories;
