import React from "react";
import { Link } from "react-router-dom";
import { addMetaData } from "../core/seoHelpers";

const Home = () => {
  // const services = [
  //   {
  //     name: "Wealth Management",
  //     description:
  //       "Our wealth management services help you achieve your financial goals with tailored investment strategies.",
  //     path: "wealth-management",
  //   },
  //   {
  //     name: "Retirement Planning",
  //     description:
  //       "Plan for a secure and comfortable retirement with our expert financial advice and solutions.",
  //     path: "retirement-planning",
  //   },
  //   {
  //     name: "Small Business Consulting",
  //     description:
  //       "Empowering small businesses with expert financial advice and strategies to achieve sustainable growth.",
  //     path: "small-business-consulting",
  //   },
  // ];

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

      <section className="bg-home flex h-screen w-full">
        <div className="flex w-full flex-col justify-center bg-black bg-opacity-70 p-0 text-gray-50 mt-20">
          <div className="mx-auto w-[90%] md:w-[70%]">
            <h1 className="border-l py-5 pl-5 font-orbitron text-2xl font-extrabold uppercase tracking-wide sm:pl-8 sm:text-3xl">
              Elvis Okolosio <br /> Frontend Developer 
            </h1>

            <p className="mb-8 mt-5">
              Zorg Financial Group offers expert financial solutions to help you
              achieve your goals. From wealth management to small business
              consulting, we have you covered.
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

      <section className="h-auto w-full bg-white lg:h-[70vh]">
        <div className="mx-auto flex h-full w-[90%] md:w-[70%] flex-col items-center py-20">
          <div className="w-full">
            <h5 className="mb-3 text-lg uppercase text-primary">
              About
            </h5>

            <p className="">

            A seasoned Software Engineer with extensive experience building robust, scalable, and innovative solutions across multiple domains. With expertise in JavaScript, TypeScript, React, Angular, Node.js, and .NET, I have consistently delivered high-quality software for top-tier legacy organisations and startups, including Stanbic IBTC Bank, ITab Solutions, and Campusrunz. My strong background in front and backend technologies enables me to take projects from concept to completion efficiently.
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
