"use client";
import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "./_components/BusinessList";
interface singleCategory {
  id: string;
  name: string;
  icon: { url: string };
  bgcolor: { hex: string };
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

export default function Home() {
  const [categoryList, setCategoryList] = useState<singleCategory[]>([]);
  const [businessList, setBusinessList] = useState<SingleBusinessList[]>([]);
  useEffect(() => {
    getCategoryList();
    getBusinessList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.getCategories().then((res) => {
      setCategoryList(res?.categories || []);
    });
  };
  const getBusinessList = () => {
    GlobalApi.getAllBusinessList().then((res) => {
      console.log(res?.businessLists);
      setBusinessList(res?.businessLists || []);
    });
  };
  return (
    <div>
      <Hero />
      <Categories list={categoryList} />
      <BusinessList
        list={businessList}
        title="Popular Businesses"
        titleMargin="20"
        titleTextSize="4xl"
        grid={4}
      />
    </div>
  );
}
