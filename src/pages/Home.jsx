import { Route, Routes } from "react-router-dom";
import LargeNav from "../components/Header/Large/LargeNav";
import MobileNav from "../components/Header/Mobile/MobileNav";
import Feed from "./feed/Feed";

const Home = () => {
  return (
    <>
      <section>
        <div className="w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16">
          {/*Sidebar*/}
          <div className="lg:w-[16%] md:w-[17%] h-[100vh] md:w- pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block md:block sm:hidden hidden ">
            <LargeNav />
          </div>
          <div className="w-full h-auto py-1 border-t border-t-[#1d1d1d] fixed bottom-0 left-0 lg:hidden md:hidden sm:block block bg-black z-50">
            <MobileNav />
          </div>
          <Routes>
            <Route path="/" element={<Feed />} />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default Home;
