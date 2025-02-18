import React from "react";
import { Link } from "react-router-dom";
import { addMetaData } from "../core/seoHelpers";

const Home = () => {
  
  return (
    <>
      {addMetaData({
        title: "Elvis Okolosio",
        description:
          "Elvis is a seasoned developer focused on frontend web development.",
        keywords:
          "Web design and development",
        locale: "en_CA",
        path: "home",
      })}

      <section className="bg-white md:bg-home flex h-screen w-full">
        <div className="flex w-full flex-col justify-center bg-black bg-opacity-70 p-0 text-gray-50 mt-20">
          <div className="mx-auto w-[90%] md:w-[70%]">
            <h1 className="border-l py-5 pl-5 font-orbitron text-2xl font-extrabold uppercase tracking-wide sm:pl-8 sm:text-3xl">
              Elvis Okolosio <br /> Frontend Developer 
            </h1>

            <p className="mb-8 mt-5 md:w-[60%]">
              Welcome to my portfolio. I'm a passionate Frontend Developer with a keen eye for creating engaging, responsive, and user-friendly web applications.
            </p>

            <Link
              to="/contacts"
              className="hover:bg-dark flex w-full items-center justify-center gap-2 rounded-md bg-primary px-[10px] py-[10px] font-mont text-[14px] uppercase text-white !opacity-100 transition duration-300 ease-in-out disabled:cursor-not-allowed sm:w-1/3"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="h-auto w-full bg-white">
        <div className="mx-auto flex h-full w-[90%] md:w-[70%] flex-col items-center py-20">
          <div className="w-full">
            <h5 className="mb-3 text-lg uppercase text-primary">
              About
            </h5>

            <p className="">
              A Frontend Developer with experience in creating responsive and user-friendly web applications. With expertise in HTML, CSS, Javascript, and modern frameworks like React and Vue.js, I strive to bring intuitive digital experiences to life including Campusrunz and Deka Farms. My focus is on clean, efficient code, accessibility, and seamless user interaction. Explore my projects to see how I blend creativity with technology to solve real-world problems and craft digital solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="h-auto w-full bg-white lg:h-[70vh]">
        <div className="mx-auto flex h-full w-[90%] md:w-[70%] flex-col items-center justify-between gap-5 py-20 lg:flex-row-reverse">
          <div className="w-full">
            <h5 className="mb-3 text-lg uppercase text-primary">
              Projects
            </h5>

            <div className="w-full">
            <div className="group mb-5">
              <div>
                <div className="inline-block h-[8px] w-[8px] bg-primary group-hover:bg-dark"></div>
                <a href="https://campusrunz.com" target="_blank" rel="noopener noreferrer" className="font-medium italic underline pl-1">CampusRunz</a>
              </div>
              <p>
              Campusrunz is a platform designed to simplify student life by offering
                  convenient, affordable services such as transportation, accommodation,
                  laundry, groceries, and a vibrant marketplace.              
              </p>
            </div>

            <div className="group mb-5">
              <div>
                <div className="inline-block h-[8px] w-[8px] bg-primary group-hover:bg-dark"></div>
                <a href="https://dekafarms.com" target="_blank" rel="noopener noreferrer" className="font-medium italic underline pl-1">Deka Farms</a>
              </div>
              <p>
              Deka Farms is a website designed for an agriculural firm, showcasing services, food crops, and livestock to attract and engage potential customers effectively.
              </p>
            </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
