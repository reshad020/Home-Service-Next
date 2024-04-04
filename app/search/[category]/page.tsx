"use client";
import BusinessList from "@/app/_components/BusinessList";
import GlobalApi from "@/app/_services/GlobalApi";
import React, { useEffect, useState } from "react";
interface BusinessByCategoryParam {
  params: { category: string };
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
function BusinessByCategory(param: BusinessByCategoryParam) {
  const [businessList, setBusinessList] = useState<SingleBusinessList[]>([]);
  useEffect(() => {
    param && getBusinessList();
  }, [param]);
  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(param?.params.category).then((res) =>
      setBusinessList(res.businessLists)
    );
  };
  return (
    <div>
      <BusinessList
        list={businessList}
        title={param.params.category}
        grid={3}
        titleTextSize="lg"
        titleMargin="4"
      />
    </div>
  );
}

export default BusinessByCategory;
