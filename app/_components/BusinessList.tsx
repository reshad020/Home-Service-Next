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

function BusinessList(props: BusinessListProps) {
  return (
    <div>
      <h2
        className={`text-center text-primary text-${props.titleTextSize} font-bold my-${props.titleMargin}`}
      >
        {props.title}
      </h2>
      <div className={`md:grid grid-cols-${props.grid} gap-4 mx-4`}>
        {props.list.map((item) => (
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
        ))}
      </div>
    </div>
  );
}

export default BusinessList;