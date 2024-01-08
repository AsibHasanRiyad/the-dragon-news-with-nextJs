import { getSingleNews } from "@/utils/getSingleNews";
import Image from "next/image";
import React from "react";

const NewsDetails = async ({ params }) => {
  const { data } = await getSingleNews(params.newsId);
  // console.log(data);
  return (
    <div className=" container mx-auto my-6">
      <div className=" grid grid-cols-2 gap-8">
        <div>
          <Image
            src={data?.thumbnail_url}
            alt="news"
            height={500}
            width={800}
          />
          {/* 2 image below main image */}
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div>
              <Image
                src={data?.image_url}
                alt="news"
                height={500}
                width={800}
              />
            </div>
            <div>
              <Image
                src={data?.image_url}
                alt="news"
                height={500}
                width={800}
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className=" text-xl font-semibold mb-3">{data.title}</h1>
          <div className=" flex items-center gap-3">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <Image
                  src={data.author.img}
                  alt="author"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <h1 className=" text-lg font-semibold">{data.author.name}</h1>
            <h1>Published:{data.author.published_date}</h1>
          </div>
          <h1 className=" text-justify my-3 whitespace-pre-line text-gray-700">
            Details: {data.details}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
