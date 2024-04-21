import { useState } from "react";
// import bannerImage from "../assets/bi2.png";
import Profile from "../assets/Profile.png";
const About = () => {
  const [data, setData] = useState({
    image: Profile,
    title: "Fullstack Developer & Business Developer",
    desc1: `I'm skilled in building websites using HTML, CSS, JavaScript, React JS, Laravel, MySQL, and other tools. Additionally, I excel in business development, identifying growth opportunities, making deals, and fostering innovation to help companies succeed and achieve their goals.    `,
    // desc2: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. A
    // dignissimos esse itaque impedit quas omnis odit, velit ullam
    // suscipit? Vel obcaecati pariatur voluptatem sapiente.
    // Necessitatibus vero laborum nam quaerat ullam?`,
    actionButton: {
      title: "Contact Me",
      link: "https://api.whatsapp.com/send/?phone=03166365454&text&type=phone_number&app_absent=0https/wa.me/03166365454",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit"
              src={data.image}
              alt="durgesh kumar tiwari"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              {/* <p>{data.desc2}</p> */}
             <button className="text-xl hover:bg-red-500 hover:text-black my-16 mb-10 px-6  py-2 bg-white font-bold outline-none rounded-full shadow-lg"><a href="https://api.whatsapp.com/send/?phone=03166365454&text&type=phone_number&app_absent=0">
                {data.actionButton.title}</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
