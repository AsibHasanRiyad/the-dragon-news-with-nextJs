import { getCategoryNews } from "@/utils/getCategoryNews";
import Image from "next/image";
import React from "react";

const DynamicCategory = async ({ searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category);
  console.log(data);
  return (
    <div>
      <h1>Hello {searchParams.category} </h1>
      <div className=" grid grid-cols-2 gap-5 mt-5">
        {data.map((news) => (
          <div
            key={news.id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure className=" w-full h-[250px]">
              <Image
                height={400}
                width={1000}
                src={news.thumbnail_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h1 className="bg-red-400 px-3 py-1 rounded w-fit text-white font-semibold">
                {news.category}
              </h1>
              <h2 className="card-title text-base">
                {news.title.length > 45
                  ? news.title.slice(0, 45) + "..."
                  : news.title}
              </h2>
              <p>
                By {news.author.name}, {news.author.published_date}
              </p>
              <p>
                {news.details.length > 200 ? (
                  <div>
                    {news.details.slice(0, 200)}{" "}
                    <button className=" text-red-400 ">See more...</button>
                  </div>
                ) : (
                  news.details
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicCategory;
