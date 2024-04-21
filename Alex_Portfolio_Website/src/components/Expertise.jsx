import bannerBackground from "../assets/banner_wallpaper.svg";
const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className=" my-12 text-5xl font-bold underline  text-center">
          My Skills
        </h1>
        {/* box section */}

        <div 
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          // className="box-container items-center flex py-16"
          className="w-full flex justify-center items-center py-16"
        >

          <div className="flex text-white justify-center">
            {/* text container */}
            <div className="w-2/3 space-y-8">
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p className="text-justify">
              I'm skilled in building websites using HTML, CSS, JavaScript, React JS, Laravel, MySQL, and other tools. Additionally, I excel in business development, identifying growth opportunities, making deals, and fostering innovation to help companies succeed and achieve their goals
              </p>
              <button className="text-xl hover:bg-white hover:text-black mb-6 px-6  py-2 bg-red-600 font-bold outline-none rounded-full shadow-lg">
                My Portfolio
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            {/* skills container */}

            <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
                HTML
              </p>
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
                CSS
              </p>
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
                JavaScript
              </p>
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
                Jquery
              </p>
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
              TypeScript
              </p>
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
                React JS
              </p>
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
               Bootstrap CSS
              </p>
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
                Tailwind CSS
              </p>
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
                PHP
              </p>
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
                Laravel
              </p>
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
                MySQL
              </p>
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
                Adobe Photoshop
              </p>
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
                Adobe XD
              </p>
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
                Figma
              </p>  
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
                Business Development
              </p>  
              <p className="text-xl hover:bg-white hover:text-black bg-[#FFFF00] text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
                Client Hunting
              </p>  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
