import React, { useEffect } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";

import { timeSlots } from "./timeSlot";
import { Button } from "@/components/ui/button";
import GlobalApi from "@/app/_services/GlobalApi";
import { toast } from "sonner";
import { time } from "console";
interface bookedSlotProps {
  date: string;
  time: string;
}

function BookingSection({
  children,
  id,
  userEmail,
  userName,
}: Readonly<{
  children: React.ReactNode;
  id: string;
  userEmail: string;
  userName: string;
}>) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = React.useState("");
  const [bookedSlot, setBookedSlot] = React.useState<bookedSlotProps[]>([]);

  useEffect(() => {
    date && businessBookedSlot();
  }, [date]);

  const createBusiness = () => {
    date &&
      GlobalApi.createBooking(
        id,
        userEmail,
        date.toISOString(),
        selectedTime,
        userName
      ).then(
        (res) => {
          if (res) {
            toast("Service Booked Successfully!");
            setDate(new Date());
            setSelectedTime("");
          }
        },
        (e) => {
          toast("Error while Booking!");
          console.log(e);
        }
      );
  };

  const businessBookedSlot = () => {
    date &&
      GlobalApi.getBusinessBookedSlot(id, date?.toISOString()).then((res) => {
        setBookedSlot(res.bookings);
      });
  };
  const isSlotBooked = (time: string) => {
    const check = bookedSlot.find((item) => item.time === time);
    if (check) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Book your service</SheetTitle>
            <div>
              Select a suitable date and time for to book your service
              <h2 className="text-lg font-semibold text-primary my-3">Date</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <span className="text-lg font-semibold text-primary my-3">
                Time slot
              </span>
              <span className="grid grid-cols-3 gap-3">
                {timeSlots.map((item, index) => (
                  <Button
                    disabled={isSlotBooked(item)}
                    key={index}
                    variant={"outline"}
                    onClick={() => setSelectedTime(item)}
                    className={`hover:bg-primary hover:text-secondary ${
                      selectedTime === item && "bg-primary text-white"
                    }`}
                  >
                    {item}
                  </Button>
                ))}
              </span>
            </div>
          </SheetHeader>
          <SheetFooter>
            <SheetClose asChild>
              <span className="mt-8 flex gap-4">
                <Button variant="destructive">Cancel</Button>
                <Button
                  disabled={!(selectedTime && date)}
                  onClick={() => createBusiness()}
                >
                  Confirm
                </Button>
              </span>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default BookingSection;
