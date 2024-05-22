import HomeLogo from "../../../assets/navlogo/home.png";
import SearchLogo from "../../../assets/navlogo/search.png";
import ExploreLogo from "../../../assets/navlogo/explore.png";
import ReelsLogo from "../../../assets/navlogo/reel.png";
import { Link } from "react-router-dom";

const sidebarItems1 = [
  {
    name: "Search",
    link: "/search",
    icon: SearchLogo,
  },
  {
    name: "Explore",
    link: "/explore",
    icon: ExploreLogo,
  },
  {
    name: "Reels",
    link: "/reels",
    icon: ReelsLogo,
  },
];

const MobileNav = () => {
  return (
    <>
      <div className="w-full h-auto">
        <div className="w w-full h-auto flex items-center gap-x-2">
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
          >
            <img
              className="w-6 h-6 object-contain  group-hover:scale-105 ease-out duration-300"
              src={HomeLogo}
              alt="home"
            />
          </Link>

          {sidebarItems1.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
            >
              <img
                className="w-6 h-6 object-contain  group-hover:scale-105 ease-out duration-300"
                src={item.icon}
                alt="home"
              />
            </Link>
          ))}
          {/* Profile */}
          <Link
            to="/profile"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent group"
          >
            <img
              src="https://source.unsplash.com/random/?profile"
              alt="profile-icon"
              className="w-6 h-6 rounded-full object-cover group-hover:scale-105 ease-out duration-300"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
