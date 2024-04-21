import { useState } from "react";
import resume_Dowload from "./ALEX STEWART CV.pdf";

const Header = () => {
  const [myName, setMyName] = useState("ALEX RAJPUT.");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Contact",
      link: "/contact",
      id: 3,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 4,
    },
    {
      title: "Experience",
      link: "/skills",
      id: 5,
    },
    {
      title: "My Portfolio",
      link: "/portfolio",
      id: 6,
    },
  ]);

  const [actionButton, setActionButton] = useState([
    {
      title: "My GitHub",
      link: "https://github.com/StewartAlex",
      id: 1,
    },
    {
      title: "WhatsApp Me",
      link: "https://api.whatsapp.com/send/?phone=03166365454&text&type=phone_number&app_absent=0https/wa.me/03166365454",
      id: 2,
    },
  ]);

  return (
    <>
      <div className="w-full h-20 sticky top-0 flex justify-between items-center shadow-3xl px-6 md:px-16 bg-black">
        <div>
          {/* brand logo */}
          <h1 className="md:text-4xl text-2xl text-white font-black cursor-pointer">{myName}</h1>
        </div>

        {/* menu links */}
        <div className="md:flex hidden font-semibold text-white">

          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="text-[19px] mx-[12px] tracking-wider hover:text-red-500">
              {link.title}
            </a>
          ))}
        </div>

        {/* buttons */}
        <div className="md:block  space-x-3">
          {actionButton.map((Button) => (
            <a key={Button.id} href={Button.link} className="px-4 py-2 bg-red-600 font-bold text-white text-[16px] tracking-wide outline-none rounded-full hover:bg-white hover:text-black">
              {Button.title}
            </a>
          ))}

          <a href="#" download={resume_Dowload} className="px-4 py-2 bg-red-600 font-bold text-white text-[16px] tracking-wide outline-none rounded-full hover:bg-white hover:text-black">Dowload CV</a>

        </div>
        <div className="md:hidden">
          <a href="#" className="text-4xl font-bold text-white">&#9776;</a>
        </div>
      </div>
    </>
  );
};

export default Header;
