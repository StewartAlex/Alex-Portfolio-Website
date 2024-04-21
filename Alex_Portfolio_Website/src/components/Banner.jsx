import bannerImage from "../assets/linkedin-profile.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer", "Business Developer", "Full Stack Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 60,
      backSpeed: 20,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="w-full flex justify-center items-center py-14"
    >
      {/* first dabba */}
      <div className="w-full px-6 md:px-6 items-center justify-center text-white ">
        {/* text */}
        <div className="space-y-3 ml-10 tracking-wider">
          <h3 className="text-3xl font-semibold">Hello, Myself</h3>
          <h1 className="text-6xl shadow-2xl font-bold text-[#FFFF00]">Alex Stewart <span className="text-white">Rajput</span></h1>
          <h2 className="text-4xl ">
            I am <span className="font-bold text-[#FFFF00] underline" ref={el}></span>
          </h2>
          <p className="text-justify">

            I'm good at building websites from start to finish, making sure they look nice and work well. I know how to use HTML, CSS, JavaScript, React JS, Laravel, MySQL, and other technologies to make websites.
            And I'm also at helping businesses grow. I find ways for them to get bigger, like making deals with other companies and finding new customers. I can understand what people want and making deals that help the company make more money.

            And Always Eager to figuring things out and making smart business decisions to help the company make more money and reach its goals. Used to talking to people and working with others to come up with new ideas and make the company better.
          </p>
          <br />
          <div className="space-x-4">
            <button
              className=" text-2xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg"
              href="/contact"
            >
              Hire Me
            </button>
            <button
              className=" text-2xl hover:bg-white hover:text-black mb-6 px-6  py-2 bg-red-600 font-bold outline-none rounded-full shadow-lg"
              href="/contact"
            >
              Book Interview
            </button>
          </div>
          {/* <br /> */}

          <div className="icons-container flex space-x-5 shadow-2xl">
            <a className=" hover:bg-red-600  border  cursor-pointer px-3 py-4 w-14 h-14  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-linkedin-in"></i>
            </a>
            <a className=" hover:bg-red-600 border cursor-pointer  px-3 py-4 w-14 h-14  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl fa-facebook"></i>
            </a>

            <a className=" hover:bg-red-600   border cursor-pointer  px-3 py-4 w-14 h-14  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-instagram"></i>
            </a>

            <a className="  hover:bg-red-600 border  cursor-pointer  px-3 py-4 w-14 h-14  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-github"></i>
            </a>

            <a className="  hover:bg-red-600 border  cursor-pointer  px-3 py-4 w-14 h-14  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-discord"></i>
            </a>
          </div>
          <br />

        </div>
      </div>

      {/* second  dabba */}

      <div className=" w-full flex justify-center items-center">
        {/* image */}
        <img className="rounded-full ml-10 shadow-2xl w-fit" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;
