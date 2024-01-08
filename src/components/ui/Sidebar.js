import sideImage from "@/assets/side-top-news.png";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <Image height={1000} width={1000} src={sideImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Bitcoin</h2>
        <p>By Riyad, 8 January, 2023</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vero
          iure commodi omnis facilis dolore quos sit dolorem? Ad, quos.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
