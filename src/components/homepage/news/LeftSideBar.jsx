import Link from "next/link";
import React from "react";

const LeftSideBar = ({categories, activeId}) => {
  return (
    <div>
      <h2 className="font-bold text-2xl">All Category</h2>
      <ul className="flex flex-col gap-3 mt-5">
        {categories.news_category.map((category) => {
          return (
            <li
              key={category.category_id}
              className={`
                ${activeId === category.category_id ? "bg-black text-white" : "bg-slate-100"}
                text-lg font-bold text-center p-2 rounded-md`}
            >
              <Link href={`/category/${category.category_id}`} className="block">
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideBar;
