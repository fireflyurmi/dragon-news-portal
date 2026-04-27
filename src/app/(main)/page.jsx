import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import { getCategories, getNewsByCategoryId } from "@/lib/data";
import Image from "next/image";


export default async function Home() {
  const categories = await getCategories();

  const news = await getNewsByCategoryId("08");
  return (
    <div className="max-w-7xl px-4 mx-auto w-full overflow-hidden mt-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 min-w-0">
          <LeftSideBar categories={categories} activeId={"08"} />
        </div>
        <div className="font-bold col-span-6 min-w-0">
          <h2 className="font-bold text-2xl mb-5">Dragon News</h2>
          <div className="space-y-4">
            {news.map((n) => {
              return <div key={n._id} className="p-6 rounded-md border">{n.title}</div>;
            })}
          </div>
        </div>
        <div className="col-span-3 min-w-0">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
