import React from "react";
import Marquee from "react-fast-marquee";

const news = [
  {
    _id: "1",
    title: "Breaking News : Massive Earthquake Strikes Coastal Region, Thousands Affected"
  },
  {
    _id: "2",
    title: "Breaking News : Global Stock Markets Drop Amid Economic Uncertainty"
  },
  {
    _id: "3",
    title: "Breaking News : New Technology Breakthrough Promises Faster Internet Speeds"
  },
  {
    _id: "4",
    title: "Breaking News : Severe Flooding Forces Evacuation in Several Districts"
  },
  {
    _id: "5",
    title: "Breaking News : Government Announces Major Policy Changes in Education Sector"
  }
];

const BreakingNews = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between gap-5 items-center bg-pink-50 container p-5">
        <button className="btn btn-secondary">Latest News</button>
        <Marquee pauseOnHover={true}>
          {news.map((n) =>(
             <span key={n._id} className="mr-10">{n.title}</span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
