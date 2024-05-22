import { Link } from "react-router-dom";
import InstagramLogo from "../../../assets/logo/instagram.png";
import InstagramIcon from "../../../assets/logo/icon.png";
import HomeLogo from "../../../assets/navlogo/home.png";
import SearchLogo from "../../../assets/navlogo/search.png";
import ExploreLogo from "../../../assets/navlogo/explore.png";
import ReelsLogo from "../../../assets/navlogo/reel.png";
import MessagesLogo from "../../../assets/navlogo/message.png";
import NotificationsLogo from "../../../assets/navlogo/like.png";
import ThreadsLogo from "../../../assets/navlogo/threads.png";
import CreateLogo from "../../../assets/navlogo/create.png";
import MoreLogo from "../../../assets/navlogo/more.png";

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
  {
    name: "Messages",
    link: "/messages",
    icon: MessagesLogo,
  },
  {
    name: "Notifications",
    link: "/notifications",
    icon: NotificationsLogo,
  },
  {
    name: "Create",
    link: "/create",
    icon: CreateLogo,
  },
];

const LargeNav = () => {
  return (
    <>
      <div className="w-full h-full relative">
        {/* Instagram LOGO */}
        <Link to="/" className="mb-10 px-2 lg:block md:hidden sm:hidden hidden">
          <img src={InstagramLogo} alt="instagram" />
        </Link>
        <Link to="/" className="mb-10 px-2 lg:hidden md:block sm:block block">
          <img src={InstagramIcon} width={50} height={50} alt="instagram" />
        </Link>
        {/* Instagram LOGO */}

        <div className="w-full h-auto flex items-start flex-col gap-y-2">
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
          >
            <img
              className="w-6 h-6 object-contain  group-hover:scale-105 ease-out duration-300"
              src={HomeLogo}
              alt="home"
            />
            <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden">
              Home
            </p>
          </Link>

          {/* Nav-list items */}
          {sidebarItems1.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
            >
              <img
                className="w-6 h-6 object-contain  group-hover:scale-105 ease-out duration-300"
                src={item.icon}
                alt="home"
              />
              <p className="text-base font-medium text-white lg:block md:hidden sm:hidden">
                {item.name}
              </p>
            </Link>
          ))}

          {/* Profile */}
          {
            <Link
              to="/profile"
              className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group"
            >
              <img
                src="https://source.unsplash.com/random/?profile"
                alt="profile-icon"
                className="w-6 h-6 rounded-full object-cover group-hover:scale-105 ease-out duration-300"
              />
              <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden">
                Profile
              </p>
            </Link>
          }
        </div>

        <div className="w-full h-auto absolute bottom-0 left-0 px-0">
          {/* Threads */}
          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2"
          >
            <img
              className="w-6 h-6 object-contain  group-hover:scale-105 ease-out duration-300"
              src={ThreadsLogo}
              alt="threads"
            />
            <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden">
              Threads
            </p>
          </Link>

          <Link
            to="/"
            className="w-full h-auto flex items-center gap-x-4 p-3 bg-transparent hover:bg-gray-800/60 rounded-md ease-out duration-500 group mb-2"
          >
            <img
              className="w-6 h-6 object-contain  group-hover:scale-105 ease-out duration-300"
              src={MoreLogo}
              alt="threads"
            />
            <p className="text-base font-semibold text-white lg:block md:hidden sm:hidden">
              More
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LargeNav;
