import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 py-12 text-center shadow-lg rounded-xl   service1 space-y-4">
            {/* <i class=" text-5xl fa-brands fa-fa-cart"></i> */}
            <h1 className="text-4xl">Frontend Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="text-xl hover:bg-red-500 hover:text-black bg-white text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
              Checkout
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 py-12 text-center shadow-lg rounded-xl">
            {/* <i class=" text-5xl fa-solid fa-mobile"></i> */}
            <h1 className="text-4xl">Backend Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="text-xl hover:bg-red-500 hover:text-black bg-white text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
              Checkout
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 py-12 text-center shadow-lg rounded-xl">
            {/* <i class=" text-5xl fa-solid fa-server"></i> */}
            <h1 className="text-4xl">Business Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              veniam eius optio? Eveniet facilis dolorum quis exercitationem,
              repudiandae sed dolores.
            </p>
            <button className="text-xl hover:bg-red-500 hover:text-black bg-white text-black outline-none mb-6 px-6  py-2 font-bold rounded-full shadow-lg">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
