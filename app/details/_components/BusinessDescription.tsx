import Image from "next/image";
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
interface BusinessDescriptionProps {
  business: SingleBusinessList;
}

function BusinessDescription(props: BusinessDescriptionProps) {
  return (
    props.business?.name && (
      <div>
        <h2 className="font-bold text-[25px] ">Description</h2>
        <p className="mt-4 text-lg text-gray-600">{props.business.about}</p>

        <h2 className="font-bold text-[25px] mt-8">Gallary</h2>
        <div
          className="grid grid-cols-2 md:grid-cols-3
      lg:grid-cols-4 gap-5 mt-5"
        >
          {props.business?.images?.map((item, index) => (
            <Image
              src={item?.url}
              key={index}
              alt="image"
              width={700}
              height={200}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    )
  );
}

export default BusinessDescription;
