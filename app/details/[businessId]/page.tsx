"use client";
import GlobalApi from "@/app/_services/GlobalApi";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import BusinessInfo from "../_components/BusinessInfo";
import BusinessDescription from "../_components/BusinessDescription";
interface BusinessDetailsProp {
  params: { businessId: string };
}
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
function BusinessById(props: BusinessDetailsProp) {
  const { data, status } = useSession();

  const [business, setBusiness] = useState<SingleBusinessList>();
  useEffect(() => {
    getBusinessById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);
  const getBusinessById = () => {
    GlobalApi.getBusinessById(props?.params.businessId).then((res) => {
      setBusiness(res?.businessList);
      console.log(res);
    });
  };
  switch (status) {
    case "loading":
      return <p>Loading .... </p>;
    case "unauthenticated":
      return signIn("descope");

    default:
      return (
        business && (
          <div
            className="py-8 md:py-20
      px-10 md:px-36"
          >
            {data.user?.email && data.user?.name && (
              <BusinessInfo
                business={business}
                email={data?.user?.email}
                name={data?.user.name}
              />
            )}

            <div className="grid grid-cols-3 mt-16">
              <div className="col-span-3 md:col-span-2 order-last md:order-first">
                <BusinessDescription business={business} />
              </div>
              <div className="">
                {/* <SuggestedBusinessList business={business}/> */}
              </div>
            </div>
          </div>
        )
      );
  }
}

export default BusinessById;
