import LatestNews from "@/components/ui/LatestNews";
import Sidebar from "@/components/ui/Sidebar";
// import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <div className=" container mx-auto">
      <div className=" grid grid-cols-12 my-10 gap-5">
        <div className=" col-span-8">
          <LatestNews />
        </div>
        <div className=" col-span-4">
          <h1>
            {" "}
            <Sidebar />{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
