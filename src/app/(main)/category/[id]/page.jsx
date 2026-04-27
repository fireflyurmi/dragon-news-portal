import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import React from "react";
import { getNewsByCategoryId, getCategories } from "@/lib/data";



const NewsCategoryPage = async ({ params }) => {
  const {id} = await params;

  const categories = await getCategories();

  const news = await getNewsByCategoryId(id);
  return (
    <div className="max-w-7xl px-4 mx-auto w-full overflow-hidden">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 min-w-0">
          <LeftSideBar categories={categories} activeId={id} />
        </div>
        <div className="font-bold col-span-6 min-w-0">
          <h2 className="font-bold text-2xl mb-5">Dragon News</h2>
          <div className="space-y-4">
            {news.length > 0 ? news.map((n) => {
              return (
                <NewsCard key={n._id} news = {n}></NewsCard>
              );
            }) : <h2 className="font-bold text-4xl text-center my-7">No News Found !!!</h2>}
          </div>
        </div>
        <div className="col-span-3 min-w-0">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
