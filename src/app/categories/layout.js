import CategoryList from "@/components/ui/CategoryList";
import React from "react";

const CategoriesLayout = ({ children }) => {
  return (
    <div className=" grid grid-cols-12 gap-5 container mx-auto my-6">
      <div className=" col-span-3">
        <CategoryList />
      </div>
      <div className=" col-span-9">
        <h1>{children}</h1>
      </div>
    </div>
  );
};

export default CategoriesLayout;
