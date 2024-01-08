import Image from "next/image";
import topNews from "@/assets/top-news.png";
import topNews2 from "@/assets/top-news2.png";

const LatestNews = () => {
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <Image height={1000} width={1000} src={topNews} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Bitcoin</h2>
          <p>By Riyad, 8 January, 2023</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            vero iure commodi omnis facilis dolore quos sit dolorem? Ad, quos.
          </p>
        </div>
      </div>
      {/*  */}
      <div className=" grid grid-cols-2 my-5 gap-5">
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <Image height={1000} width={1000} src={topNews2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bitcoin</h2>
            <p>By Riyad, 8 January, 2023</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              vero iure commodi omnis facilis dolore quos sit dolorem? Ad, quos.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <Image height={1000} width={1000} src={topNews} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bitcoin</h2>
            <p>By Riyad, 8 January, 2023</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              vero iure commodi omnis facilis dolore quos sit dolorem? Ad, quos.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <Image height={1000} width={1000} src={topNews} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bitcoin</h2>
            <p>By Riyad, 8 January, 2023</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              vero iure commodi omnis facilis dolore quos sit dolorem? Ad, quos.
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <Image height={1000} width={1000} src={topNews} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bitcoin</h2>
            <p>By Riyad, 8 January, 2023</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              vero iure commodi omnis facilis dolore quos sit dolorem? Ad, quos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
