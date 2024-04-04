import React from "react";
import CategorySideMenu from "./_components/CategorySideMenu";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid md:grid-cols-4">
      <div className="hidden md:block">
        <CategorySideMenu />
      </div>
      <div className=" md:col-span-3">{children}</div>
    </div>
  );
}

export default layout;
