import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import Link from "next/link";
import { TbArrowBackUpDouble } from "react-icons/tb";


export const generateMetadata = async({params})=>{
    const {id} = await params ;
    const news = await getNewsDetailsById(id);

    return{
        title: news.title,
        description: news.details,
    };
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const news = await getNewsDetailsById(id);
  return (
    <div className="max-w-4xl px-4 mx-auto w-full overflow-hidden my-10">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          {/* author info */}
          <div className="flex justify-between items-center bg-slate-100 p-2 rounded-md">
            <div className="flex gap-2 items-center">
              <Image
                src={news.author?.img}
                alt={news.author?.name || "Author Image"}
                height={60}
                width={60}
                className="rounded-full"
              />
              <div>
                <h2>{news.author?.name}</h2>
                <p className="text-xs font-medium">
                  {news.author?.published_date}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <CiBookmark className="text-xl" />
              <CiShare2 className="text-xl" />
            </div>
          </div>
          <h2 className="text-xl font-semibold">{news.title}</h2>

          <figure>
            <Image
              src={news.image_url}
              alt={news.title}
              width={300}
              height={300}
              className="w-full"
            />
          </figure>
          <div className="text-sm font-normal">
            <p className="mb-5">{news.details}</p>
            <div>
              <div className="flex justify-between items-center gap-4 mb-5">
                <h2 className="flex items-center gap-2 text-lg">
                  <FaStar className="text-orange-400" />
                  <FaStar className="text-orange-400" />
                  <FaStar className="text-orange-400" />
                  <FaStar className="text-orange-400" />
                  <FaStar className="text-orange-400" />
                  {news.rating.number}
                </h2>
                <h2 className="flex items-center gap-2 text-gray-600 text-lg">
                  <MdRemoveRedEye />
                  {news.total_view}
                </h2>
              </div>
              <Link href={`/category/${news.category_id}`}>
                <button className="btn btn-outline btn-error">
                  <TbArrowBackUpDouble />All news in this category
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
