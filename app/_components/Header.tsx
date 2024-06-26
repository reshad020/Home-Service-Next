"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Logo from "@/public/logo.svg";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

function Header() {
  const { data } = useSession();
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-16 ">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" />
          <h1 className="text-lg font-semibold">Helpii</h1>
        </Link>
        <div className="md:flex items-center gap-4 hidden">
          <Link
            href="/"
            className="hover:text-primary hover:scale-105 cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="/search/Cleaning"
            className="hover:text-primary hover:scale-105 cursor-pointer"
          >
            Services
          </Link>
          <Link
            href="/about-us"
            className="hover:text-primary hover:scale-105 cursor-pointer"
          >
            About us
          </Link>
        </div>
      </div>
      <div>
        {data ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={data?.user?.image || ""}
                alt="user"
                width={40}
                height={40}
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/myBooking">My Bookings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button onClick={() => signIn("descope")}>Get Started</Button>
        )}
      </div>
    </div>
  );
}

export default Header;
