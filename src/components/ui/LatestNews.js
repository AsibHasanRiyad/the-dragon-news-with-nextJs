import Image from "next/image";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";
import { getAllNews } from "@/utils/getAllNews";

const LatestNews = async () => {
  const { data } = await getAllNews();
  console.log(data);

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <Image
            height={500}
            width={800}
            src={data[0].thumbnail_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data[0].title}</h2>
          <p>
            By {data[0].author.name} {data[0].author.published_date}
          </p>
          <p>
            {data[0].details.length > 200 ? (
              <span>
                {data[0].details.slice(0, 200)}{" "}
                <button className=" text-red-400 ">..</button>
              </span>
            ) : (
              data[0].details
            )}
          </p>
        </div>
      </div>
      {/*  */}
      <div className=" grid grid-cols-2 my-5 gap-5">
        {data.slice(1, 5).map((news) => (
          <div
            key={news._id}
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <Image
                className="h-[250px] w-full"
                height={400}
                width={400}
                src={news.thumbnail_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news.title}</h2>
              <p>
                By {news.author.name} {news.author.published_date}
              </p>
              <p>
                {news.details.length > 200 ? (
                  <span>
                    {news.details.slice(0, 200)}{" "}
                    <button className=" text-red-400 ">..</button>
                  </span>
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

export default LatestNews;
