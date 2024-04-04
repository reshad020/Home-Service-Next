import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import GlobalApi from "@/app/_services/GlobalApi";
import { toast } from "sonner";
interface BusinessListing {
  name: string;
  images: { url: string }[]; // Array of strings representing image URLs
  contactPerson: string;
  address: string;
}
interface myBooking {
  businessLists: BusinessListing[];
  date: string;
  id: string;
  time: string;
}
function BookingHistoryList({
  bookingHistory,
  type,
}: {
  bookingHistory: myBooking[];
  type: string;
}) {
  //   const cancelAppointment = (booking) => {
  //     GlobalApi.deleteBooking(booking.id).then(
  //       (resp) => {
  //         if (resp) {
  //           toast("Booking Delete Successfully!");
  //         }
  //       },
  //       (e) => {
  //         toast("Error while canceling booking!");
  //       }
  //     );
  //   };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {bookingHistory.map((booking, index) => (
        <div
          className="border 
          rounded-lg p-4 mb-5"
          key={index}
        >
          <div key={index} className="flex gap-4  ">
            {booking?.businessLists[0]?.name && (
              <Image
                src={booking?.businessLists[0]?.images[0]?.url}
                alt="image"
                width={120}
                height={120}
                className="rounded-lg object-cover"
              />
            )}
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">{booking.businessLists[0].name}</h2>
              <h2 className="flex gap-2 text-primary">
                {" "}
                <User /> {booking.businessLists[0].contactPerson}
              </h2>
              <h2 className="flex gap-2 text-gray-500">
                {" "}
                <MapPin className="text-primary" />{" "}
                {booking.businessLists[0].address}
              </h2>
              <h2 className="flex gap-2 text-gray-500">
                <Calendar className="text-primary" />
                Service on :{" "}
                <span className="text-black"> {booking.date.slice(0, 10)}</span>
              </h2>
              <h2 className="flex gap-2 text-gray-500">
                <Clock className="text-primary" />
                Service on : <span className="text-black"> {booking.time}</span>
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookingHistoryList;
