import { Button } from "@/components/ui/button";
import { Clock, Mail, MapPin, Share, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import BookingSection from "./BookingSection";
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
interface BusinessInfoProps {
  business: SingleBusinessList;
  email: string;
  name: string;
}

function BusinessInfo(props: BusinessInfoProps) {
  return (
    props.business?.name && (
      <div className="md:flex gap-4 items-center">
        <Image
          src={props.business?.images[0]?.url}
          alt={props.business.name}
          width={150}
          height={200}
          className="rounded-full h-[150px]
        object-cover"
        />
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center w-full">
          <div className="flex flex-col mt-4 md:mt-0 items-baseline gap-3">
            <h2
              className="text-primary p-1 px-3
        text-lg 
        bg-purple-100 rounded-full"
            >
              {props.business?.category?.name}
            </h2>
            <h2 className="text-[40px] font-bold">{props.business.name}</h2>
            <h2 className="flex gap-2 text-lg text-gray-500">
              <MapPin /> {props.business.address}
            </h2>
            <h2 className="flex gap-2 text-lg text-gray-500">
              <Mail />
              {props.business?.email}
            </h2>
          </div>
          <div className="flex flex-col gap-5 items-end">
            <Button>
              <Share />
            </Button>
            <h2 className="flex gap-2 text-xl text-primary">
              <User /> {props.business.contactPerson}{" "}
            </h2>
            <h2 className="flex gap-2 text-lg md:text-xl text-gray-500">
              <Clock /> Available 10:00 AM to 6:30 PM
            </h2>
            <BookingSection
              id={props?.business?.id}
              userEmail={props.email}
              userName={props.name}
            >
              <Button>Book Now</Button>
            </BookingSection>
          </div>
        </div>
      </div>
    )
  );
}

export default BusinessInfo;
